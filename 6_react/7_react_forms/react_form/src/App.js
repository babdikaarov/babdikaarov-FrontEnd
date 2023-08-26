import React, { useState } from 'react';
import FoodOrderForm from './FoodOrderForm';
import FoodItem from "./FoodItem";
import Header from './Header.js';

const styledDiv = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}


function App() {
  const [sharedData, setSharedData] = useState([]);

  const handleShareData = (value) => {
    setSharedData((prev) => [...prev, value]);
  }

  return (
    <div style={styledDiv}>
      <Header />
      <FoodItem updateData={handleShareData} name="Shakshuka" price={5.99} imgSrc="https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      <FoodItem updateData={handleShareData} name="Spaghetti Carbonara" price={6.99} imgSrc="https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      <FoodItem updateData={handleShareData} name="Margherita Pizza" price={2.99} imgSrc="https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
      <FoodOrderForm data={sharedData} />
    </div>
  )
}

export default App