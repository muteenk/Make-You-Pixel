"use client"
import {useState} from "react";

import Navbar from "@/app/components/Nav/SudoNavbar";
import Modal from "@/app/components/Modals/Modal";
import AccountModalContent from "@/app/components/Modals/AccountModalContent";

const page = () => {

  const [accModal, setAccModal] = useState("hidden");

  return (
    <>
      <Navbar accModal={accModal} setAccModal={setAccModal}/>
      <Modal modal={accModal} setModal={setAccModal}>
        <AccountModalContent/>
      </Modal>

      <main>
        Page Text
      </main>
    </>
  )
}

export default page
