import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsTriangleFill } from "react-icons/bs";
import { LargeFont, MediumFont, SmallFont } from "../../../../components/fonts";
import { Popover } from "../../../../components/popover";
import { famousContractsLabelFromName } from "../../../../layouts/swap/utils";
import { GET } from "../../../../utils/fetch";
import {
  getFormattedAmount,
  getTokenPercentage,
} from "../../../../utils/formaters";
import { BaseAssetContext } from "../../context-manager";

export const PairsSelector = () => {
  const { baseAsset, setAssetPairs, assetPairs } = useContext(BaseAssetContext);

  const fetchPairs = () => {
    if (!assetPairs?.length) {
      GET("/api/1/market/pairs", {
        asset: baseAsset?.[baseAsset?.baseToken]?.name,
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.data) {
            setAssetPairs(r.data);
          }
        });
    }
  };

  useEffect(() => {
    fetchPairs();
  }, [baseAsset]);

  return (
    <Popover
      visibleContent={
        <div
          className="flex items-center justify-between cursor-pointer
          rounded-lg transition-all duration-200 ease-linear w-full mb-2.5"
        >
          <div className="flex items-center">
            <img
              className="w-[40px] h-[40px] min-w-[40px] lg:w-[22px] lg:h-[22px] lg:min-w-[22px] 
              md:w-[20px] md:h-[20px] md:min-w-[20px] mr-2.5 rounded-full"
              src={baseAsset?.[baseAsset?.baseToken]?.logo}
              alt={`${baseAsset?.name} logo`}
            />
            <div className="flex flex-col">
              <LargeFont extraCss="leading-tight font-normal">
                <span className="font-medium">
                  {baseAsset?.[baseAsset?.baseToken]?.symbol}
                </span>{" "}
                <span className="text-light-font-60 dark:text-dark-font-60">
                  /
                </span>{" "}
                {baseAsset?.[baseAsset?.quoteToken]?.symbol}
              </LargeFont>
              <MediumFont extraCss="text-light-font-60 dark:text-dark-font-60 text-start">
                {baseAsset?.[baseAsset?.baseToken]?.name}
              </MediumFont>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-end">
              <LargeFont extraCss="leading-tight font-normal">
                ${getTokenPercentage(baseAsset?.[baseAsset?.baseToken]?.price)}
              </LargeFont>
              <div className="flex items-center">
                <BsTriangleFill
                  className={`${
                    baseAsset?.change_24h > 0
                      ? "rotate-0 text-green dark:text-green"
                      : "rotate-180 text-red dark:text-red"
                  } text-[8px] mr-1`}
                />
                <MediumFont
                  extraCss={`${
                    baseAsset?.change_24h > 0
                      ? "text-green dark:text-green"
                      : "text-red dark:text-red"
                  } text-start leading-[20px]`}
                >
                  {getTokenPercentage(baseAsset?.change_24h)}%
                </MediumFont>
              </div>
            </div>
            <BiChevronDown className="text-xl text-light-font-60 dark:text-dark-font-60 mx-2" />
          </div>
        </div>
      }
      hiddenContent={
        <div className="flex flex-col min-w-[300px] max-h-[410px] overflow-y-scroll scroll">
          {assetPairs?.pairs?.map((pair, i) => (
            <Link href={`/pair/${pair.address}`} key={i}>
              <div
                className="flex items-center justify-between p-2.5 hover:bg-light-bg-hover hover:dark:bg-dark-bg-hover cursor-pointer
               transition-all duration-200 ease-linear rounded-md"
              >
                <div className="flex items-center">
                  <div className="relative w-fit h-fit mr-5">
                    <img
                      className="w-[34px] h-[34px] min-w-[34px] lg:w-[22px] lg:h-[22px] lg:min-w-[22px] md:w-[20px] md:h-[20px]
                     md:min-w-[20px] rounded-full bg-light-bg-hover dark:bg-dark-bg-hover border-2 border-blue dark:border-blue"
                      src={
                        pair?.[baseAsset?.quoteToken]?.logo ||
                        "/empty/unknown.png"
                      }
                      alt={`${baseAsset?.name} logo`}
                    />
                    <img
                      className="w-[20px] h-[20px] min-w-[20px] rounded-full absolute bottom-[-2px] right-[-5px] shadow-xl 
                  border-2 border-light-border-primary dark:border-dark-border-primary bg-light-bg-hover dark:bg-dark-bg-hover"
                      src={
                        famousContractsLabelFromName[pair?.protocol]?.logo ||
                        "/empty/unknown.png"
                      }
                      alt={`${baseAsset?.name} logo`}
                    />
                  </div>
                  <div className="flex flex-col">
                    <LargeFont extraCss="leading-tight">
                      <span className="font-medium">
                        {" "}
                        {pair?.[baseAsset?.baseToken]?.symbol}
                      </span>{" "}
                      <span className="text-light-font-60 dark:text-dark-font-60 font-normal">
                        / {pair?.[baseAsset?.quoteToken]?.symbol}
                      </span>
                    </LargeFont>
                    <div className="flex items-center">
                      <SmallFont extraCss="text-light-font-40 dark:text-dark-font-40 text-start text-xs">
                        Liquidity:
                      </SmallFont>
                      <SmallFont extraCss="text-start text-xs ml-2">
                        ${getFormattedAmount(pair?.liquidity, 2)}
                      </SmallFont>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end ml-5">
                  <LargeFont extraCss="leading-tight text-light-font-80 dark:text-dark-font-80">
                    $
                    {getFormattedAmount(
                      pair?.price,
                      2,
                      {
                        minifyZeros: true,
                        minifyBigNumbers: true,
                      },
                      true
                    )}
                  </LargeFont>
                  <div className="flex items-center">
                    <SmallFont extraCss="text-light-font-40 dark:text-dark-font-40 text-start text-xs">
                      Volume:
                    </SmallFont>
                    <SmallFont extraCss="text-start text-xs ml-2">
                      ${getFormattedAmount(pair?.volume, 2)}
                    </SmallFont>
                  </div>
                </div>
              </div>{" "}
            </Link>
          ))}
        </div>
      }
    />
  );
};
