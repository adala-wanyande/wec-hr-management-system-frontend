import React from 'react'
import { Link } from 'react-router-dom';


const NavigationButton = ({buttonText = "Next Page", link, handleClick}) => {
  return (
    <Link to={link}>
        <button onClick={handleClick} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{buttonText}</button>
    </Link>
  )
}

export default NavigationButton