import Window from "./Window"
import './Converter.scss'
import Switcher from "./Switcher"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"


const Converter = () => {
  const [firstCurrency, setFirstCurrency] = useState<string>("BYN");
  const [secondCurrency, setSecondCurrency] = useState<string>("RUB");
  const [firstWindowValue, setFirstWindowValue] = useState<number>();
  const [secondWindowValue, setSecondWindowValue] = useState<number>();
  const currencyState = useSelector((state: RootState) => state.currency.rates)

  const swapCurrency = ():void => {
    let currentCurrency: string[] = [firstCurrency, secondCurrency].reverse()
    setFirstCurrency(currentCurrency[0]);
    setSecondCurrency(currentCurrency[1]);
  }

  const checkCurrency = (): void => {
    if (firstCurrency === secondCurrency && firstCurrency !== "BYN") {
      setSecondCurrency("BYN")
    } else if (firstCurrency === secondCurrency) {
      setSecondCurrency("RUB")
    }
  }

  const getCurrentCurrency = (pair: string):number => {
    for (let i in currencyState) {
      if (i === pair) {
        return currencyState[pair]
      }
    }
    return 0;
  }

  const culcFirstValue = (value: number):void => {
    setFirstWindowValue(value);
    const pair: string = firstCurrency+secondCurrency;
    const culcValue: number = +(value * getCurrentCurrency(pair)).toFixed(2);
    setSecondWindowValue((culcValue));
  }

  const culcSecondValue = (value: number):void => {
    setSecondWindowValue(value);
    const pair: string = secondCurrency+firstCurrency;
    const culcValue: number = +(value * getCurrentCurrency(pair)).toFixed(2);
    setFirstWindowValue(culcValue);
  }

  useEffect(() => {
    checkCurrency();
    if (firstWindowValue){
      culcFirstValue(firstWindowValue);
    }
    
  }, [firstCurrency, secondCurrency])

  return (
    <div className="converter">
        <Window howWindow="first" header="Отдадите" currency={firstCurrency} setCurrency={setFirstCurrency} value={firstWindowValue} setValue={culcFirstValue}/>, 
        <Switcher swapCurrency={swapCurrency}/>
        <Window howWindow="second" header="Получите" currency={secondCurrency} setCurrency={setSecondCurrency} value={secondWindowValue} setValue={culcSecondValue}/>
    </div>
  )
}

export default Converter