"use client";

import { useStoreModel } from "@/hooks/useStoreModel";
import { useEffect } from "react";

export default function SetupPage() {
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div className="p-4">Root Page</div>;
}
