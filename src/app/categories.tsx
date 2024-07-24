import { it } from "node:test";
"use client";



export default function Categories() {
   const seletItems = (items:string)=> {
      console.log(`You have select ${items}.`);
   }
    return (
        <>
        <button onClick={()=>{seletItems("Mobiles")}}>Mobiles</button>
        <button onClick={()=>{seletItems("Cars")}}>Cars</button>
        <button onClick={()=>{seletItems("Computer")}}>Computers</button>
        <button onClick={()=>{seletItems("Fans")}}>Fans</button>
        </>
    )
}