import React, { useContext } from 'react' //
import SelectMovies from '../Components/SelectMovies' //
import '../CSS/Home.css' //
import LastBookingDetails from '../Components/LastBookingDetails'  //
import TimeSchedule from '../Components/TimeSchedule' //
import SelectSeat from '../Components/SelectSeat' //
import BsContext from '../Context/BsContext' //

const Home = (props) => {
  const context = useContext(BsContext)

  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage
  } = context

  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }

    return false;
  };

  //check whether all seats have input 0
  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };


  const handleBookNow = () =>{

    if(!movie){
      setErrorMessage(true)
      setErrorMessage("Please select a movie")
    }
    else if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please select a time slot!");
    } else if (
      checkNegativeSeatsValidity(noOfSeat) ||
      checkZeroSeatsValidity(noOfSeat)
    ) {
      setErrorPopup(true);
      setErrorMessage("Invalid Seats!");
    }else{
      handlePostBooking()
    }
    
  }
  return (

    <>
      <div className='container'>
        <div className="wrapper">
          <div className="select-movie-container">
            <SelectMovies/>
          </div>
          <div className='last_booking_details_container'>
            <LastBookingDetails/>
          </div>
        </div>
        <div className="time_seats_container">
          <TimeSchedule/>
          <SelectSeat/>
          <button className='BN_btn' onClick={()=>{
            handleBookNow()
          }}>Book Now</button>
        </div>
      </div>
    </>
  )
}

export default Home 