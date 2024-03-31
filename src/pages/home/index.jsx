import React, { useState, useEffect, useMemo } from "react";
import { fetchData } from "../../service/api";
import HeaderComponent from "../../components/hearderComponets";
import Card from "../../components/card";
import { Container, ContainerItens } from "./styles";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataMemoized = useMemo(() => fetchData, []);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const apiData = await fetchDataMemoized();
        setData(apiData);
      } catch (error) {
        setError("Erro ao buscar dados da API");
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [fetchDataMemoized]);
  console.log(data);
  return (
    <Container>
      <HeaderComponent />
      <ContainerItens>
        {loading && <LoadingIndicator />}
        {error && <ErrorIndicator error={error} />}
        {!loading && !error && <Card characterData={data} />}
      </ContainerItens>
    </Container>
  );
}

function LoadingIndicator() {
  return <div>Loading...</div>;
}

function ErrorIndicator({ error }) {
  return <div>Erro: {error}</div>;
}
