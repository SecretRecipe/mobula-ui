"use client";
import { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import { register } from "swiper/element/bundle";
import { Container } from "../../../components/container";
import { OrderBy, TableAsset } from "../../../interfaces/assets";
import { tabs } from "../../../layouts/menu-mobile/constant";
import { TopNav } from "../../../layouts/menu-mobile/top-nav";
import { AssetsTable } from "../../../layouts/tables/components";
import { BoxMiddle } from "./components/box-middle";
import { BoxRight } from "./components/box-right";
import { Pagination } from "./components/pagination";
import { Portfolio } from "./components/portfolio";
import { useTop100 } from "./context-manager";
import { useFilter } from "./hooks/useFilter";
import { Query, View } from "./models";
import { Views } from "./views";

interface Top100Props {
  tokens: TableAsset[];
  count: number;
  cookieTop100?: View;
  defaultFilter: Query[] | null;
  metrics?: {
    fear_and_greed_value: number;
    fear_and_greed_value_classification: string;
  };
  actualView?: View;
}

register();

export const Top100 = ({
  tokens: bufferTokens,
  count,
  defaultFilter,
  metrics,
}: Top100Props) => {
  const [orderBy, setOrderBy] = useState<OrderBy>({
    type: "market_cap",
    ascending: false,
    first: true,
  });
  const { isMobile } = useTop100();
  const [resultsData, setResultsData] = useState({ data: bufferTokens, count });
  const [showPage, setShowPage] = useState(0);
  const [filters, setFilters] = useState<Query[] | null>(
    defaultFilter || [{ action: "", value: [], isFirst: true }]
  );
  useFilter({ setFilters, orderBy });

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      speed: 300,
      spaceBetween: 0,
      autoplay: false,
      loop: false,
      modules: [],
      centerInsufficientSlides: true,
      longSwipes: false,
    });
  }, []);

  return (
    <>
      {isMobile ? <TopNav list={tabs} active="Home" isGeneral /> : null}
      <div className="flex flex-col bg-light-bg-primary dark:bg-dark-bg-primary overflow-x-hidden">
        <div className="flex bg-light-bg-table dark:bg-dark-bg-table pb-5 md:pb-2.5 w-full">
          {isMobile ? (
            <Container extraCss="flex flex-row max-w-[1300px] bg-light-bg-table dark:bg-dark-bg-table justify-between mb-0 pb-0 overflow-x-scroll w-full">
              <div className="flex w-95per mx-auto">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide flex justify-center">
                      <Portfolio showPageMobile={showPage} />
                    </div>
                    <div className="swiper-slide flex justify-center">
                      <BoxMiddle showPageMobile={showPage} metrics={metrics} />
                    </div>
                    <div className="swiper-slide flex justify-center">
                      <BoxRight showPageMobile={showPage} />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          ) : (
            <Container extraCss="scroll flex flex-row max-w-[1300px] bg-light-bg-table dark:bg-dark-bg-table justify-between mb-0 overflow-x-scroll mt-7 md:mt-2.5 min-h-full">
              <Portfolio />
              <BoxMiddle metrics={metrics} />
              <BoxRight />
            </Container>
          )}
        </div>
      </div>
      <div className="bg-light-bg-table dark:bg-dark-bg-table">
        <Views setResultsData={setResultsData} />
        <Container extraCss="flex-row max-w-[1300px] justify-between mb-0 mt-0 overflow-x-hidden lg:mt-0">
          <AssetsTable
            resultsData={resultsData}
            setResultsData={setResultsData}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            filters={filters}
            isTop100
            showRank
            isMobile={isMobile}
            // noResult={!(resultsData?.data?.length > 0)}
          />
        </Container>
      </div>

      {resultsData.count > 100 && (
        <Pagination maxPage={Math.floor(resultsData.count / 100)} />
      )}
      {/* 
      <Flex h="1400px" w="100%" bg={bgTable} pt="150px" direction="column">
        <Flex maxW="1300px" mx="auto" h="200px">
          <Button bg="#FFA519" h="40px" w="120px">
            Depot
          </Button>
        </Flex>
        <Flex maxW="1300px" mx="auto" h="200px">
          <Button bg="rebeccapurple" h="40px" w="120px">
            Depot
          </Button>
        </Flex>
        <Flex maxW="1300px" mx="auto" h="200px">
          <Button bg="#E4C9B0" h="40px" w="120px" color="rgba(0,0,0,0.8)">
            Depot
          </Button>
        </Flex>
      </Flex> */}
    </>
  );
};
