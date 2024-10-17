import Footer from "@/app/components/Footer/SudoFooter";
import SudoSidebar from "@/app/components/Nav/SudoSidebar";

const SudoLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <main className="flex justify-start items-start">
      <SudoSidebar/>
      <section className="w-full">
        {children}
        <Footer/>
      </section>
    </main>
  )
}

export default SudoLayout
