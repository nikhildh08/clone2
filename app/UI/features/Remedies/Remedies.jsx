"use State"
import React, { useState, useEffect } from 'react';

const Remedy = () => {
  const [remedies, setRemedies] = useState([]);

  useEffect(() => {
    // Static data (you can replace this with an actual API call later)
    const fetchedRemedies = [
      {
        productName: 'IMP',
        name: 'Ammy (123456)',
        type: 'Free Remedy',
        date: '01-Jan-2000, 07:30 AM',
        description: '❤️✨Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        productName: 'IMP',
        name: 'John Doe (654321)',
        type: 'Paid Remedy',
        date: '02-Feb-2001, 08:00 AM',
        description: '🔥Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        productName: 'IMP',
        name: 'John Doe (654321)',
        type: 'Paid Remedy',
        date: '02-Feb-2001, 08:00 AM',
        description: '🔥Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        productName: 'IMP',
        name: 'John Doe (654321)',
        type: 'Paid Remedy',
        date: '02-Feb-2001, 08:00 AM',
        description: '🔥Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        productName: 'IMP',
        name: 'John Doe (654321)',
        type: 'Paid Remedy',
        date: '02-Feb-2001, 08:00 AM',
        description: '🔥Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        productName: 'IMP',
        name: 'John Doe (654321)',
        type: 'Paid Remedy',
        date: '02-Feb-2001, 08:00 AM',
        description: '🔥Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        productName: 'IMP',
        name: 'John Doe (654321)',
        type: 'Paid Remedy',
        date: '02-Feb-2001, 08:00 AM',
        description: '🔥Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      
    ];
    setRemedies(fetchedRemedies);
  }, []);

  return (
    <div className="calling-his flex items-center justify-center flex-col mx-16 me-1">
      <h2 className="wallet-head text-center">Suggested Remedies</h2>

      <div className="store-his-box flex gap-5 items-start flex-wrap py-3">
        {remedies.map((remedy, index) => (
          <div key={index} className="card-rem flex flex-col">
            <div className="call-top flex items-start justify-between">
              <div className="cal-od-rem flex items-start justify-between flex-col">
                <span className="store-top flex items-center">
                  <span className="odr-sp flex">Product Name:</span>
                  <span className="id-nm">{remedy.productName}</span>
                </span>
                <span className="store-top flex items-center">
                  <span className="odr-sp flex">Name:</span>
                  <span className="id-nm">{remedy.name}</span>
                </span>
              </div>
            </div>
            <hr style={{ margin: '.1rem' }} />

            <div className="call-card-det flex items-start justify-between flex-col">
              <div className="cal-od-id flex items-center justify-between">
                <span className="odr-sp">Type:</span>
                <span className="id-nm">{remedy.type}</span>
              </div>
              <div className="cal-od-id flex items-center justify-between">
                <span className="odr-sp">{remedy.date}</span>
              </div>
              <div className="card-rev flex flex-col">
                <span className="rev-span">
                  <b>Description:</b>
                </span>
                <p className="rev-astro mb-0">{remedy.description}</p>
              </div>
            </div>

            <div className="xtra-rem flex items-center justify-between flex-wrap">
              <a href="#" className="xtra-a">
                Suggest Next Remedy
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Remedy;
