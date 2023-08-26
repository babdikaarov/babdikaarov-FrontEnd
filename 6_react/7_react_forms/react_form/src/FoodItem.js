import React from "react";
import styles from "./FoodItem.module.css";

const FoodItem = ({ name, price, imgSrc, updateData }) => {

  const handleClick = () => {
    updateData(name);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.imageWrapper}>
        <img src={imgSrc} alt="" className={styles.image} />
      </div>
      <div className={styles.detailsWrapper}>
        <h3>{name}</h3>
        <p className={styles.details}>{`Price: ${`${price}`}`}</p>
      </div>
    </div>
  );
};

export default FoodItem;