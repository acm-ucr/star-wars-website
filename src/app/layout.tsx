import "./globals.css";
import { Lora, Nunito } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const lora = Lora({ subsets: ["latin"] });

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--nunito-font",
});

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
      <body
        className={`${lora.className} ${nunito.variable} h-full w-full bg-black font-nunito text-white`}
      >
        <ReactQueryClientProvider>
          <Navigation />
          {children}
        </ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
