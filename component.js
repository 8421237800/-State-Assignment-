import {useState} from "react"


export function Profile(){
  const [man, setPerson] = useState({
name:"Nita Ambani",
photo:"https://static.javatpoint.com/biography/images/nita-ambani.png",
text: "Nita Mukesh Ambani (née Dalal, born 1 November 1963) is an Indian philanthropist. She is the chairperson and founder of the Reliance Foundation, Dhirubhai Ambani International School and a director of Reliance Industries. She is married to Reliance Industries chairman and managing director Mukesh Ambani."

 } )
   const updateProfile = () => {
  setPerson(previousState => {
    return { ...previousState, name:"Namita Thapar",
    text:"Namita Thapar was born on Monday, 21 March 1977 (age 46 years; as of 2023) in Pune, Maharashtra. Her zodiac sign is Aries. She completed her primary and secondary education at a school in Pune. While in school, Namita gave up all extracurricular activities and put her entire focus on academics.",
    photo:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSk8SSY6mSqteiG8ZeGGqKUHlm9TLonDXkWXe582x9-9XWakpWM"
   }
  });
}
return(
  <>
 <div className="card" style={{width: '18rem'}}>
        <img src={man.photo} className="card-img-top" alt={man.name} />
        <div className="card-body">
          <h5 className="card-title">{man.name}</h5>
          <p className="card-text">{man.text}</p>
          <center  className="mt-4"><button style={{backgroundColor:'red'}} onClick={updateProfile}>change info</button></center>

        </div>
      </div>
  
  </>
);
}
  





























































































































































































































































































































































// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// export function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);