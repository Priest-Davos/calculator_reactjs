
import styles from "./App.module.css"
import ButtonsContainer from "./components/ButtonContainer"
import Display from "./components/Display"
import { useState } from "react";

function App() {

  const [expression, setExpression] = useState("")

  let handleOnClicked = (event, buttonName) => {  
    console.log(event)
    if (buttonName == "<") {
      let newExpression = String(expression)
      //console.log(typeof (newExpression))
      //console.log(` new expression-> ${newExpression}`)
      newExpression = newExpression.slice(0, (newExpression.length) - 1)
      setExpression(newExpression)
    }
    else if (buttonName == "C") {
      setExpression("")
    }
    else if (buttonName == "=") {
      //  console.log(eval(expression))
      setExpression(eval(expression))
    }
    else 
      {setExpression(expression + buttonName)}
    //  console.log(expression)



  }

  return (
    <>

      <div className={styles.calculator}>

        <Display displayValue={expression} />
        <ButtonsContainer handleOnClicked={handleOnClicked} />

      </div>


    </>
  )
}

export default App
