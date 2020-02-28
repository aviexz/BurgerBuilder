import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngrediant/BurgerIngrediant";

const burger = props => {
  //Props is passing an object NOT an array, so map cannot be used.

  //This will extract the keys of a given object and turn it into an array, so we can use map.
  const transformedIngredients = Object.keys(props.ingredients).map(
    ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    }
  );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
