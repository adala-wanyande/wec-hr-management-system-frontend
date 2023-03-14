import React from 'react'
import { Link } from 'react-router-dom';


const NavigationButton = ({buttonText = "Next Page", link, handleClick, seeMore, add}) => {
    let renderSvg
    if (seeMore) {
         renderSvg = <svg className='w-4 h-4 ml-2 -mr-1 mt-2 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 256a56 56 0 1 1 112 0A56 56 0 1 1 0 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
    }
    else if (add) {
         renderSvg = <svg className='w-4 h-4 ml-2 -mr-1 mt-2 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/></svg>

    }
  return (
    <Link to={link}>
        <button onClick={handleClick} type="button" class="flex text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40">
            {buttonText}
            {renderSvg}
        </button>
    </Link>
  )
}

export default NavigationButton