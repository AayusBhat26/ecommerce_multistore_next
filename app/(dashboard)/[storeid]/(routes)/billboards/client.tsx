"use client";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";

export const BillboardClient = () => {
  const router = useRouter()
  const params = useParams();


  return (
    <>
    <div className="flex items-center justify-between">
      <Heading title="Billboards (N)" description="Manage Billboards Currently Showing on your Store"/>
      <Button onClick={()=>router.push(`/${params.storeid}/billboards/new`) }><Plus className="mr-2 h-4 w-4"/> Add New</Button>
    </div>
    <Separator />
    </>
  )
}

export default BillboardClient