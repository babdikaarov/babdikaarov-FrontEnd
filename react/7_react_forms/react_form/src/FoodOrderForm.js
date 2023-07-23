import React, { useState, useEffect } from "react";
import styles from './FoodOrder.module.css'



function FoodOrderForm({data}) {

  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ order, setOrder ] = useState("");

  useEffect(()=> {
    setOrder(data)
    return ()=>{
       console.log(order) 
    }
  }, [data])


const handleSubmit = (e) => {
  e.preventDefault()
  alert(`Order Successful!\nYour order was ${order}.\nPlease show your confirmation number for pickup.`)
} 


// need to find another approach for order input 
// create a box for storing clicked fooditems
// create a clickable fooditems element inside of box for deleting orders
// make array of storing 
// function to handlechange order

  return (
    <form >
      <div className={styles.form}>
        <label htmlFor="name" >Name: </label>
        <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)} />
      </div>
      <div className={styles.form}>
        <label htmlFor="phone">Phone: </label>
        <input type="text" id="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} />
      </div>
      <div className={styles.form}>
        <label htmlFor="address">Address: </label>
        <input type="text" id="address" value={address} onChange={(e)=> setAddress(e.target.value)} />
      </div>
      <div className={styles.form}>
        <label htmlFor="order">Order: </label>
        <textarea id="order" value={order} onChange={(e)=> setOrder(e.target.value)} style={{resize: "none"}}></textarea>
      </div>
      <div className={styles.form}>
        <button type="submit" onSubmit={handleSubmit}>Submit Order</button>
      </div>
    </form>
    )
}

export default FoodOrderForm;