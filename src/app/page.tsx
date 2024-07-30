"use client";
import { useState } from "react";
import Allproducts from "./all_products";
import Categories from "./categories";





export default function Home() {
  const [caregList, setCategList] = useState([
    "Mobiles",
    "Computers",
    "Cars",
    "Fans",
    "Books"
  ])

  return (
    <>
    <Allproducts />
    <Categories categories = {caregList}/>
    </>
  )
}
