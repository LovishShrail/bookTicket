import React, { useContext } from 'react'
import { seats } from '../data'
import '../CSS/SelectSeats.css';
import SeatInputs from './SeatInputs';
import BsContext from '../Context/BsContext';




const SelectSeat = () => {
  const context = useContext(BsContext )
  const {noOfSeat,changeNoOfSeats} = context
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats :</h1>
      <div className="SS_main_container">
        {seats.map((el,index) =>{
          return(
            <SeatInputs key={index} text={el} noOfSeat={noOfSeat} changeNoOfSeats={changeNoOfSeats}/>
          )
        })}
      </div>

    </div>
  )
}

export default SelectSeat