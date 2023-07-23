


import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center'>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/* ====================Logo=================== */}
          <div className='flex items-center gap-[10px]'>
            <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
              A
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl Otext-smallTextColor font-[700]">Aashish</h2>
              <p className="text-smallTextColor text-[16px] font-[500]">
                personal
              </p>
            </div>
          </div>
          {/* ==================Logo End=================== */}
        </div>
      </div>
    </header>
  )
}

export default Header;