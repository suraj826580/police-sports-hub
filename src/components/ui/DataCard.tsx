
import { cn } from "@/lib/utils";
import React from "react";

interface DataCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const DataCard = ({ 
  title, 
  children, 
  className,
  titleClassName
}: DataCardProps) => {
  return (
    <div className={cn("police-card p-4", className)}>
      {title && (
        <h3 className={cn("font-semibold text-lg mb-2", titleClassName)}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default DataCard;
