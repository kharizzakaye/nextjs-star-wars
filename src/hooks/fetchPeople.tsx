import { useQuery } from "@tanstack/react-query";

const fetchPeople = async () => {
  const response = await fetch(`https://swapi.py4e.com/api/people/`);
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();
};

export const usePeople = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["people"],
    queryFn: fetchPeople,
  });

  return { data, isLoading, isError };
};