import React from 'react'
import image1 from "../images/avengers.jpg";
import image2 from "../images/ironman.jpg";
import image3 from "../images/thor_love_and_thunder_dc.jpg";
import image4 from "../images/spider-man.jpg"
import Map2 from "./Map2"
const buhel=[
     {
    imgUrl: image1,
    name: "The Avengers",
    description: "Superheroes team up to save the world.",
  },
  {
    imgUrl: image4,
    name: "Spider-Man: Into the Spider-Verse",
    description: "An animated adventure with multiple Spider-People.",
  },
  {
    imgUrl: image2,
    name: "Iron man 3",
    description:
      "Iron Man 3 is a 2013 American superherofilm based on the Marvel Comics character Iron Man",
  },
  {
    imgUrl: image3,
    name: "Thor: Love and Thunder",
    description:
      "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
  }
];
const Products2 = ()=>{
 return (
    <div className="diving">
      {buhel.map((obj)=>(
            <Map2
            imgUrl  ={ obj.imgUrl}
            header ={obj.name}
            description={obj.description}
            />
      ))}
      
    </div>
    
  );

};
export default Products2;