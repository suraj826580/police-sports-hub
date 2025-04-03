
import React from "react";
import { cn } from "@/lib/utils";

interface DataCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const DataCard: React.FC<DataCardProps> = ({ 
  title, 
  children, 
  className,
  titleClassName
}) => {
  return (
    <div className={cn("police-card p-4", className)}>
      {title && (
        <h3 className={cn("font-bold text-lg mb-2 text-black", titleClassName)}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default DataCard;
