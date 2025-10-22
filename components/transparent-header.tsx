"use client";

import TopBar from "./TopBar";
import NavigationHeader from "./NavigationHeader";

// Componente principal que combina ambos elementos
export default function TransparentHeader() {
  return (
    <>
      <TopBar />
      <NavigationHeader />
    </>
  );
}
