
import carsData from '@/public/data/cars.json';
import Link from 'next/link';

export default function CarsPage() {
  return (
    <>
      <h2>Cars for Sale</h2>
      <div className="cards">
        {carsData.map(car => (
          <div key={car.id} className="card">
            <img src={car.images[0]} alt={car.title} />
            <div className="card-body">
              <h3>{car.title}</h3>
              <p>{car.miles} miles — {car.location}</p>
              <p className="price">£{car.price.toLocaleString()}</p>
              <p>
                <Link className="btn" href={`/cars/${car.id}`}>View Details</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
