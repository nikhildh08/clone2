import React from 'react';

const CardBox = () => {
  // Define the card data
  const cards = [
    {
      title: 'Training Videos',
      buttonText: 'Click Here',
      type: 'button', // Button type (no rating)
      id: 'card1',
    },
    {
      title: 'Check Your Performance',
      buttonText: 'Click Here',
      type: 'button', // Button type (no rating)
      id: 'card2',
    },
    {
      title: 'Ratings',
      buttonText: '', // No button
      type: 'rating', // Rating type (stars)
      id: 'card3',
    },
    {
      title: 'Recommended Products',
      buttonText: 'Click Here',
      type: 'button', // Button type (no rating)
      id: 'card4',
    }
  ];

  return (
    <div className="card-top-sm-box flex items-center justify-between flex-wrap">
      {cards.map((card, index) => (
        <div key={index} className="card-dash flex flex-col items-center justify-between">
          <h1 className="card-h1">{card.title}</h1>

          {/* Render button if type is button */}
          {card.type === 'button' && (
            <button className="card-btn">{card.buttonText}</button>
          )}

          {/* Render rating if type is rating */}
          {card.type === 'rating' && (
            <span className="rev-sp">
              <div className="star-rating-rev">
                {[5, 4, 3, 2, 1].map((star) => (
                  <React.Fragment key={star}>
                    <input
                      type="radio"
                      id={`star${star}`}
                      name="stars"
                      value={star}
                    />
                    <label htmlFor={`star${star}`} title={`${star} star`}>
                      &#9733;
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardBox;
