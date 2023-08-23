"use client"
// admin dashboard page.

import { useEffect } from "react";



import { useStoreModal } from "@/hooks/use-store-modal";


const SetupPage = () => {
      // extracting the onOpen and onClose functions from zustand
      const onOpen = useStoreModal((state) => state.onOpen);
      const isOpen = useStoreModal((state) => state.isOpen);
      useEffect(()=>{
            if(!isOpen) onOpen();
      },[isOpen, onOpen]);
      return (
            <div className="p-4">
                Root page

            </div>
      )
}
export default SetupPage;