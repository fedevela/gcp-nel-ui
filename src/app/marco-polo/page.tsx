'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const MarcoPoloContent: React.FC = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (name) {
      if (name.toLowerCase() === 'marco') {
        setMessage('polo');
      } else {
        setMessage(`I don't know ${name}!`);
      }
    }
  }, [name]);

  return (
    <div>
      <h1>Marco-Polo</h1>
      {message && <p>{message}</p>}
    </div>
  );
};

const MarcoPoloPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MarcoPoloContent />
    </Suspense>
  );
};

export default MarcoPoloPage;
