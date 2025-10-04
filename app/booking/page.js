'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BookingPage() {
  const [status, setStatus] = useState('');
  const search = useSearchParams();
  const carId = search.get('carId');
  const carTitle = search.get('carTitle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    await new Promise(r => setTimeout(r, 1000)); // simulate delay
    setStatus('✅ Booking submitted (demo mode). You can integrate Netlify Forms or EmailJS next.');
    e.target.reset();
  };

  return (
    <>
      <h2>Book a Mechanic Call-Out</h2>
      <form name="booking" onSubmit={handleSubmit} data-netlify="true">
        <input type="hidden" name="form-name" value="booking" />
        <input type="hidden" name="carId" value={carId || ''} />
        <input type="hidden" name="carTitle" value={carTitle || ''} />

        <label>
          Your Name
          <input required name="name" />
        </label>

        <label>
          Email
          <input required type="email" name="email" />
        </label>

        <label>
          Phone Number
          <input required name="phone" />
        </label>

        <label>
          Address
          <input required name="address" />
        </label>

        <label>
          Preferred Date & Time
          <input type="datetime-local" name="preferredDateTime" />
        </label>

        <label>
          Message
          <textarea name="message" rows="4"></textarea>
        </label>

        <button className="btn" type="submit">Submit</button>
      </form>

      {status && <p style={{ marginTop: 20 }}>{status}</p>}
    </>
  );
}
