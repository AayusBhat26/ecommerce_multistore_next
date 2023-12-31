// global imports
// import Navbar from "@/components/navbar";
import Navbar from "@/components/Navbar";
import primsadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";


export default async function DashboardLayout({
      children, params
}: {
      children: React.ReactNode,
      params: { storeid: string }
}) {
      const { userId } = auth();
      if (!userId) redirect('/sign-in');
      
      const store = await primsadb.store.findFirst(
            {
                  where:{
                        id:params.storeid,
                        userId:userId
                  }
            }
      )
      if (!store) redirect('/')
      return (
            <>
            <Navbar />
                  {children}

            </>
      )
}