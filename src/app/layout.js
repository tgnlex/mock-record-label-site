import { Inter } from "next/font/google";
import Navbar from './navbar';
import "../style/layout.scss";
import '../style/navbar.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spiteful Saint Records",
  description: "Basic info page for fake record label",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
        {children}
      </body>
    </html>
  );
}
