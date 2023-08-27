"use client"
// admin dashboard page.

import { useEffect } from "react";



import { useStoreModal } from "@/hooks/use-store-modal";


const SetupPage = () => {
      // extracting the onOpen and onClose functions from zustand

      // using the setuppage for triggering the modal.
      const onOpen = useStoreModal((state) => state.onOpen);
      const isOpen = useStoreModal((state) => state.isOpen);
      useEffect(()=>{
            if(!isOpen) onOpen();
      },[isOpen, onOpen]);
      return null
}
export default SetupPage;