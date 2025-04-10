'use client'
import hacklogo from '@/assets/giphy.gif'
import { useTranslation } from '@/lib/useTranslation'
import photoHacker from '@/assets/hacker-7821251_1280-2044085253.jpg'
import backImage from '@/assets/Hackers-Attack-COVID-19-Vaccine_5f1131d92a8ff-3666407258.jpg'
import hackpi from '@/assets/hackpi.jpg'
import flipper from '@/assets/Screenshot-5-181655884.png'
import icon from '@/assets/ucizvnk.gif'
import hackKey from '@/assets/UnicornGadgetHP-2994059497.jpg'
import {
  ChevronRight,
  Github,
  Instagram,
  ShoppingCart,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import LanguageSwitcher from '@/components/langSwitch'

const products = [
  {
    id: 1,
    name: 'Flipper Zero',
    description: 'Advanced cybersecurity solution for professional testing.',
    price: 1999.9,
    image: flipper,
  },
  {
    id: 2,
    name: 'HackyPi',
    description: 'Compact penetration testing tool with multiple interfaces.',
    price: 400.3,
    image: hackpi,
  },
  {
    id: 3,
    name: 'HackKey',
    description: 'Professional-grade security key for authentication bypass.',
    price: 940.5,
    image: hackKey,
  },
  {
    id: 4,
    name: 'Kali Linux Pro',
    description: 'Premium version of Kali Linux with additional tools.',
    price: 299.99,
    image: photoHacker,
  },
  {
    id: 5,
    name: 'Network Sniffer',
    description: 'Advanced network analysis and packet sniffing tool.',
    price: 599.99,
    image: backImage,
  },
  {
    id: 6,
    name: 'Forensics Toolkit',
    description: 'Complete digital forensics investigation suite.',
    price: 899.99,
    image: hacklogo,
  },
]

export default function Home() {
  const [visible, setVisible] = useState(true)
  const [hide, setHide] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setTimeout(() => {
      setHide(true)
      setTimeout(() => setVisible(false), 0)
    }, 1500)
  }, [])

  return (
    <>
      {hide && (
        <>
          <header className='md:w-[75%] m-auto py-5'>
            <nav className='flex md:flex-row flex-col justify-between items-center'>
              <div className='flex items-center'>
                <Image src={icon} alt='' className='w-10 h-10' />
                <p className='text-xl md:pt-3 pt-0'>{t('header.title')}</p>
              </div>
              <ul className='flex md:gap-10 gap-5 text-xl'>
                <li><LanguageSwitcher /></li>
                <li className='cursor-pointer text-red-500'>{t('header.home')}</li>
                <li className='cursor-pointer hover:text-red-500'>
                  <Link href={'/about'}>{t('header.about')}</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <section className='md:w-[75%] m-auto py-8'>
              <div className='bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-12'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                  <div className='md:w-1/2 mb-6 md:mb-0'>
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                      {t('hero.title')}
                    </h1>
                    <p className='text-gray-300 mb-6'>
                      {t('hero.description')}
                    </p>
                    <div className='flex space-x-4'>
                      <Link
                        href='/products'
                        className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center'
                      >
                        {t('hero.browse')} <ChevronRight className='ml-2 h-4 w-4' />
                      </Link>
                      <Link
                        href='/about'
                        className='bg-transparent border border-gray-500 hover:border-white text-white px-6 py-3 rounded-lg font-medium'
                      >
                        {t('hero.learn')}
                      </Link>
                    </div>
                  </div>
                  <div className='md:w-1/2 flex justify-center'>
                    <div className='bg-gray-800 p-4 rounded-xl shadow-lg w-full max-w-md'>
                      <div className='bg-black rounded-lg p-4 h-64 flex items-center justify-center'>
                        <Image
                          src={photoHacker}
                          alt='Featured Security Tool'
                          className='rounded'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className='text-4xl font-bold mb-4'>{t('categories')}</h2>
              <ul className='flex flex-wrap justify-center sm:justify-between text-center py-3 gap-4'>
                {[
                  'Kali Linux',
                  'Network Tools',
                  'Forensics',
                  'Penetration Testing',
                  'Security Courses',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className='border border-gray-500 w-full sm:w-[200px] py-3 rounded-2xl cursor-pointer hover:bg-red-600 hover:border-none hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-400'
                    tabIndex={0}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className='w-[75%] m-auto py-8'>
              <h2 className='text-4xl font-bold mb-6'>{t('products.featured')}</h2>
              <div className='relative'>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {products.map(product => (
                    <SwiperSlide key={product.id}>
                      <div className='border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full'>
                        <div className='h-48 bg-gray-100 relative'>
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className='object-cover'
                          />
                        </div>
                        <div className='p-4'>
                          <Link href={`/products/${product.id}`}>
                            <h3 className='text-xl font-semibold mb-2 hover:text-red-600'>
                              {product.name}
                            </h3>
                          </Link>
                          <p className='text-gray-600 mb-3'>
                            {product.description}
                          </p>
                          <div className='flex justify-between items-center'>
                            <span className='text-xl font-bold text-red-600'>
                              ${product.price}
                            </span>
                            <button className='bg-gray-800 hover:bg-black text-white p-2 rounded-full flex gap-3'>
                              <ShoppingCart className='h-5 w-5' /> {t('products.addToCart')}
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>

            <section
              className='md:w-[75%] m-auto py-8 md:mb-12 bg-no-repeat'
              style={{ backgroundImage: `url(${backImage.src})` }}
            >
              <div className='rounded-xl md:p-8'>
                <h2 className='text-3xl font-bold mb-4 text-center'>
                  {t('whyChoose.title')}
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                  <div className='text-center p-4'>
                    <div className='bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-8 w-8 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                      </svg>
                    </div>
                    <h3 className='text-xl font-semibold md:mb-2'>
                      {t('whyChoose.security')}
                    </h3>
                    <p>{t('whyChoose.securityDesc')}</p>
                  </div>
                  <div className='md:block hidden text-center p-4'>
                    <div className='bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-8 w-8 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 10V3L4 14h7v7l9-11h-7z'
                        />
                      </svg>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>
                      {t('whyChoose.delivery')}
                    </h3>
                    <p>{t('whyChoose.deliveryDesc')}</p>
                  </div>
                  <div className='md:block hidden text-center p-4'>
                    <div className='bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-8 w-8 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
                        />
                      </svg>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>
                      {t('whyChoose.support')}
                    </h3>
                    <p>{t('whyChoose.supportDesc')}</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className='text-white py-12'>
            <div className='w-[75%] m-auto'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
                <div>
                  <div className='flex items-center mb-4'>
                    <Image
                      src={icon}
                      alt='DarkByteShop Logo'
                      className='w-8 h-8 mr-2'
                    />
                    <span className='text-xl font-bold'>{t('header.title')}</span>
                  </div>
                  <p className='text-gray-400 mb-4'>
                    {t('footer.description')}
                  </p>
                  <div className='flex space-x-4'>
                    <a href='#' className='text-gray-400 hover:text-white'>
                      <Github className='h-5 w-5' />
                    </a>
                    <a href='#' className='text-gray-400 hover:text-white'>
                      <Twitter className='h-5 w-5' />
                    </a>
                    <a href='#' className='text-gray-400 hover:text-white'>
                      <Instagram className='h-5 w-5' />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className='text-lg font-semibold mb-4'>{t('footer.quickLinks')}</h3>
                  <ul className='space-y-2'>
                    <li>
                      <Link href='/' className='text-gray-400 hover:text-white'>
                        {t('header.home')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/products'
                        className='text-gray-400 hover:text-white'
                      >
                        {t('products.featured')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/about'
                        className='text-gray-400 hover:text-white'
                      >
                        {t('header.about')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/contact'
                        className='text-gray-400 hover:text-white'
                      >
                        {t('footer.contact')}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-semibold mb-4'>{t('footer.categories')}</h3>
                  <ul className='space-y-2'>
                    {[
                      'Kali Linux',
                      'Network Tools',
                      'Forensics',
                      'Penetration Testing',
                      'Security Courses',
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a href='#' className='text-gray-400 hover:text-white'>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-semibold mb-4'>{t('footer.contact')}</h3>
                  <ul className='space-y-2 text-gray-400'>
                    <li>Email: info@darkbyteshop.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Hours: Mon-Fri 9am - 5pm EST</li>
                  </ul>
                </div>
              </div>

              <div className='pt-8 border-t border-gray-800 text-center text-gray-500'>
                <p>
                  {t('footer.copyright', { year: new Date().getFullYear() })}
                </p>
                <div className='flex justify-center space-x-6 mt-4'>
                  <Link href='/' className='hover:text-white'>
                    {t('footer.privacy')}
                  </Link>
                  <Link href='/' className='hover:text-white'>
                    {t('footer.terms')}
                  </Link>
                  <Link href='/' className='hover:text-white'>
                    {t('footer.refund')}
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}

      {visible && (
        <div
          className={`w-full h-[100vh] bg-black transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
            hide ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Image src={hacklogo} alt='' />
        </div>
      )}
    </>
  )
}