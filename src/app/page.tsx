"use client";

import { useEffect } from "react";
import CardComponent from "@/components/CardComponent";
import { usePeople } from "@/hooks/fetchPeople";

export default function Home() {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = usePeople();

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

  const characterDetailsFields = [
    { title: "Birth Year", value: "birth_year" },
    { title: "Height", value: "height" },
    { title: "Weight", value: "mass" },
    { title: "Eye Color", value: "eye_color" }
  ];

  return (
    <div className="container mx-auto px-4">
      {data?.pages.map((peopleData, index) => (
        <CardComponent 
          key={index} 
          cardData={peopleData}
          cardDetailsFields={characterDetailsFields}
        />
      ))}
    </div>
  );
}
