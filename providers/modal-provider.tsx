"use client";
import { useEffect, useState } from "react";



import { StoreModal } from "@/components/modals/store-modal";
export const ModalProvider =()=>{

      const[isMounted, setIsMounted] = useState(false);
      useEffect(()=>{
            setIsMounted(true);
      }, []);
      // to avoid hyderation issues 
      if(!isMounted){
            return null;
      }
      return (
            <StoreModal />
      )
};