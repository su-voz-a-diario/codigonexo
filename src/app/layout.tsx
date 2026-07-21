import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import FatFooter from "@/components/layout/FatFooter";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://codigonexo.mx"),
  title: "CódigoNexo | Ingeniería de Software a la Medida",
  description: "Firma consultora de ingeniería de software. Construimos infraestructuras web y móviles resilientes, escalables y seguras.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        {children}
        <FatFooter />
      </body>
    </html>
  )
}
