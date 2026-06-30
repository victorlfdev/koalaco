import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://koalaco.com.br"),
  title: "Koala & Co | Marketing, Vendas e Tecnologia para Negócios Locais",
  description:
    "A Koala & Co une estratégia de marketing, conversão em vendas e desenvolvimento fullstack para colocar mais clientes na porta e mais vendas no WhatsApp do seu negócio local.",
  keywords: [
    "agência de marketing local",
    "landing page de alta conversão",
    "marketing para negócios locais",
    "desenvolvimento de sites Next.js",
  ],
  openGraph: {
    title: "Koala & Co | Mais clientes. Mais vendas.",
    description:
      "Marketing estratégico, vendas e tecnologia de ponta para negócios locais.",
    url: "https://koalaco.com.br",
    siteName: "Koala & Co",
    locale: "pt_BR",
    type: "website",
    images: ["/OGKoalaCo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
