import React from 'react'

const PageTitle = ({title="Employee Details Dashboard"}) => {
  return (
    <div>
        <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">{title}</h2>
    </div>
  )
}

export default PageTitle