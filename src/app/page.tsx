'use client'
import hacklogo from '@/assets/giphy.gif'
import icon from '@/assets/ucizvnk.gif'
import { ChevronRight, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
	const [visible, setVisible] = useState(true)
	const [hide, setHide] = useState(false)

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
				<header className='w-[75%] m-auto py-5'>
					<nav className='flex justify-between items-center'>
						<div className='flex items-center'>
							<Image src={icon} alt='' className='w-10 h-10' />
							<p className='text-xl pt-3'>DarkByteShop</p>
						</div>
						<ul className='flex gap-10 text-xl'>
							<li className='cursor-pointer text-red-700'>Home</li>
							<li className='cursor-pointer hover:text-red-700'>
								<Link href={'./products'}>Products</Link>
							</li>
							<li className='cursor-pointer hover:text-red-700'>
								<Link href={'/about'}>About us</Link>
							</li>
						</ul>
					</nav>
				</header>
        <main>
            <section className="w-[75%] m-auto py-8">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cybersecurity Tools & Resources</h1>
                    <p className="text-gray-300 mb-6">
                      Professional-grade security tools for ethical hackers, penetration testers, and security
                      researchers.
                    </p>
                    <div className="flex space-x-4">
                      <Link
                        href="/products"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center"
                      >
                        Browse Tools <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        href="/about"
                        className="bg-transparent border border-gray-500 hover:border-white text-white px-6 py-3 rounded-lg font-medium"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="bg-gray-800 p-4 rounded-xl shadow-lg w-full max-w-md">
                      <div className="bg-black rounded-lg p-4 h-64 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Featured Security Tool"
                          width={300}
                          height={200}
                          className="rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-bold mb-4">Categories</h2>
              <ul className="flex flex-wrap justify-between text-center py-3 gap-4">
                <li className="border border-gray-500 w-[200px] py-3 rounded-2xl cursor-pointer hover:bg-red-600 hover:border-none hover:text-white transition-colors">
                  Kali Linux
                </li>
                <li className="border border-gray-500 w-[200px] p-3 rounded-2xl cursor-pointer hover:bg-red-600 hover:border-none hover:text-white transition-colors">
                  Network Tools
                </li>
                <li className="border border-gray-500 w-[200px] p-3 rounded-2xl cursor-pointer hover:bg-red-600 hover:border-none hover:text-white transition-colors">
                  Forensics
                </li>
                <li className="border border-gray-500 w-[200px] p-3 rounded-2xl cursor-pointer hover:bg-red-600 hover:border-none hover:text-white transition-colors">
                  Penetration Testing
                </li>
                <li className="border border-gray-500 w-[200px] p-3 rounded-2xl cursor-pointer hover:bg-red-600 hover:border-none hover:text-white transition-colors">
                  Security Courses
                </li>
              </ul>
            </section>

            <section className="w-[75%] m-auto py-8">
              <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-gray-100 relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=300&text=Product ${item}`}
                        alt={`Product ${item}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">Security Tool {item}</h3>
                      <p className="text-gray-600 mb-3">
                        Advanced cybersecurity solution for professional penetration testing.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-red-600">${(99 + item * 20).toFixed(2)}</span>
                        <button className="bg-gray-800 hover:bg-black text-white p-2 rounded-full">
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/products"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  View All Products
                </Link>
              </div>
            </section>

            <section className="w-[75%] m-auto py-8 mb-12">
              <div className="bg-gray-100 rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-4 text-center">Why Choose DarkByteShop?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4">
                    <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Trusted Security</h3>
                    <p className="text-gray-600">All tools are verified and tested by security professionals.</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">Instant digital delivery for all our software products.</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Technical assistance available around the clock.</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        <footer>

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
