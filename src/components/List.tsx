import ListItem from "./ListItem"


interface Props {
    isListActive: boolean,
    setCurrency: (currencyShort: string) => void
}


const List = ({isListActive, setCurrency}: Props) => {

  return (
    <ul className="list" style={!isListActive ? {display: "none"} : undefined}>
        <ListItem currencyName="Белорусский рубль" currencyShort="BYN" setCurrency={setCurrency}/>
        <ListItem currencyName="Российский рубль" currencyShort="RUB" setCurrency={setCurrency}/>
        <ListItem currencyName="Американский доллар" currencyShort="USD" setCurrency={setCurrency}/>
        <ListItem currencyName="Евро" currencyShort="EUR" setCurrency={setCurrency}/>
    </ul>
  )
}

export default List