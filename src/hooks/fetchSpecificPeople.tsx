import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants/constants";

const fetchSpecificPeople = async () => {
  const response = await fetch(`${BASE_URL}/people/`);
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