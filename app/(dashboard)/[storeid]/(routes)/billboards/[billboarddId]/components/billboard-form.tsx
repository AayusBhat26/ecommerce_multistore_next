"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Billboard } from "@prisma/client";
import * as z from "zod"


import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { AlertModal } from "@/components/modals/alert-modal";
import { ApiAlert } from "@/components/ui/api-alert";
import { useOrigin } from "@/hooks/use-origin";
// import {  } from "next/router";
interface BillboardFormFormProps {
      initialData: Billboard | null;
}
// form schema properties 
const formSchema = z.object({
      label: z.string().min(3),
      imageUrl: z.string().max(3)
});
type BillboardFormFormValues = z.infer<typeof formSchema>

export const BillboardForm: React.FC<BillboardFormFormProps> = ({
      initialData
}) => {
      const params = useParams();
      const router = useRouter();
      const origin = useOrigin();
      const [open, setOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const title = initialData ? "Edit Billboard" : "Create Billboard";
      const description = initialData ? "Edit Billboard" : "Add a new billboard";
      const toastMessage = initialData ? "Billboard Updated" : "Billboard Created";
      const action = initialData ? "Save Changes" : "Create  Billboard";
      const form = useForm<BillboardFormFormValues>({
            resolver: zodResolver(formSchema),
            defaultValues: initialData ||{
                  label:'', 
                  imageUrl: '',
            }
            // need to update this, ask chatgpt for solution.

      });
      const onSubmit = async (data: BillboardFormFormValues) => {
            // console.log(data);
            // api calling
            try {
                  setLoading(true);
                  await axios.patch(`/api/stores/${params.storeid}`, data);
                  router.refresh();
                  toast.success("Store Updated Successfully")
            } catch (error) {
                  toast.error("Something went wrong.");
            }
            finally {
                  setLoading(false);
            }
      }


      const onDelete = async () => {
            try {
                  setLoading(true);
                  await axios.delete(`/api/stores/${params.storeid}`)
                  router.refresh();
                  router.push('/')
                  toast.success('Store Deleted Successfully.')
            } catch (error) {
                  toast.error("Make Sure you removed all the products and categories first!!!")
            }finally{
                  setLoading(false);
                  setOpen(false)
            }
      }


      return (
            <div className="bg-blue-50 p-4">
                  <AlertModal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        onConfirm={onDelete}
                        loading={loading}
                  />
                  <div className="flex items-center justify-between">
                        <Heading title={title} description={description} />
                        {initialData && (
                              <Button variant={"destructive"} size={"icon"} onClick={() => { setOpen(true) }} disabled={loading}>
                                    <Trash2 className="h-4 w-4" />
                              </Button>
                        )}
                  </div>
                  <Separator />
                  <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                              <div className="grid grid-cols-3 gap-8">
                                    <FormField control={form.control} name="label" render={({ field }) => (
                                          <FormItem>
                                                <FormLabel>Label</FormLabel>
                                                <FormControl>
                                                      <Input disabled={loading} placeholder="Billboard Label"{...field} />
                                                </FormControl>
                                                <FormMessage />
                                          </FormItem>
                                    )} />

                              </div>
                              <Button disabled={loading} type={"submit"} > {action}</Button>
                        </form>
                  </Form>
                  <Separator className="mb-4 mt-4" />
                  <p className="text-sm text-gray-500">( These links are only useful when you have your own frontend service provider/s )</p>
                  {/* <ApiAlert title="NEXT_PUBLIC_API_URL" description={`${origin}/api/${params.storeid}`} variant="public"/> */}
            </div>
      )
}