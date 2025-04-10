'use client'
import hacklogo from '@/assets/giphy.gif'
import icon from '@/assets/ucizvnk.gif'
import { ChevronRight, Github, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import oneHack from '@/assets/kali-262111030.jpg'
import twoHack from '@/assets/5604327-4166648038.jpg'
import threeHack from '@/assets/a27d24_5ab464b7edcb49aa92e7b2b42eaaaa17~mv2-2811071755.jpg'
import fouthHack from '@/assets/hacker-digital-art-532@0@i-pc-hd-3601368310.jpg'
import { useTranslation } from '@/lib/useTranslation'
import LanguageSwitcher from '@/components/langSwitch'

const Page = () => {
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
                <li className='cursor-pointer hover:text-red-500 '><Link href={'/'}>{t('header.home')}</Link></li>
                <li className='cursor-pointer text-red-500'>
                  {t('header.about')}
                </li>
              </ul>
            </nav>
          </header>

          <main>
            <section className="text-white py-20">
              <div className="w-[75%] m-auto">
                <div className="max-w-3xl">
                  <h1 className="text-5xl font-bold mb-6">{t('About.about.header.title')}</h1>
                  <p className="text-xl text-gray-300 mb-8">
                    {t('About.about.header.description')}
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center">
                      {t('About.about.cta.contact')} <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                    <button className="bg-transparent border border-gray-500 hover:border-white text-white px-6 py-3 rounded-lg font-medium">
                      {t('About.about.cta.products')}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="w-[75%] m-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">{t('About.about.mission.title')}</h2>
                    <p className="text-gray-700 mb-4">
                      {t('About.about.mission.content1')}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {t('About.about.mission.content2')}
                    </p>
                    <p className="text-gray-700">
                      {t('About.about.mission.content3')}
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="p-8 rounded-xl">
                      <h3 className="text-2xl font-bold mb-4">{t('About.about.values.title')}</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="bg-red-600 p-2 rounded-full mr-4 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-1">{t('About.about.values.ethical.title')}</h4>
                            <p className="text-gray-600">
                              {t('About.about.values.ethical.desc')}
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-600 p-2 rounded-full mr-4 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-1">{t('About.about.values.quality.title')}</h4>
                            <p className="text-gray-600">
                              {t('About.about.values.quality.desc')}
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-600 p-2 rounded-full mr-4 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-1">{t('About.about.values.knowledge.title')}</h4>
                            <p className="text-gray-600">
                              {t('About.about.values.knowledge.desc')}
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-600 p-2 rounded-full mr-4 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-1">{t('About.about.values.innovation.title')}</h4>
                            <p className="text-gray-600">
                              {t('About.about.values.innovation.desc')}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="w-[75%] m-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">{t('About.about.story.title')}</h2>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

                  <div className="space-y-16">
                    <div className="relative">
                      <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                        <div className="bg-red-600 w-6 h-6 rounded-full"></div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                          <h3 className="text-2xl font-bold mb-2">2018</h3>
                          <h4 className="text-xl font-semibold mb-2">{t('About.about.story.2018.title')}</h4>
                          <p className="text-gray-600">
                            {t('About.about.story.2018.desc')}
                          </p>
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                          <div className="bg-white p-6 rounded-xl shadow-md">
                            <Image
                              src={oneHack}
                              alt={t('About.about.story.2018.title')}
                              width={300}
                              height={200}
                              className="rounded-lg w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                        <div className="bg-red-600 w-6 h-6 rounded-full"></div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mb-6 md:mb-0">
                          <div className="bg-white p-6 rounded-xl shadow-md md:ml-auto">
                            <Image
                              src={twoHack}
                              alt={t('About.about.story.2020.title')}
                              width={300}
                              height={200}
                              className="rounded-lg w-full"
                            />
                          </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 md:text-left order-1 md:order-2">
                          <h3 className="text-2xl font-bold mb-2">2020</h3>
                          <h4 className="text-xl font-semibold mb-2">{t('About.about.story.2020.title')}</h4>
                          <p className="text-gray-600">
                            {t('About.about.story.2020.desc')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                        <div className="bg-red-600 w-6 h-6 rounded-full"></div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                          <h3 className="text-2xl font-bold mb-2">2022</h3>
                          <h4 className="text-xl font-semibold mb-2">{t('About.about.story.2022.title')}</h4>
                          <p className="text-gray-600">
                            {t('About.about.story.2022.desc')}
                          </p>
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                          <div className="bg-white p-6 rounded-xl shadow-md">
                            <Image
                              src={threeHack}
                              alt={t('About.about.story.2022.title')}
                              width={300}
                              height={200}
                              className="rounded-lg w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                        <div className="bg-red-600 w-6 h-6 rounded-full"></div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mb-6 md:mb-0">
                          <div className="bg-white p-6 rounded-xl shadow-md md:ml-auto">
                            <Image
                              src={fouthHack}
                              alt={t('About.about.story.today.title')}
                              width={300}
                              height={200}
                              className="rounded-lg w-full"
                            />
                          </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 md:text-left order-1 md:order-2">
                          <h3 className="text-2xl font-bold mb-2">2025</h3>
                          <h4 className="text-xl font-semibold mb-2">{t('About.about.story.today.title')}</h4>
                          <p className="text-gray-600">
                            {t('About.about.story.today.desc')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 bg-gray-900 text-white">
  <div className="w-[75%] m-auto">
    <h2 className="text-3xl font-bold mb-12 text-center">{t('About.about.testimonials.title')}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-gray-800 p-6 rounded-xl">
        <svg className="h-8 w-8 text-red-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-300 mb-6">{t('About.about.testimonials.items.0.quote')}</p>
        <div>
          <p className="font-bold text-lg">{t('About.about.testimonials.items.0.author')}</p>
          <p className="text-gray-400">{t('About.about.testimonials.items.0.position')}</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-gray-800 p-6 rounded-xl">
        <svg className="h-8 w-8 text-red-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-300 mb-6">{t('About.about.testimonials.items.1.quote')}</p>
        <div>
          <p className="font-bold text-lg">{t('About.about.testimonials.items.1.author')}</p>
          <p className="text-gray-400">{t('About.about.testimonials.items.1.position')}</p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-gray-800 p-6 rounded-xl">
        <svg className="h-8 w-8 text-red-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-300 mb-6">{t('About.about.testimonials.items.2.quote')}</p>
        <div>
          <p className="font-bold text-lg">{t('About.about.testimonials.items.2.author')}</p>
          <p className="text-gray-400">{t('About.about.testimonials.items.2.position')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

            <section className="py-16">
              <div className="w-[75%] m-auto text-center">
                <h2 className="text-3xl font-bold mb-4">{t('About.about.cta.title')}</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  {t('About.about.cta.desc')}
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium">
                    {t('About.about.cta.products')}
                  </button>
                  <button className="bg-gray-800 hover:bg-black text-white px-8 py-3 rounded-lg font-medium">
                    {t('About.about.cta.contact')}
                  </button>
                </div>
              </div>
            </section>
          </main>

          <footer className="text-white py-12">
            <div className="w-[75%] m-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Image src={icon} alt="DarkByteShop Logo" className="w-8 h-8 mr-2" />
                    <span className="text-xl font-bold">DarkByteShop</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    {t('About.footer.description')}
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">{t('About.footer.quickLinks')}</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white">
                        {t('About.header.home')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/products" className="text-gray-400 hover:text-white">
                        {t('About.about.cta.products')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white">
                        {t('About.header.about')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-white">
                        {t('About.footer.contact')}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">{t('About.footer.categories')}</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Kali Linux
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Network Tools
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Forensics
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Penetration Testing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Security Courses
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">{t('About.footer.contact')}</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Email: info@darkbyteshop.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Hours: Mon-Fri 9am - 5pm EST</li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
                <p>{t('About.footer.copyright', { year: new Date().getFullYear() })}</p>
                <div className="flex justify-center space-x-6 mt-4">
                  <Link href="/" className="hover:text-white">
                    {t('About.footer.privacy')}
                  </Link>
                  <Link href="/" className="hover:text-white">
                    {t('About.footer.terms')}
                  </Link>
                  <Link href="/" className="hover:text-white">
                    {t('About.footer.refund')}
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

export default Page