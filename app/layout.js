import '../globals.css';

export const metadata = {
  title: 'ONTHEGO AUTOS',
  description: 'Car sales and mechanic call-out service'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container">
            <h1>ONTHEGO AUTOS</h1>
            <nav>
              <a href="/">Home</a>
              <a href="/cars">Cars</a>
              <a href="/booking">Booking</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer>
          <div className="container">
            <small>© 2025 ONTHEGO AUTOS</small>
          </div>
        </footer>
      </body>
    </html>
  );
}
