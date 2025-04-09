/* eslint-disable react-hooks/rules-of-hooks */
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

const page = () => {
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
								<li className='cursor-pointer hover:text-red-500'><Link href={'/'}>Home</Link></li>
								<li className='cursor-pointer text-red-500 '>
									<Link href={'/about'}>About us</Link>
								</li>
							</ul>
						</nav>
					</header>
					 <main>
     
        <section className=" text-white py-20">
          <div className="w-[75%] m-auto">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">About DarkByteShop</h1>
              <p className="text-xl text-gray-300 mb-8">
                Were a team of cybersecurity experts dedicated to providing high-quality security tools and resources
                for ethical hackers, penetration testers, and security researchers.
              </p>
              <div className="flex space-x-4">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center"
                >
                  Get in Touch <ChevronRight className="ml-2 h-4 w-4" />
                </button>
                <button
                  className="bg-transparent border border-gray-500 hover:border-white text-white px-6 py-3 rounded-lg font-medium"
                >
                  Browse Products
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="w-[75%] m-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At DarkByteShop, our mission is to empower cybersecurity professionals with the tools they need to
                  protect digital infrastructures against evolving threats. We believe in ethical hacking as a means to
                  strengthen security systems and prevent malicious attacks.
                </p>
                <p className="text-gray-700 mb-4">
                  We curate and develop high-quality security tools that are reliable, effective, and accessible to
                  professionals at all levels. Our commitment to the cybersecurity community extends beyond just selling
                  products – were dedicated to education, awareness, and the advancement of security practices.
                </p>
                <p className="text-gray-700">
                  By providing cutting-edge tools and resources, we aim to contribute to a safer digital world where
                  organizations can protect their assets and individuals can safeguard their privacy.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
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
                        <h4 className="text-xl font-semibold mb-1">Ethical Practices</h4>
                        <p className="text-gray-600">
                          We promote responsible security testing and ethical hacking principles.
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
                        <h4 className="text-xl font-semibold mb-1">Quality & Reliability</h4>
                        <p className="text-gray-600">
                          Every tool we offer is thoroughly tested and verified by security experts.
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
                        <h4 className="text-xl font-semibold mb-1">Knowledge Sharing</h4>
                        <p className="text-gray-600">
                          We believe in educating and empowering the cybersecurity community.
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
                        <h4 className="text-xl font-semibold mb-1">Innovation</h4>
                        <p className="text-gray-600">
                          We continuously evolve our offerings to address emerging security challenges.
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Story</h2>
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
                      <h4 className="text-xl font-semibold mb-2">The Beginning</h4>
                      <p className="text-gray-600">
                        DarkByteShop was founded by a group of cybersecurity professionals who saw a need for reliable,
                        well-documented security tools. What started as a small collection of custom-built tools quickly
                        gained attention in the security community.
                      </p>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <Image
                          src={oneHack}
                          alt="DarkByteShop Founding"
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
                          alt="First Product Launch"
                          width={300}
                          height={200}
                          className="rounded-lg w-full"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-left order-1 md:order-2">
                      <h3 className="text-2xl font-bold mb-2">2020</h3>
                      <h4 className="text-xl font-semibold mb-2">Expansion</h4>
                      <p className="text-gray-600">
                        We expanded our product line to include comprehensive security suites and specialized tools for
                        network penetration testing, vulnerability assessment, and digital forensics. Our team grew to
                        include experts from various cybersecurity domains.
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
                      <h4 className="text-xl font-semibold mb-2">Global Recognition</h4>
                      <p className="text-gray-600">
                        DarkByteShop gained international recognition for our innovative security solutions. We launched
                        our educational platform, offering courses and certifications for security professionals. Our
                        tools are now used by organizations and security teams worldwide.
                      </p>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <Image
                          src={threeHack}
                          alt="Global Team"
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
                          alt="DarkByteShop Today"
                          width={300}
                          height={200}
                          className="rounded-lg w-full"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-left order-1 md:order-2">
                      <h3 className="text-2xl font-bold mb-2">Today</h3>
                      <h4 className="text-xl font-semibold mb-2">Leading the Industry</h4>
                      <p className="text-gray-600">
                        Today, DarkByteShop continues to lead the industry with cutting-edge security solutions. Were
                        committed to staying ahead of emerging threats and providing the tools needed to combat them.
                        Our focus remains on quality, ethics, and empowering the security community.
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
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "DarkByteShop's tools have become an essential part of our security testing workflow. Their products are reliable, well-documented, and constantly updated.",
                  author: "David Chen",
                  position: "Security Director, TechSecure Inc.",
                },
                {
                  quote:
                    "As a security consultant, I rely on tools that I can trust. DarkByteShop delivers high-quality security solutions that have helped me identify vulnerabilities that other tools missed.",
                  author: "Sarah Williams",
                  position: "Independent Security Consultant",
                },
                {
                  quote:
                    "The support team at DarkByteShop is exceptional. They're knowledgeable, responsive, and genuinely care about helping their customers succeed in their security efforts.",
                  author: "Michael Rodriguez",
                  position: "CISO, Global Finance Group",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl">
                  <svg className="h-8 w-8 text-red-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="w-[75%] m-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Security?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our range of cybersecurity tools and resources designed for professionals who take security
              seriously.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium"
              >
                Browse Products
              </button>
              <button className="bg-gray-800 hover:bg-black text-white px-8 py-3 rounded-lg font-medium">
                Contact Us
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
                    Your trusted source for cybersecurity tools and resources for ethical hacking and penetration
                    testing.
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
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/products" className="text-gray-400 hover:text-white">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-white">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
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
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Email: info@darkbyteshop.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Hours: Mon-Fri 9am - 5pm EST</li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} DarkByteShop. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                  <Link href="/" className="hover:text-white">
                    Privacy Policy
                  </Link>
                  <Link href="/" className="hover:text-white">
                    Terms of Service
                  </Link>
                  <Link href="/" className="hover:text-white">
                    Refund Policy
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

export default page
