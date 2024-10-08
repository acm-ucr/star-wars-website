import "./globals.css";
import { Inter, Lora } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Star Wars Website",
  description: "The Offical Star Wars Club at UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${lora.className} ${inter.className}`}>
        <ReactQueryClientProvider>
          <Navigation />
          {children}
        </ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
