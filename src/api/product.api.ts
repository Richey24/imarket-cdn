import api from "@/utils/api";

export const findProduct = async (
    productId: string) => {
    const { data } = await api.get(`/products/details/${productId}`);
    return data;
};


export const findSiteProducts = async (
    companyId: string) => {
    const { data } = await api.get(`/products/site/${companyId}`);
    return data;
};

export const findFeaturedProducts = async (companyId: string) => {
    const { data } = await api.get(`/products/${companyId}/featured`);
    return data;
};