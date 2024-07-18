import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/common/CustomNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLinks from "@/components/common/SocialLinks";
const inter = Inter({ subsets: ["latin"] });
import UserProvider from "../context/UserProvider";
import Footer from "@/components/common/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          {children}
          <SocialLinks />
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
