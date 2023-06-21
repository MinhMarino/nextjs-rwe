import Layout from '@/app/components/common/layout';
import { AppPropsWithLayout } from '@/type'; 
import "@/app/styles/global.css";
import "tw-elements/dist/css/tw-elements.min.css";
import { globalContext, context } from '@/app/services/globalContext';

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      <globalContext.Provider value={context}>
        <Component {...pageProps} />
      </globalContext.Provider>
    </Layout>
  )
}