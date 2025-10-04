
export default function HomePage() {
  return (
    <>
      <section>
        <h2>Your trusted car sales & mobile mechanic</h2>
        <p>
          Buy quality used cars or book our expert mechanics to come to you — fast, reliable, and affordable.
        </p>
        <p>
          <a className="btn" href="/cars">Browse Cars</a>
          <a className="btn outline" href="/booking">Book a Call-Out</a>
        </p>
      </section>

      <section>
        <h3>Why ONTHEGO AUTOS?</h3>
        <ul>
          <li>Modern, trusted service</li>
          <li>Transparent car pricing</li>
          <li>Mobile mechanics — we come to you</li>
        </ul>
      </section>
    </>
  );
}
