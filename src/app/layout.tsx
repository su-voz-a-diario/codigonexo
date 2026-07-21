import "./globals.css";
import Header from "@/components/layout/Header";
import FatFooter from "@/components/layout/FatFooter";

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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <Header />
        {children}
        <FatFooter />
      </body>
    </html>
  )
}
