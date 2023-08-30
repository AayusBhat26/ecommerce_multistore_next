"use client";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";


export function MainNav({
      className, ...props
}:React.HTMLAttributes<HTMLElement>){
      const pathname = usePathname();
      const params = useParams();
      const routes = [
            {
                  href:`/${params.storeid}/settings`, 
                  label:'Settings',
                  active: pathname === `/${params.storeId}/settings`,
            },
            
            {
                  href: `/${params.storeid}/billboards`,
                  label: 'billboards',
                  active: pathname === `/${params.storeId}/billboard`,
            },
            {
                  href: `/${params.storeid}`,
                  label: 'Overview',
                  active: pathname === `/${params.storeId}/settings`,
            }
      ]
      return (
            <nav
            className={cn("flex items-center  space-x-4 lg:space-x-6", className)}
            >
                  {
                        routes.map((route)=>(
                              <Link key ={route.href} className={
                              cn('text-sm font-medium transition-colors hover:text-primary', route.active ? "text-black dark:text-white": "text-muted-foreground")
                              } href={route.href}>
                              {route.label}</Link>
                        ))
                  }
            </nav>
      )
}