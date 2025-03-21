import React from "react";

interface InfoCardProps {
  title: string;
  data: string;
}

const RowDetailComponent: React.FC<InfoCardProps> = ({ title, data }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <p className="text-sm font-medium leading-none">{title}</p>
      <p className="text-sm text-muted-foreground">{data}</p>
    </div>
  );
};

export default RowDetailComponent;
