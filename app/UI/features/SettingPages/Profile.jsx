"use client";
// import { useState } from "react";
// // import { FaCalendarDays, FaClock } from "react-icons/fa";

// export default function ProfileSettings() {
//   const [formData, setFormData] = useState({
//     RealName: "",
//     DisplayName: "",
//     BirthDate: "",
//     BirthTime: "",
//     BirthPlace: "",
//     Religion: "Hindu",
//     Address: "",
//     City: "",
//     ZipCode: "",
//     Experience: "",
//     Skills: "Tarot",
//     Languages: "Hindi",
//     InstagramLink: "",
//     FacebookLink: "",
//     YoutubeLink: "",
//     Website: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="calling-his flex items-center justify-center flex-col mx-16">
//       <h2 className="wallet-head text-center">Profile Settings</h2>
//       <div className="profile-page flex items-center justify-around flex-wrap">
//         <div className="pr-top flex items-center justify-center">
//           <div className="profile-det flex items-center justify-between">
//             <div className="img-profile">
//               <img src="/user2.png" alt="" className="p-astro-image" />
//             </div>
//             <div className="pro-cont flex justify-between flex-col">
//               <div className="pro-cont-top flex items-center justify-between">
//                 <div className="t1"><span>Real Name :</span>Yamuyyggu <span>{formData.realName}</span></div>
//                 <div className="t1"><span>Display Name :</span>sfjoafjr <span>{formData.displayName}</span></div>
//               </div>
//               <div className="pro-cont-top flex items-center justify-between">
//                 <div className="t1"><span>Email ID :</span> <span>ammyastrologer@dhwani.com</span></div>
//                 <div className="t1"><span>Contact Number :</span> <span>123456789</span></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="profile-input-det flex flex-col ">
//           <div className=" flex flex-wrap gap-5">
//             {Object.entries(formData).map(([key, value]) => (
//               <div key={key} className="flex-col  ">
                
//                 <label className="form-label lb-nm flex">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
//                 {key === "religion" ? (
//                   <select className="custom-select" name={key} value={value} onChange={handleChange}>
//                     <option value="Hindu">Hindu</option>
//                     <option value="Buddhist">Buddhist</option>
//                     <option value="Muslim">Muslim</option>
//                   </select>
                  
//                 ) : 
//                 (
//                   <input type="text" className="form-control astro-inp" name={key} value={value} onChange={handleChange} placeholder={key.replace(/([A-Z])/g, ' $1').trim()} />
//                 )}
                
//               </div>
//             ))}
//           </div>
//           <div className="sub-btn flex justify-center">
//             <button className="submit-button">SUBMIT</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    realName: "",
    displayName: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    religion: "Hindu",
    address: "",
    city: "",
    zipCode: "",
    experience: "",
    skills: ["Tarot", "Vedic Astrology", "Healing"], // Ensure these are arrays
    languages: ["Hindi", "Marathi", "English", "Bengali"], // Ensure these are arrays
    instagram: "",
    facebook: "",
    youtube: "",
    website: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If updating skills or languages, ensure we store them as arrays
    if (name === "skills" || name === "languages") {
      setFormData({ ...formData, [name]: [value] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="calling-his flex items-center justify-center flex-col">
      <h2 className="wallet-head text-center">Profile Settings</h2>
      <div className="profile-page flex items-center justify-around flex-wrap">
        <div className="profile-input-det">
          <div className="row flex flex-wrap gap-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="w-1/4 fl-wr">
                <label className="form-label lb-nm">{key.replace(/([A-Z])/g, " $1").trim()}</label>

                {/* Dropdown for Religion */}
                {key === "religion" ? (
                  <select className="custom-select" name={key} value={value} onChange={handleChange}>
                    <option value="Hindu">Hindu</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Muslim">Muslim</option>
                  </select>
                ) : 
                
                /* Dropdown for Skills and Languages (Ensure they are arrays) */
                key === "skills" || key === "languages" ? (
                  <select className="custom-select" name={key} value={value[0] || ""} onChange={handleChange}>
                    {(Array.isArray(value) ? value : []).map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    className="form-control astro-inp"
                    name={key}
                    value={value}
                    onChange={handleChange}
                    placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
