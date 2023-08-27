"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {toast} from "react-hot-toast";
// make sure you pass the entire attributes to the components as if not passed it will thrown errors in next js.
const formSchema = z.object({
      name: z.string().min(3),
})
export const StoreModal = () => {
      const storeModal = useStoreModal();

      const [loading, setLoading] = useState(false);

      const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                  name: '',
            }
      })
      const onSubmit = async (values: z.infer<typeof formSchema>) => {
            // todo: create store
            // console.log(values);
            try {
                  setLoading(true);
                  // todo: create a new store.

                  const {data} = await axios.post("/api/stores", values);
                  // console.log(data)
                  // toast.success('Store created successfully.')
                  window.location.assign(`/${data.id}`)
            } catch (error) {
                  // console.log(error)
                  toast.error("Something went wrong")
            }
            finally{
                  setLoading(false);
            }

      }
      return (
            <Modal
                  title="create store"
                  description="add a new store to manage products"
                  isOpen={storeModal.isOpen}
                  onClose={storeModal.onClose}
            >
                  {/* Create Store Form */}
                  <div>
                        <div className="space-y-4 py-2 pb-4">
                              <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)}>
                                          <FormField control={form.control} name="name" render={({ field }) => (
                                                <FormItem>
                                                      <FormLabel>Name</FormLabel>
                                                      <FormControl>
                                                            <Input
                                                                  disabled={loading}
                                                                  placeholder="Store Name" {...field} />


                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )} />
                                          <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                                <Button disabled={loading} variant={"outline"} onClick={storeModal.onClose}>Cancel</Button>

                                                <Button disabled={loading} type="submit">Continue</Button>
                                          </div>
                                    </form>
                              </Form>
                        </div>

                  </div>
            </Modal>
      )
}