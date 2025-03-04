"use client";

import Image from "next/image";
import Link from "next/link";

export default function LiveEvents() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Live Events Section */}
      <div className="live-his flex-row   items-center justify-center">
        
        <div className="sch-live-eve flex gap-5 items-center justify-center">
          <div>
        <h2 className="wallet-head text-center">Live Events</h2>
        </div>
        <div className="l-s-button flex items-center justify-between">
          <Link href="#" className="sch-eve" style={{ height: "fit-content" }}>
            Schedule Event
          </Link>
          <Link href="#" className="live-eve" style={{ height: "fit-content" }}>
            Go Live Now
          </Link>
        </div>
      </div>
        <div className="live-event-box flex flex-wrap items-center justify-center py-3">
          <div className="no-live-img flex flex-col items-center">
            <Image src="/astronodata.png" alt="No Live Events" width={150} height={150} className="l-eve-im" />
            <span className="no-live">No Live Events At Present</span>
          </div>
        </div>
      </div>

      {/* Schedule & Go Live Buttons */}
     
    </div>
  );
}
