import { apiInstance } from "../apiInstance";

export async function addProduct(requestData) {
  const PATH = "/events";
  try {
    const res = await apiInstance.post(PATH, requestData, {
      headers: {
        Authorization: window.localStorage.getItem("Token")
      }
    });
    const apiRes = res.data;
    return apiRes.success;
  } catch (e) {
    throw e.name;
  }
}

export async function getProductById(productId) {
  const PATH = `/events/${productId}`;
  try {
    const res = await apiInstance.get(PATH);
    const apiRes = res.data;
    return apiRes.data;
  } catch (e) {
    throw e.name;
  }
}

export async function deleteProduct(productId) {
  const PATH = `/events/${productId}`;
  try {
    const res = await apiInstance.delete(PATH);
    const apiRes = res.data;
    return apiRes.data;
  } catch (e) {
    throw e.name;
  }
}

export async function getAllProducts() {
  const PATH = "/events";
  try {
    const res = await apiInstance.get(PATH);
    return res.data;
  } catch (e) {
    throw e.name;
  }
}

export async function getProductsBySubcategory(id) {
  const PATH = "/product/bySubcategory/" + id;
  try {
    if (id !== "") {
      const res = await apiInstance.get(PATH);
      const apiRes = res.data;
      return apiRes.data;
    }
  } catch (e) {
    throw e.name;
  }
}
