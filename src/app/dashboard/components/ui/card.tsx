import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: Props) {
  return (
    <div className={`bg-white rounded-2xl shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: Props) {
  return <div className={`mb-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: Props) {
  return <h2 className={`text-lg font-semibold text-black ${className}`}>{children}</h2>;
}


export function CardContent({ children, className = "" }: Props) {
  return <div className={`text-sm text-gray-700 ${className}`}>{children}</div>;
}
