"use client";

import { ReactNode } from "react";
import Splash from "@/components/Splash";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Splash />
      {children}
    </>
  );
}
