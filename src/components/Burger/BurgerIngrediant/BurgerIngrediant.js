import React from "react";
import classes from "./burgerIngredient.css";

//props will determine which ingredient to render.
const burgerIngredient = props => {
  let ingredient = null;

  //Analyzing which prop we're being passes & switching accordingly.
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.Breadtop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default burgerIngredient;
