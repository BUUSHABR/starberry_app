import React from 'react'
import Image from 'next/image'

const BannerImages = ({ Images }) => {
  console.log("llok", Images)
  return (

    <div className="lg:w-[60%] w-full">
      <Image
        src={Images?.[0]?.srcUrl || '/assets/images/noimage.jpg'}
        alt="Property Image"
        width={500}ed
        height={300} 
        className="w-[100%] h-[60%] object-cover rounded"
      />
      <div className="flex flex-row w-[100%] mt-4 ">
        <Image
          src={Images?.[1]?.srcUrl || '/assets/images/noimage.jpg'}
          alt="Property Image"
          width={200} 
          height={300} 
          className="w-[50%] h-50 object-cover rounded"
        />
        <Image
          src={Images?.[2]?.srcUrl || '/assets/images/noimage.jpg'}
          alt="Property Image"
          width={250} 
          height={300} 
          className="w-[50%] h-50 object-cover rounded"
        />
      </div>
    </div>
  )
}

export default BannerImages