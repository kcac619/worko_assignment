import axios from "axios";

const API_URL = "https://api.worko.ai";
const TOKEN = "dummyTokenWeArePassing";

export const fetchCompanies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/company`, {
      params: {
        pageSize: 50,
        companyName: query,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
};
