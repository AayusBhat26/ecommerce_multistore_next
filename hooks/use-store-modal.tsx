import {create} from "zustand";

interface useStoreModelStore{
      isOpen: boolean; 
      onOpen: () =>  void;
      onClose: ()=> void;
};
// defening the default values for the  store 
export const useStoreModal = create<useStoreModelStore>((set)=>({
      isOpen:false,
      onOpen: ()=>set({isOpen:true}),
      onClose: ()=>set({isOpen:false}),
}))