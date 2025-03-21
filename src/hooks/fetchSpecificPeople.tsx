import { useQuery } from "@tanstack/react-query";

const fetchSpecificPeople = async () => {
  const response = await fetch(`https://swapi.py4e.com/api/people/`);
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();
};

export const useSpecificPeople = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["species"],
    queryFn: fetchSpecificPeople,
  });

  return { data, isLoading, isError };
};