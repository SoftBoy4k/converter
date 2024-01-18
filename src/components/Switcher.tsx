import swapIcon from '../icons/swap.png'

interface Props {
  swapCurrency: () => void,
}

const Switcher = ({swapCurrency}: Props) => {

  const clickHandler = ():void => {
    swapCurrency();
  }

  return (
    <img className="switcher" src={swapIcon} onClick={() => clickHandler()}/>
  )
}

export default Switcher