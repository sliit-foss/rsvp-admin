import { queryCache, useQuery } from "react-query";
import { getAllEvent, getEventById } from "../api/event/event.request";

const PRODUCT_LIST = "PRODUCT_LIST";

export function useGetProducts() {
  return useQuery(PRODUCT_LIST, getAllEvent);
}

export function refetchProducts() {
  return queryCache.invalidateQueries(PRODUCT_LIST);
}

export function useGetProductById(id) {
  return useQuery(["SELECTED_PRODUCT", id], getEventById(id));
}

// const PRODUCT_SUB_CATEGORY_LIST = "PRODUCT_SUB_CATEGORY_LIST";
// export function useGetProductSubCategories() {
//   return useQuery(PRODUCT_SUB_CATEGORY_LIST, getProductSubCategories);
// }
//
// export function refetchProductSubCategories() {
//   return queryCache.invalidateQueries(PRODUCT_SUB_CATEGORY_LIST);
// }
