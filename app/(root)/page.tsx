"use client"
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
            // admin dashboard page.
            <div className="p-4">
                  {/* <UserButton afterSignOutUrl="/"/> */}
                Root page

            </div>
      )
}
export default SetupPage;