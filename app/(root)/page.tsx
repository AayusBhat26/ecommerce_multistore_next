import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { defaultConfig } from "next/dist/server/config-shared";

const SetupPage = ()=> {
      return (
            // <p>hello this is admin dashboard</p>
            <div>
                  {/* <p>this is a protected route.</p> */}
                  <UserButton afterSignOutUrl="/"/>
            </div>
      )
}
export default SetupPage;