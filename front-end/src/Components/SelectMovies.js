import React, { useContext } from 'react'
import { moviesList } from '../data'
import RadioComponent from './RadioComponent'
import '../CSS/SelectMovies.css'
import BsContext from '../Context/BsContext'

const SelectMovies = () => {
  const context = useContext(BsContext)
  const {movie,changeMovie} = context
  const handleChangeMovie = (val) =>{
    changeMovie(val)
    window.localStorage.setItem("movie",val)
  }
  return (
    <>
        <h1 className='SM_heading'>Select A Movie</h1>
        <div className='select-movie-container' >
            {moviesList.map((el,index) =>{
                return(
                    <RadioComponent text={el} key={index} data={movie} changeSelection={handleChangeMovie}/>
                )
            })}
        </div>
    </>
  )
}

export default SelectMovies