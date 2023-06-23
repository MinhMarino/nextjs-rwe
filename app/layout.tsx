import '@/app/styles/global.css';
import "tw-elements/dist/css/tw-elements.min.css";
import Footer from '@/app/components/common/footer'
import Navbar from '@/app/components/common/navbar'

export default function Layout({ children }: {children: React.ReactNode }) {
  return (
    <>
        <html lang='en'>
            <body>
                <Navbar />
                  <main className='max-w-[1160px] mx-auto'>
                    {children}
                  </main>
                <Footer />
            </body>
        </html>
    </>
  )
}