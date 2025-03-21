"use client"

import CardComponent from "@/components/CardComponent";
import { useSpecies } from "@/hooks/fetchSpecies";
import { useEffect } from "react";

export default function Home() {

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useSpecies();

  // Infinite Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 // Trigger loading 100px before bottom
      ) {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  const speciesDetailsFields = [
    { title: "Classification", value: "classification" },
    { title: "Designation", value: "designation" },
    { title: "Language", value: "language" },
    { title: "Average Lifespan", value: "average_lifespan" }
  ];
  
  return (
    <div className="container mx-auto px-4">
      {data?.pages.map((speciesData: any, index: any) => (
        <CardComponent 
          key={index} 
          cardData={speciesData}
          cardDetailsFields={speciesDetailsFields}
        />
      ))}
    </div>
  )
}