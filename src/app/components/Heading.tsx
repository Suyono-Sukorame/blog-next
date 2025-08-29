
import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return <h1 className="text-2xl font-bold pb-3">{children}</h1>;
}
