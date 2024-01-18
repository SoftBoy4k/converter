import { useState } from "react"
import icon from "../icons/icons8-arrow-down-50.png"
import List from "./List"


interface Props {
    currency: string,
    setCurrency: (currencyShort: string) => void,
}

const DropDownList = ({currency, setCurrency}: Props) => {

  const [isListActive, setIsListActive] = useState<boolean>(false);

  return (
    <div className="drop-down">
      <button className="drop-down-list" onClick={() => setIsListActive(!isListActive)}>
        {currency} 
        <img src={icon} className="arrow"/>
        <List isListActive={isListActive} setCurrency={setCurrency}/>
      </button>
    </div>
  )
}

export default DropDownList