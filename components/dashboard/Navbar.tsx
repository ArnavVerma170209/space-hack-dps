"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { CheckIcon, Plus, SortAscIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { Input } from "../ui/input";
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "../ui/textarea";
import { createVictim } from "@/lib/createVictim";
import { useRouter } from "next/navigation";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name has to be atleast 2 character long" }),
  planet: z
    .string()
    .min(2, { message: "name has to be atleast 2 character long" }),
  // details: z.string(),
});

const font = DM_Sans({ subsets: ["latin"], weight: ["500"] });

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      planet: "",
      // details: "",
    },
  });

  const { toast } = useToast();
  const { isSubmitting } = form.formState;
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(
        `/api/create`, // url
        JSON.stringify(values), // request body
        {
          // options
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      form.reset();
      router.refresh();
      window.location.reload();
      // createVictim(values)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  });

  if (!isMounted) {
    return null;
  }

  return (
    <div className=" h-20 bg-white/3 backdrop-blur-lg  w-screen px-8 py-2 flex  items-center justify-between fixed ">
      <div className="h-full items-center flex">
        <Link href={"/"}>
          <Image src={"./logo-black.svg"} alt="logo" height={48} width={48} />
        </Link>
      </div>
      <div className="flex p-2 rounded-full gap-2 text-[#E0FF30]">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className={cn(
                font.className,
                "bg-[#060606] text-white gap-1 flex"
              )}
            >
              Schedule
              <Plus className="size-3" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#e0ff30] border-0">
            <SheetHeader>
              <SheetTitle>Schedule Rescue</SheetTitle>
              <SheetDescription className="text-black/90">
                Give us details about your rescue mission here
              </SheetDescription>
            </SheetHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex space-y-2 pt-20 h-auto w-full items-start justify-center  flex-col "
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col items-center">
                      <div className="w-full flex flex-col  h-full justify-center ">
                        <FormLabel className="text-md   text-[#060606] font-bold flex ">
                          Name of the victim
                        </FormLabel>
                        <FormControl className="w-full ">
                          <Input
                            type="text"
                            disabled={isSubmitting}
                            placeholder="name"
                            {...field}
                            className="flex  bg-[#060606] text-white ring-0  border-0 outline-0 active:outline-0  active:border-0 active:ring-0"
                          />
                        </FormControl>

                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name="planet"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col items-center">
                      <div className="w-full  flex flex-col  h-full justify-center ">
                        <FormLabel className="text-md   text-[#060606] font-bold flex ">
                          Planet
                        </FormLabel>
                        <FormControl className="w-full bg-red-600">
                          <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger
                              className="bg-[#060606] text-white"
                              asChild
                            >
                              <Button
                                role="combobox"
                                aria-expanded={open}
                                className="w-full justify-between"
                              >
                                {planet}
                                <SortAscIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command className="bg-[#060606] w-full text-white">
                                <CommandInput
                                  placeholder="Search Planet..."
                                  className="h-9 w-full"
                                />
                                <CommandList className="w-full">
                                  <CommandEmpty>No planet found.</CommandEmpty>
                                  <CommandGroup className="text-white border-0 ">
                                    {planetList.map((myPlanet, i) => (
                                      <CommandItem
                                        key={myPlanet.name}
                                        value={myPlanet.name}
                                        onSelect={(currentValue) => {
                                          setPlanet(currentValue);
                                          setOpen(false);
                                        }}
                                      >
                                        {myPlanet.name}
                                        <CheckIcon
                                          className={cn(
                                            "ml-auto h-4 w-4",
                                            myPlanet.name === planet
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </FormControl>

                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                /> */}
                <FormField
                  control={form.control}
                  name="planet"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col items-center">
                      <div className="w-full flex flex-col  h-full justify-center ">
                        <FormLabel className="text-md   text-[#060606] font-bold flex ">
                          Name of the planet
                        </FormLabel>
                        <FormControl className="w-full ">
                          <Input
                            type="text"
                            disabled={isSubmitting}
                            placeholder="planet"
                            {...field}
                            className="flex  bg-[#060606] text-white ring-0  border-0 outline-0 active:outline-0  active:border-0 active:ring-0"
                          />
                        </FormControl>

                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-col items-center">
                      <div className="w-full flex flex-col  h-full justify-center ">
                        <FormLabel className="text-md   text-[#060606] font-bold flex ">
                          Extra details
                        </FormLabel>
                        <FormControl className="w-full ">
                          <Textarea
                            disabled={isSubmitting}
                            placeholder="Extra details"
                            {...field}
                            className="flex  bg-[#060606] text-white ring-0  border-0 outline-0 active:outline-0  active:border-0 active:ring-0"
                          />
                        </FormControl>

                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                /> */}
                <SheetFooter className="flex justify-start">
                  <SheetClose asChild>
                    <Button className="bg-[#060606]" type="submit">
                      Confirm
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </form>
            </Form>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
