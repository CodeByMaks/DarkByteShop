import Image from 'next/image'
import notfound from '@/assets/HTML-404-Error-Page-3597480708.gif'

const Notfound = () => {
  return (
	 <div className='w-full h-[100vh]'>
		<Image className='w-full h-[100vh]' src={notfound} alt='' />
	 </div>
  )
}

export default Notfound