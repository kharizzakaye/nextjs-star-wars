import { useQuery } from "@tanstack/react-query";

const fetchSpecies = async () => {
  const response = await fetch(`https://swapi.py4e.com/api/species/`);
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();
};

export const useSpecies = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["species"],
    queryFn: fetchSpecies,
  });

  return { data, isLoading, isError };
};