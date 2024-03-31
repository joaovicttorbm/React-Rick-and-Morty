import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const fetchData = async () => {
  try {
    const {
      data: { results = [{}] },
    } = await api.get("/character");
    return results;
  } catch (error) {
    throw new Error("Erro ao buscar dados da API:", error);
  }
};
