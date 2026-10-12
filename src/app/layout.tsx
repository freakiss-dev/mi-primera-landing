import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "Café Extremo | Gimnasio, Café, Coworking & Salas de Reunión",
  description: "El espacio híbrido definitivo. Entrena en nuestro gimnasio de alto rendimiento, trabaja en coworking o salas privadas y recarga energías en nuestro café de especialidad.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#ffffff] text-[#000000]">
        {children}
      </body>
    </html>
  );
}
