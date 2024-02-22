import { useState } from "react";
import styles from "./ButtonsContainer.module.css"
const ButtonsContainer = ({handleOnClicked}) => {

  const buttonNames = ["C","^", "=","<", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "/", "0", ".", "="];
 
  
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => <button
          className={styles.button}
          onClick={(event) => { handleOnClicked(event, buttonName) }}

        > {buttonName}

        </button>)}

      </div>
    </>
  )
}
export default ButtonsContainer