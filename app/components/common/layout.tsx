import Footer from './footer'
import dynamic from "next/dynamic";

const DynamicNavBar = dynamic(() => import("./navbar"), { ssr: false });

export default function Layout({ children }: {children: React.ReactNode }) {
  return (
    <>
      <DynamicNavBar />
        <main>{children}</main>
      <Footer />
    </>
  )
}