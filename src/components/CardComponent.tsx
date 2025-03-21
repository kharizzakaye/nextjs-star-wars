import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import RowDetailComponent from "./RowDetailComponent";

interface CardComponentProps {
  cardData: any;
  cardDetailsFields: { title: string; value: string }[];
}


const CardComponent: React.FC<CardComponentProps> = ({ cardData, cardDetailsFields }) => {
  console.log("cardDataR",cardData)
  return (
    <div className="grid grid-cols-2 gap-8 mt-8">
      {cardData.results.map((item: any) => (
        <Link key={item.name} href={`/${item.name}`} passHref>
          <Card>
            <CardHeader>
              <CardTitle className="font-extrabold">{item.name}</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-4">
              { cardDetailsFields.map((field) => (

                <RowDetailComponent 
                  key={field.value}
                  title={field.title}
                  data={item[field.value]}
                />

              ))}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardComponent;
