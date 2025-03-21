// import { useQuery } from "@tanstack/react-query";
// import { BASE_URL } from "@/constants/constants";

// const fetchSpecies = async () => {
//   try
//   {
//     const response = await fetch(`${BASE_URL}/species/`);
    
//     if (!response.ok) {
//       throw new Error("Failed to fetch characters");
//     }
//     return response.json();
//   }
//   catch (error) 
//   {
//     console.error("Error occurred while fetching characters: ", error);
//     throw error;
//   }
// };

// export const useSpecies = () => {
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["species"],
//     queryFn: fetchSpecies,
//   });

//   return { data, isLoading, isError };
// };


import { useInfiniteQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants/constants";

const fetchSpecies = async ({ pageParam = 1 }: { pageParam?: number }) => {
  try
  {
    const response = await fetch(`${BASE_URL}/species/?page=${pageParam}`);
  
    if (!response.ok) 
    {
      throw new Error("Failed to fetch species");
    }
    return response.json();
  }
  catch (error) 
  {
    console.error("Error occurred while fetching species: ", error);
    throw error;
  }
};

export const useSpecies = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["people"],
    queryFn: fetchSpecies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPageUrl = lastPage.next;

      if (nextPageUrl)
      {
        const urlParams = new URL(nextPageUrl).searchParams;
        return parseInt(urlParams.get("page") || "0", 10); // Extract the next page number
      }
      return undefined; // No more pages
    },
  });

  return { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage };
};