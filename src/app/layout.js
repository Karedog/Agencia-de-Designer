import "./globals.css";

export const metadata = {
  title: "Agencia de Designer",
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
