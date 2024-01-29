import React from 'react';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import StreamcalContainer from '../components/StreamcalPage/StreamcalContainer';

export default function StreamcalPage() {
  const [streamcalData, setStreamcalData] = useState<StreamcalType>(
    useLoaderData() as StreamcalType
  );

  return (
    <section>
      <StreamcalContainer streamcalData={streamcalData} />
    </section>
  );
}
