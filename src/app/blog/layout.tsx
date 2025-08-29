import React, { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <div className="">[Sidebar]</div>
      <div className="px-4">{children}</div>
    </div>
  );
}


