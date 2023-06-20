import Layout from '@/app/components/common/layout';
import { AppPropsWithLayout } from '@/type'; 
import "@/app/styles/global.css";
import "tw-elements/dist/css/tw-elements.min.css";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}