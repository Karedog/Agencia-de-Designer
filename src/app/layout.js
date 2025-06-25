import "./globals.css";

export const metadata = {
  title: "M - Agência Digital",
  description: "Agencia de designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body >
        {children}
      </body>
    </html>
  );
}
