"use client";

import { useStoreModel } from "@/hooks/useStoreModel";
import { Model } from "../ui/model";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const formSchema = z.object({
  name: z.string().min(1),
});

export function StoreModel() {
  const storeModel = useStoreModel();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <Model
      title="Create Store"
      description="Add a new store with products"
      isOpen={storeModel.isOpen}
      onClose={storeModel.onClose}
    >
      Future Create Store Form
    </Model>
  );
}
