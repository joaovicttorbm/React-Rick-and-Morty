import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

const fetchDataMemoized = useMemo(() => fetchData, []);
const [data, setData] = useState(null);

useEffect(() => {
  const fetchDataAsync = async () => {
    try {
      const apiData = await fetchDataMemoized();
      setData(apiData);
    } catch (error) {
      console.log("Erro ao buscar dados da API");
    } finally {
      console.log("false");
    }
  };

  fetchDataAsync();
}, [fetchDataMemoized]);

test("renders card component with character data", () => {
  const { getByText, getByAltText } = render(<Card characterData={data} />);

  // Verifica se os elementos dos personagens são renderizados corretamente
  const character1Name = getByText(/Character 1/i);
  const character2Name = getByText(/Character 2/i);
  expect(character1Name).toBeInTheDocument();
  expect(character2Name).toBeInTheDocument();

  // Verifica se as imagens dos personagens são renderizadas corretamente
  const character1Image = getByAltText("Character 1");
  const character2Image = getByAltText("Character 2");
  expect(character1Image).toBeInTheDocument();
  expect(character2Image).toBeInTheDocument();
});

test("renders no data message when character data is empty", () => {
  const { getByText } = render(<Card characterData={[]} />);
  const noDataMessage = getByText(/Nenhum dado disponível./i);
  expect(noDataMessage).toBeInTheDocument();
});

test("renders error message when error prop is true", () => {
  const { getByText } = render(<Card error={true} />);
  const errorMessage = getByText(/Erro ao carregar os dados./i);
  expect(errorMessage).toBeInTheDocument();
});

test('calls retry function when "Tentar Novamente" button is clicked', () => {
  const retryMock = jest.fn();
  const { getByText } = render(<Card error={true} retry={retryMock} />);
  const retryButton = getByText(/Tentar Novamente/i);
  fireEvent.click(retryButton);
  expect(retryMock).toHaveBeenCalled();
});
