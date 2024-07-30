import { it } from "node:test";
"use client";

type CategoryType = {
    categories:string[]
}

export default function Categories({categories}:CategoryType) {
   const seletItems = (categoryName:string)=> {
      console.log(`You have select ${categoryName}.`);
   }
    return (
        <>
        {
            categories.map((category, i) => (

                <button key={category+i} onClick={()=>{seletItems(category)}} className="btn">{category}</button>
            ))
        }
        </>
    )
}