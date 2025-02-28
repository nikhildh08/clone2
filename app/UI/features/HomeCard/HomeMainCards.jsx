// import styles from "@/app/dashboard/firstpage/firstpage.module.css";

const HomeMainCards = () => {
  // Array of card data
  const cards = [
    {
      title: 'Exclusive deals designed to welcome new users.',
      charge: {
        orgChargeTitle: 'Dhwani Astro\'s fees from users',
        orgChargeAmount: '0/5 per min',
        astroGetTitle: 'You Get',
        astroGetAmount: '5.0 per min',
      },
      poPanel: [
        { label: 'PO@0 - Free Users', id: 'flexSwitchCheckDefault1' },
        { label: 'PO@5 - Paid Users', id: 'flexSwitchCheckDefault2' }
      ],
      footerText: 'PO limits get reset at 6am IST. We calculate PO sessions from 6am to 5:59am.',
      cardClass: 'bg-opacity-25'
    },
    {
      title: 'Notice Board',
      content: (
        <>
          Dear Respected Astrologers, <br /> Greetings! <br />
          Astrology is an ancient science that connects the movements of celestial bodies with events and experiences on Earth.
          <br />
          <b>Dhwani Astro</b>
        </>
      ),
      button: {
        label: 'View All',
        link: '#',
        buttonClass: 'bg-green-500 bg-opacity-50',
      },
      cardClass: 'bg-green-500 bg-opacity-25'
    },
    {
      title: 'Important Policies',
      content: (
        <>
          Dear Astrologers, <br /> Please adhere to the following policies to ensure a seamless and professional experience for everyone:
          <br />
          - Always maintain the privacy and confidentiality of your clients' information and readings. <br />
          - Do not disclose personal details or insights without explicit consent. <br />
          - Clearly communicate your service fees upfront to avoid misunderstandings. <br />
          - No hidden charges or unsolicited upselling of services. <br />
          Warm regards, <br />
          <b>Dhwani Astro</b>
        </>
      ),
      cardClass: 'bg-blue-500 bg-opacity-25'
    }
  ];

  return (
    <div className="home-main-cards flex items-center justify-between flex-wrap">
      {cards.map((card, index) => (
        <div key={index} className={`${card.cardClass} card-main`}>
          <span className="card-sp">{card.title}</span>

          {/* If the card contains charge information */}
          {card.charge && (
            <div className="card-charge flex items-center justify-between">
              <div className="org-charge flex items-center flex-col justify-between">
                <h3 className="charge-h">"{card.charge.orgChargeTitle}"</h3>
                <span className="char-sp-in">
                  <i className="fa-solid fa-indian-rupee-sign"></i> {card.charge.orgChargeAmount}
                </span>
              </div>
              <div className="astro-get flex items-center flex-col justify-between">
                <h3 className="charge-h">"{card.charge.astroGetTitle}"</h3>
                <span className="char-sp-in">
                  <i className="fa-solid fa-indian-rupee-sign"></i> {card.charge.astroGetAmount}
                </span>
              </div>
            </div>
          )}

          {/* If the card contains PO Panel */}
          {card.poPanel && (
            <div className="po-panel">
              {card.poPanel.map((po, idx) => (
                <div key={idx} className="po-call flex items-center justify-between">
                  <span className="po-sp flex items-center">{po.label}</span>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id={po.id}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer text for cards with footer */}
          {card.footerText && <p className="card-p mb-0">{card.footerText}</p>}

          {/* If the card contains content and a button */}
          {card.content && (
            <>
              <p className="card-p mb-0">{card.content}</p>
              {card.button && (
                <a
                  href={card.button.link}
                  className="a-btn-vw flex items-center justify-center text-decoration-none"
                >
                  <button className={card.button.buttonClass}>
                    {card.button.label}
                  </button>
                </a>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeMainCards;
