// global imports
import { UserButton } from "@clerk/nextjs"


// local imports 
import { MainNav } from "@/components/main-nav"
import StoreSwitcher from "@/components/store-switcher"

const Navbar = () => {
      return (
            <div className="border-b">
                  <div className="flex h-14 items-center px-5">
                        <div className="">
                              <StoreSwitcher/>
                        </div>
                        {/* <div className="">

                              Routes
                        </div> */}
                        <MainNav className="mx-6"/>
                        <div className="ml-auto flex items-center space-x-4">
                              <UserButton afterSignOutUrl="/"/>
                        </div>
                  </div>
            </div>
      )
}

export default Navbar