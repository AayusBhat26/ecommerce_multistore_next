"use client"
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import { defaultConfig } from "next/dist/server/config-shared";

const SetupPage = () => {
      return (
            // admin dashboard page.
            <div className="p-4">
                  {/* <UserButton afterSignOutUrl="/"/> */}
                  <Modal isOpen={true} onClose={() => { }} title="
                  test" description="test desc">
                        Children
                  </Modal>

            </div>
      )
}
export default SetupPage;