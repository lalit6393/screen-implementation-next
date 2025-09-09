"use client"
import Modal from "@/components/modal/Modal";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-white text-neutral-700 w-full h-[100vh] pt-[10%] flex justify-center">
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="border border-black rounded-md px-4 py-2 flex self-center cursor-pointer hover:text-white hover:bg-black"
      >Open</button>
      {
        open &&
        <Modal setOpen={setOpen}/>
      }
    </div>
  );
}
