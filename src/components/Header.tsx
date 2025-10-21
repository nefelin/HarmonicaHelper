import React from 'react'

const Header: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-gray-800 mb-2 text-responsive-title font-bold">
        Interactive Harmonica Scale Degrees
      </h1>
      <div className="text-center text-gray-600 mb-5 text-responsive-info">
        Click any note to make it the root. All other notes will show their scale degree.
      </div>
    </>
  )
}

export default Header
