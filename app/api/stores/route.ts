// global imports
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// method to post data of store  into database 


// local imports 
import primsadb from "@/lib/prismadb";

export async function POST(
      req: Request
){
      try {
            // TODO: WE WANT TO USE CLERK TO AUTHENTICATE THIS ROUTE. 
            const {userId} = auth();
            const body = await req.json();
            const {name} = body;

            // check user is authenticated or not?
            if(!userId) return new NextResponse("Current User not authorized.", {
                  status:401,
            });
            // this is the store name
            if(!name){
                  // since the id and createdat is automatically assigend therefore we nned to check for the name 
                  return new NextResponse("Name is Required",{
                        status:400
                  });
            }
            // once all the things are checked creating a new store in the database.
            const store = await primsadb.store.create({
                  data:{
                        name, userId
                  }
            }) 
            return NextResponse.json(store)
      } catch (error) {
            console.log(`[STORE_POST] Error: ${error}`);
            return new NextResponse("INTERNAL SERVER ERROR", {
                  status:500
            })
      }
}