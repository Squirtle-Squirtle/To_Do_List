import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

 const uniqeList = [
  ...new Set(
     Menu.map((curElem) => {
     return curElem.category;
 })
 ),
 "All",
];
    console.log(uniqeList);

const Restraunt = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState( uniqeList);

  const filterItem = (category) => {

    if(category==="All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
     
       <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
      {/* this is how we pass the data from one component to another component from parent to child */}
    </>
  );
};

export default Restraunt