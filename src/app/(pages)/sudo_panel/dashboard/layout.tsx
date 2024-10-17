import Footer from "@/app/components/Footer/SudoFooter";

const SudoLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
      {children}
      <Footer/>
    </>
  )
}

export default SudoLayout
