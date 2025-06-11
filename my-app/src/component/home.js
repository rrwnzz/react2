import { useState } from "react"
export default function Home (){
  const [data,setData]=useState([
    {name:'ahmed',age:25},
    {name:'mohammad',age:30},
    {name:'ali',age:20},
  ]);
    return(
      <div>
          <h1>
                Home page
          </h1>
          {data.map((item,index)=>(
            <h1>{index} : {item.name} and {item.age}</h1>
          ))}
      </div>
    )
}