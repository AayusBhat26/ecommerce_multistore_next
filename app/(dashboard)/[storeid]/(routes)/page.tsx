import primsadb from "@/lib/prismadb"

interface DashboardPageProps {
      params: {
            storeId: string
      }
};
const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
      // const store = await primsadb.store.findFirst({
      //       where: {
      //             id: params.storeid,
      //       }
      // })
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