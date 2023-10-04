import api from "@/utils/api";

export const getSiteByDomain = async (domain: string) => {
    const { data } = await api.get(`/site/${domain}`);
    return data;
};