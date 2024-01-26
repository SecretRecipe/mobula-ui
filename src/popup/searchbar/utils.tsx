import { SupabaseClient } from "@supabase/supabase-js";
import { Dispatch, SetStateAction } from "react";
import { isAddress } from "viem";
import { GET } from "../../utils/fetch";
import { allPages } from "./constants";
import { ArticlesType, Token, User } from "./models";

export const getUserFromAddress = (
  setUserWithAddress: Dispatch<SetStateAction<User>>,
  token: string,
  supabase: SupabaseClient
): void => {
  supabase
    .from("users")
    .select("address,username,profile_pic")
    .eq("address", token)
    .then((r) => {
      if (r.data) setUserWithAddress(r.data[0]);
    });
};

export const getArticle = (
  setArticles: Dispatch<SetStateAction<ArticlesType[]>>,
  supabase: SupabaseClient
) => {
  supabase
    .from<ArticlesType>("blog_posts")
    .select("title,likes,url,type")
    .order("likes", { ascending: false })
    .limit(3)
    .filter("validate", "eq", "true")
    .then((r) => {
      if (r.data)
        setArticles(
          r.data.map((entry) => ({
            ...entry,
            url: `/forum/${entry.type}/${entry.url}`,
          }))
        );
    });
};

export const updateSearch = async (
  search: string,
  supabase: SupabaseClient,
  setResults: Dispatch<SetStateAction<Token[]>>,
  maxAssetsResult = 5
) => {
  const query = supabase
    .from("assets")
    .select("name,rank,symbol,logo,market_cap,price_change_24h,price");
  if (isAddress(search)) {
    query.contains("contracts", `{${search.toLowerCase()}}`);
  } else {
    query.or(
      `name.ilike.${search}%,symbol.ilike.${search}%,name.ilike.${search}`
    );
  }

  if (!search)
    query.or(
      "volume.gte.100000,liquidity_market_cap_ratio.gte.0.01,coin.eq.true"
    );

  const { data: names } = await query
    .order("market_cap", { ascending: false })
    .limit(maxAssetsResult);
  if (names) {
    setResults(names);
  }
};

export const getDataFromInputValue = (
  value,
  supabase,
  setUsers,
  setUserWithAddress,
  setPairs,

  maxWalletsResult = 3
) => {
  console.log("VALUE IS HERE", value);
  if (value) {
    supabase
      .from("users")
      .select("username,address,profile_pic")
      .order("visits", { ascending: false })
      .or(
        `username.ilike.${value}%,username.ilike.${value},address.ilike.${value}%,address.ilike.${value}`
      )
      .limit(maxWalletsResult)
      .then((r) => {
        if (r.data) setUsers(r.data);
      });
    getUserFromAddress(setUserWithAddress, value, supabase);
    console.log("VALUE", value);
    if (isAddress(value))
      GET("/api/1/market/pairs", {
        address: value,
      })
        .then((r) => r.json())
        .then((r) => {
          if (r.data) {
            const pairsFiltered = r.data?.filter((__, i) => i < 5);
            setPairs(pairsFiltered);
          }
        });
  }
};

export const getPagesFromInputValue = (setPages, value) => {
  const newPages: { requests: string[]; name: string; url: string }[] = [];
  allPages?.forEach((page) => {
    page.requests.forEach((request) => {
      if (request.includes(value) && !newPages.includes(page)) {
        newPages.push(page);
      }
    });
  });
  setPages(newPages.filter((__, i) => i < 3));
};
