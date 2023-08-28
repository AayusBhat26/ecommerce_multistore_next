import { create } from 'zustand';

interface useStoreModalStore {
      isOpen: boolean;
      onOpen: () => void;
      onClose: () => void;
}
// defening the default values for the  store 
export const useStoreModal = create<useStoreModalStore>((set) => ({
      isOpen: false,
      onOpen: () => set({ isOpen: true }),
      onClose: () => set({ isOpen: false }),
}));