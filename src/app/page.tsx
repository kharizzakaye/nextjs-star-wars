"use client"

import { usePeople } from "@/hooks/fetchPeople"

export default function Home() {

  const { data, isLoading, isError } = usePeople();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  console.log(data.results)

  return (
    <>
      {
        data.results.map((people: any) => (
          <p key={people.name}>{people.name}</p>
        ))
      }
    </>
  )
}
