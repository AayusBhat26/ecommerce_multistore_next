// global imports
import { UserButton, auth } from "@clerk/nextjs"


// local imports 
import { MainNav } from "@/components/main-nav"
import StoreSwitcher from "@/components/store-switcher"
import { redirect } from "next/navigation";
import primsadb from "@/lib/prismadb";

const Navbar = async () => {
      // todo: get the userid and store related to that user.
      const {userId} = auth();
      if(!userId) redirect('/sign-in');

      const stores = await primsadb.store.findMany({
            where:{
                  userId
            }
      });

      return (
            <div className="border-b">
                  <div className="flex h-14 items-center px-5">
                        <div className="">
                              <StoreSwitcher items={stores}/>
                        </div>
                        <MainNav className="mx-6"/>
                        <div className="ml-auto flex items-center space-x-4">
                              <UserButton afterSignOutUrl="/"/>
                        </div>
                  </div>
            </div>
      )
}

export default Navbar