import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { AddressAvatar } from "../../../../components/avatar";
import { pushData } from "../../../../lib/mixpanel";
import { getFormattedAmount } from "../../../../utils/formaters";
import { SearchbarContext } from "../../context-manager";
import { Title } from "../ui/title";

interface PairsFromAddressProps {
  pairs: {
    token0?: {
      name: string;
      symbol: string;
      logo: string;
    };
    token1?: {
      name: string;
      symbol: string;
      logo: string;
    };
    address?: string;
    liquidity?: string;
  }[];
  name?: string;
}

export const PairResult = ({ setTrigger, firstIndex }) => {
  const { active, setActive, pairs, results } = useContext(SearchbarContext);
  const router = useRouter();
  const clickEvent = (result) => {
    setTrigger(false);
    pushData("Searchbar", {
      type: "pairs",
      soloPair: result.token0.address,
      pair: result.address,
    });
    router.push(`/pair/${result.address}`);
  };
  const notListedTokens = results?.filter((entry) => !entry.id);
  const isBaseToken = (result, pair) => result?.symbol === pair?.token0?.symbol;
  const isQuoteToken = (result, pair) =>
    result?.symbol === pair?.token1?.symbol;

  const resultsWithPair = results?.filter(
    (entry) => (entry?.pairs?.length || 0) > 0 && entry.id
  );

  const formatPairsResultFromAddress = () => {
    if (!pairs?.length) return;
    let formatedPairs: PairsFromAddressProps[] = [];
    pairs.forEach((pair) => {
      const templatePair = {
        pairs: [
          {
            token0: pair.token0,
            token1: pair.token1,
            address: pair.address,
            liquidity: pair.liquidity,
          },
        ],
        name: "",
      };
      formatedPairs.push(templatePair);
    });
    return formatedPairs || [];
  };
  const searchPairAddress = formatPairsResultFromAddress();
  const finalPairs = [
    ...resultsWithPair,
    ...notListedTokens,
    ...(searchPairAddress || []),
  ];

  console.log("finalPair,", finalPairs);

  return (
    <div
      className={`${
        finalPairs?.filter((_, i) => i < 5)?.length > 0
          ? "mt-2.5"
          : "mt-0 hidden"
      }`}
    >
      {finalPairs?.filter((_, i) => i < 5)?.length > 0 && (
        <Title extraCss="mt-[5px]">
          Pairs ({finalPairs?.filter((_, i) => i < 5)?.length})
        </Title>
      )}
      {finalPairs
        ?.filter((_, i) => i < 5)
        .map((result, index) => {
          const pair = result?.pairs?.[0];
          return (
            <div
              className={`flex items-center cursor-pointer transition-all duration-200 justify-between ${
                active === index + firstIndex
                  ? "bg-light-bg-hover dark:bg-dark-bg-hover"
                  : ""
              } py-[7px] px-[20px] md:px-2.5 hover:bg-light-bg-hover hover:dark:bg-dark-bg-hover`}
              onMouseOver={() => setActive(index + firstIndex)}
              onClick={() => clickEvent(pair)}
            >
              <div className="flex items-center">
                {(isBaseToken(result, pair) && pair?.token0?.logo) ||
                (!isBaseToken(result, pair) && pair?.token1?.logo) ? (
                  <img
                    src={
                      isBaseToken(result, pair)
                        ? pair?.token0?.logo
                        : pair?.token1?.logo
                    }
                    className="w-[20px] h-[20px] rounded-full mr-[7.5px]"
                  />
                ) : (
                  <AddressAvatar
                    address={pair?.address as string}
                    extraCss="w-[20px] h-[20px] rounded-full mr-[7.5px]"
                  />
                )}
                {(isQuoteToken(result, pair) && pair?.token0?.logo) ||
                (!isQuoteToken(result, pair) && pair?.token1?.logo) ? (
                  <img
                    src={
                      isQuoteToken(result, pair)
                        ? pair?.token0?.logo || "/empty/unknown.png"
                        : pair?.token1?.logo || "/empty/unknown.png"
                    }
                    className="w-[20px] h-[20px] rounded-full mr-[7.5px]"
                  />
                ) : (
                  <AddressAvatar
                    address={pair?.address as string}
                    extraCss="w-[20px] h-[20px] rounded-full mr-[7.5px]"
                  />
                )}
                <p className="text-sm font-medium md:font-normal max-w-[340px] truncate text-light-font-100 dark:text-dark-font-100 mr-2.5">
                  {isBaseToken(result, pair)
                    ? pair?.token0?.symbol?.toUpperCase() || "--"
                    : pair?.token1?.symbol?.toUpperCase() || "--"}{" "}
                  /{" "}
                  {isQuoteToken(result, pair)
                    ? pair?.token0?.symbol?.toUpperCase() || "--"
                    : pair?.token1?.symbol?.toUpperCase() || "--"}
                </p>
                <p className="text-sm max-w-[100px] truncate text-light-font-60 dark:text-dark-font-60 mr-2.5">
                  {result?.name || ""}
                </p>
              </div>
              <p className="text-sm font-medium md:font-normal max-w-[340px] truncate text-light-font-100 dark:text-dark-font-100">
                <span className="text-light-font-40 dark:text-dark-font-40 mr-1">
                  Liquidity:
                </span>{" "}
                $
                {getFormattedAmount(pair?.liquidity, 0, {
                  canUseHTML: true,
                })}
              </p>
            </div>
          );
        })}
    </div>
  );
};
