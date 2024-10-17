'use client'

import {useState} from "react";
import Navbar from "./components/Nav/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Modal from "./components/Modals/Modal";
import AccountModalContent from "./components/Modals/AccountModalContent"
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  
  // Account Modal State Toggler
  const [accModal, setAccModal] = useState("hidden");

  return (
    <>
      <Navbar accModal={accModal} setAccModal={setAccModal}/>
      <Modal modal={accModal} setModal={setAccModal}>
        <AccountModalContent/>
      </Modal>
      <section className="flex flex-col justify-center items-center h-[50vh]">
        <h1 className="font-bold font-sp text-[25px]">Lets build a world of pixels</h1>
        <p className="text-[18px] font-sec">High Quality Assets, Pixel art, Vector Art, Designs and More...</p>

        <div className="w-full flex justify-center items-center my-[3em]">
          <input type="text" placeholder="Search Assets" name="search" className="outline-none px-4 py-3 border-[1px] border-lightBorder w-[28%] rounded-tl-md rounded-bl-md" />
          <button type="submit" className="bg-primary border-[0.5px] border-yellowBorder px-7 py-3 rounded-tr-md rounded-br-md hover:bg-primaryHover"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </section>
      <Gallery />
      <Footer/>
    </>
  );
}
