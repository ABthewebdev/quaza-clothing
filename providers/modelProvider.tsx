"use client";

import { StoreModel } from "@/components/models/storeModel";
import { useEffect, useState } from "react";

export function ModelProvider() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <StoreModel />
    </>
  );
}
