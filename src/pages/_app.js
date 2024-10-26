import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        <p>Copyright © {new Date().getFullYear()} ChungMin Tai. All rights reserved.</p>
      </footer>
    </div>
  );
}
