import "@/styles/globals.css";

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-50 dark:bg-gray-950">{children}</body>
    </html>
  )
}
