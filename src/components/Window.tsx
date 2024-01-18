import { useEffect } from "react"
import DropDownList from "./DropDownList"
import axios from "axios";
import { useDispatch } from 'react-redux'
import { setRates } from '../redux/Slices/currencySlice'

const apiKey = process.env.REACT_APP_API_KEY;
const URL = `https://currate.ru/api/?get=rates&pairs=BYNRUB,BYNEUR,BYNUSD,RUBBYN,RUBEUR,RUBUSD,USDBYN,USDRUB,USDEUR,EURBYN,EURRUB,EURUSD&key=${apiKey}`;

interface Props {
    howWindow: string,
    header: string,
    currency: string,
    setCurrency: (currencyShort: string) => void,
    value: number | undefined,
    setValue: (value:number) => void,
}

const Window = ({howWindow, header, currency, setCurrency, value, setValue}: Props) => {
  const dispatch = useDispatch()

  const changeHandler = (value: string):void => {
    if ((!Number.isNaN(Number(value)) || value === '.') && value.length < 9) {
      setValue(Number(value))
    }
  }

  useEffect(() => {
    axios.get(URL).then(async (response: any) => {
      const result = response.data.data;
      dispatch(setRates({
        BYNRUB: result.BYNRUB,
        BYNUSD: result.BYNUSD,
        BYNEUR: result.BYNEUR,
        RUBBYN: result.RUBBYN,
        RUBUSD: result.RUBUSD,
        RUBEUR: result.RUBEUR,
        USDBYN: result.USDBYN,
        USDRUB: result.USDRUB,
        USDEUR: result.USDEUR,
        EURBYN: result.EURBYN,
        EURRUB: result.EURRUB, 
        EURUSD: result.EURUSD
      }))
    })
  }, [])

  

  return (
    <div className={`${howWindow} window`}>
        <h4>{header}</h4>
        <input type="text" placeholder="100" value={value} onChange={(e) => changeHandler(e.target.value)}/>
        <DropDownList currency={currency} setCurrency={setCurrency}/>
    </div>
  )
}

export default Window