import { ChartType, TimeSelected } from "./models";

export const supabaseAssetQuery =
  "id,price,ath,price_history,volume_history,circulating_supply,market_cap_history,total_supply,decimals,atl,volume,ath_volume,liquidity,logo,ath_liquidity,rank,market_cap,market_cap_diluted,name,symbol,description,twitter,chat,discord,contracts,blockchains,market_score,trust_score,social_score,website,kyc,audit,utility_score,circulating_supply,trade_history(*),price_change_24h,tracked,assets_social(*)";

export const types: ChartType[] = ["price", "liquidity"];

export const timestamps: TimeSelected[] = [
  "24H",
  "7D",
  "30D",
  "3M",
  "1Y",
  "ALL",
];

export const timestamp: Record<TimeSelected, number> = {
  "24H": 86400000,
  "7D": 604800000,
  "30D": 2592000000,
  "3M": 7776000000,
  "1Y": 31536000000,
  ALL: Infinity,
};

export const tagsColors = ["red", "blue", "rebeccapurple", "green", "yellow"];

export const colors = [
  "#474D57",
  "#A87EF7",
  "#54DADE",
  "#5CA7F7",
  "#8CDD3C",
  "#05C076",
  "#F8D12F",
  "#FC6F75",
  "#165DFF",
  "#D91AD9",
  "#F7BA1E",
  "#722ED1",
  "#0ECB81",
  "#EE5858",
  "#B4CFFF",
  "#2F3658",
];

export const nonMatchingColors = [
  "#FF5733", // Flashy Orange
  "#33FF57", // Flashy Green
  "#3357FF", // Flashy Blue
  "#33D1FF", // Flashy Sky Blue
  "#AD33FF", // Flashy Purple
  "#FF3366", // Flashy Red
  "#33FFA1", // Flashy Mint
  "#33D4FF", // Flashy Azure
  "#FC33FF", // Flashy Magenta
  "#FF9933", // Complémentaire Orange
  "#99FF33", // Complémentaire Vert
  "#9933FF", // Complémentaire Violet
  "#33FFFF", // Complémentaire Cyan
  "#FF33CC", // Complémentaire Rose
];
