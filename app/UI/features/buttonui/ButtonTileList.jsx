import React from 'react';
import Link from 'next/link'; 

const ButtonTileList = () => {
  
  const links = [
    { href: './interpage/callhist.html', label: 'Call' },
    { href: './interpage/chathis.html', label: 'Chat' },
    { href: '#', label: 'Report' },
    { href: './interpage/storehis.html', label: 'Dhwani Store' },
    { href: '#', label: 'Waitlist' },
    { href: './interpage/waitlist.html', label: 'Wallet' },
    { href: '#', label: 'Support' },
    { href: './interpage/offer.html', label: 'Offers' },
    { href: './interpage/myreview.html', label: 'My Review' },
    { href: './interpage/remedy.html', label: 'Remedies' },
    { href: './interpage/livent.html', label: 'Live Events' },
    { href: './interpage/earnings.html', label: 'Earnings' },
    { href: './interpage/myfollow.html', label: 'My Followers' },
    { href: './interpage/profile.html', label: 'Profile' },
    { href: './interpage/setting.html', label: 'Settings' },
    { href: '#', label: 'Warnings' },
  ];

  return (
    <div className="dash-tile-card flex items-end justify-between flex-wrap">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="button-tile">
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default ButtonTileList;
