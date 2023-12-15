import { useEffect } from "react";
import { SAFU_CHAIN } from "../../../constants";
import { useMetaContext } from "./useSwapCommon";

export const useSlippage = () => {
  const context = useMetaContext();
  const {
    setIsFeesLoading,
    tokenIn,
    tokenOut,
    settings,
    setSettings,
    slippageTokenIn,
    slippageTokenOut,
    setSlippageTokenIn,
    setSlippageTokenOut,
  } = context;

  // Syntaxic sugar
  const setSlippage = {
    in: setSlippageTokenIn,
    out: setSlippageTokenOut,
  };

  const updateSlippage = (position: "in" | "out", address?: string | null) => {
    if (!settings.autoTax) return;
    const capPosition = position.charAt(0).toUpperCase() + position.slice(1);
    const token = context[`token${capPosition}`];

    if (!token || !SAFU_CHAIN[token!.blockchain]) {
      setIsFeesLoading(false);
      setSlippage[position](0.25);
      return;
    }

    if (address) {
      // setIsFeesLoading(true);
      fetch(
        `https://api.staysafu.org/api/scan?tokenAddress=${address}&key=mobulaforever&onlySimulateBuy=true&chain=${
          SAFU_CHAIN[token!.blockchain]
        }`
      )
        .then((r) => r.json())
        .then((r) => {
          // setIsFeesLoading(false);
          if (
            !Number.isNaN(r?.result?.trade?.buyFee) &&
            !Number.isNaN(r?.result?.trade?.sellFee)
          ) {
            if (position === "in") {
              setSlippageTokenIn(r.result.trade.sellFee * 1.1 + 0.25);
            } else setSlippageTokenOut(r.result.trade.buyFee * 1.1 + 0.25);
          } else setSlippage[position](0.25);
        });
    } else setSlippage[position](0.25);
  };

  useEffect(() => {
    if (!tokenIn) return;
    updateSlippage("in", "address" in tokenIn ? tokenIn.address : null);
  }, [tokenIn]);

  useEffect(() => {
    if (!tokenOut) return;
    updateSlippage("out", "address" in tokenOut ? tokenOut.address : null);
  }, [tokenOut]);

  useEffect(() => {
    if (settings && settings.slippage !== slippageTokenIn + slippageTokenOut) {
      if (slippageTokenIn + slippageTokenOut > settings.maxAutoTax) return;
      setSettings((settingsBuffer) => ({
        ...settingsBuffer,
        slippage: slippageTokenIn + slippageTokenOut,
      }));
    }
  }, [slippageTokenIn, slippageTokenOut]);

  return { updateSlippage, slippageTokenIn, slippageTokenOut };
};
