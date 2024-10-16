import "./globals.css";
export const metadata = {
  title: "Product App",
  description: "A simple product app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 Product App</footer>
      </body>
    </html>
  );
}
