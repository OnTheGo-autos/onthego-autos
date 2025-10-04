
import carsData from '@/public/data/cars.json';
import Link from 'next/link';

export default function CarDetails({ params }) {
  const car = carsData.find(c => String(c.id) === params.id);

  if (!car) return <p>Car not found.</p>;

  return (
    <div>
      <img src={car.images[0]} alt={car.title} style={{ width: '100%', borderRadius: '8px' }} />
      <h2>{car.title}</h2>
      <p className="price">£{car.price.toLocaleString()}</p>
      <p>{car.miles} miles • {car.location}</p>
      <p>{car.description}</p>

      <Link className="btn" href={`/booking?carId=${car.id}&carTitle=${encodeURIComponent(car.title)}`}>
        Book a Mechanic
      </Link>
      <Link className="btn outline" href="/cars">Back</Link>
    </div>
  );
}
