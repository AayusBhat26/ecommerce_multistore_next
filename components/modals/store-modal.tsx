"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
// make sure you pass the entire attributes to the components as if not passed it will thrown errors in next js.
export const StoreModal = () => {
      const storeModal = useStoreModal();
      return (
            <Modal 
            title="create store"
            description="add a new store to manage products"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
            >
                  Create Store Form
            </Modal>
      )
}