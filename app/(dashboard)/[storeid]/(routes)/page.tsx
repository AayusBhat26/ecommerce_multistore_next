import primsadb from "@/lib/prismadb"

interface DashboardPageProps {
      params: {
            storeid: string
      }
};
const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
      // this is the code that im writing using my phone and i just deleted ha line.
      const store = await primsadb.store.findFirst({
            where:{
                  id:params.storeid
            }
      })
      // console.log(params);
      
      return (
            <div >
                  Active Store: {store?.id}
            </div>
      )
}

export default DashboardPage