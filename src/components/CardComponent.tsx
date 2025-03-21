import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import RowDetailComponent from "./RowDetailComponent";

const CardComponent = (cardData: any) => {
  return (
    <div className="grid grid-cols-2 gap-8 mt-24">
      {cardData.cardData.results.map((character: any) => (
        <Link key={character.name} href={`/${character.name}`} passHref>
          <Card>
            <CardHeader>
              <CardTitle className="font-extrabold">{character.name}</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-4">
              <RowDetailComponent title="Birth Year" data={character.birth_year} />
              <RowDetailComponent title="Height" data={`${character.height} cm`} />
              <RowDetailComponent title="Weight" data={`${character.mass} kgs`} />
              <RowDetailComponent title="Eye Color" data={`${character.eye_color}`} />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardComponent;
