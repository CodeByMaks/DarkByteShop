import Image from 'next/image'
import React from 'react'
import matrix from '@/assets/number.gif'

const page = () => {
  return (
	 <div className='w-full h-[100vh]'>
		<Image src={matrix} className='w-full h-[100vh]' alt='' />
	 </div>
  )
}

export default page