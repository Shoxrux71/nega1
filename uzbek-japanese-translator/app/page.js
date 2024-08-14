import Head from 'next/head';
import Translator from '../components/Translator.js';
// import Uploader from '../components/Uploader.js';
import TransCopy from '@/components/try1.js';
import Navbar from '@/components/navbar.jsx';
import Footer from '@/components/footer.jsx';


export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Uzbek to Japanese Translator</title>
        <meta name="description" content="Translate Uzbek text to Japanese using Lingvanex API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Translator />
        <Footer/>
        {/* <try1/> */}
        {/* <Translator/> */}
        {/* <TransCopy/> */}
        {/* new1 */}
      </main>
    </div>
  );
}
