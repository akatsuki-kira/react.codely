import React from 'react'
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import Map from "./Map"
const sneakers = [
    {
        id:"1",
        name:"Nike Blazer Mid '77",
        description: 'Classic sneakers with a vintage look.',
        imgUrl: image1,
    },
    {
        id:'2', 
        name: 'Nike Air Max 270', 
        description: 'Air Max series with a comfortable and stylish design.',
        imgUrl:image2,
    },
    {
        id:'3',
        name: 'Nike React Element 55',
        description: 'Modern design with React technology for a comfortable feel.',
        imgUrl:image3,
    },
    {
        id:'4', 
        name: 'Nike Zoom Pegasus Turbo 2', 
        description: 'Lightweight and responsive running shoes.',
        imgUrl:image4,
    },
    {
        id:'5', 
        name: 'Nike Air Force 1',
         description: 'Timeless style and versatility.',
         imgUrl:image5,
    },
    {
        id:'6',
         name: 'Nike Joyride Run Flyknit', 
         description: 'Innovative cushioning for a smooth and comfortable run.',
         imgUrl:image6,
    }
];
const Products= ()=>{
 return (
    <div className="div">
      {sneakers.map((obj)=>(
            <Map
            imgUrl  ={ obj.imgUrl}
            header ={obj.name}
            description={obj.description}
            />
      ))}
      
    </div>
    
  );

};
export default Products;

