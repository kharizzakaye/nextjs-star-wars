"use client"

import CardComponent from "@/components/CardComponent";
import { useSpecies } from "@/hooks/fetchSpecies";

export default function Home() {

  const { data, isLoading, isError } = useSpecies();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <>
      <div className="container mx-auto px-4">
        <CardComponent cardData={data} />
      </div>
    </>
  )
}