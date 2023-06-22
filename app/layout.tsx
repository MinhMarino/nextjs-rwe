import Navbar from '@/app/components/common/navbar'
import Footer from '@/app/components/common/footer'
import '@/app/styles/global.css';
import "tw-elements/dist/css/tw-elements.min.css";

export default function Layout({ children }: {children: React.ReactNode }) {
  return (
    <>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
  )
}