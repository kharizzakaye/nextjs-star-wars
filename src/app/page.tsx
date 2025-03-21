"use client"

import CardComponent from "@/components/CardComponent";
import { usePeople } from "@/hooks/fetchPeople"

export default function Home() {

  const { data, isLoading, isError } = usePeople();

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
