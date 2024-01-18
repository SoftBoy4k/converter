

interface Props {
    currencyName: string,
    currencyShort: string,
    setCurrency: (currencyShort: string) => void,
}

const ListItem = ({currencyName, currencyShort, setCurrency}: Props ) => {
  return (
    <li onClick={() => setCurrency(currencyShort)}>{currencyName} ({currencyShort})</li>
  )
}

export default ListItem