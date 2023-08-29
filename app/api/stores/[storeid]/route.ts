import primsadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
export async function PATCH(
      req: Request,
      { params }: { params: { storeid: string } }
) {
      try {
            const { userId } = auth();
            const body = await req.json();
            const { name } = body;
            if (!userId) {
                  return new NextResponse("Unauthenticated", { status: 401 })
            }
            if (!name) {
                  return new NextResponse("Name is required", {status:400});
             }
             if(!params.storeid){
                  return new NextResponse("Store is not provided", {
                        status:400
                  })
             }

             const store  = await primsadb.store.updateMany({
                  where:{
                        id:params.storeid, 
                        userId:userId
                  }, 
                  data:{
                        name
                  }
             })
             return NextResponse.json(store);
      } catch (error) {
            console.log(`[UPDATE_STORE_NAME_ERROR_INDI]__PATCH ${error}`);
            return new NextResponse('Internal Server Error', { status: 500 });

      }
}

// delete 

export async function DELETE(
      req: Request,
      { params }: { params: { storeid: string } }
) {
      try {
            
            const { userId } = auth();
            // console.log(/^[0-9a-fA-F]{24}$/.test(params.storeid));
            // if(!)

            if (!userId) {
                  return new NextResponse("Unauthenticated", { status: 403 });
            }

            if (!params.storeid) {
                  return new NextResponse("Store id is required", { status: 400 });
            }
            // console.log(typeof (params.storeid));
            
            const store = await primsadb.store.deleteMany({
                  where: {
                        id:params.storeid,
                        userId:userId
                  }
            });

            return NextResponse.json(store);
      } catch (error) {
            console.log('[STORE_DELETE]', error);
            return new NextResponse("Internal error", { status: 500 });
      }
};