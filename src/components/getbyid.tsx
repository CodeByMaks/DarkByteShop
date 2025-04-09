import hacklogo from '@/assets/giphy.gif'
import photoHacker from '@/assets/hacker-7821251_1280-2044085253.jpg'
import backImage from '@/assets/Hackers-Attack-COVID-19-Vaccine_5f1131d92a8ff-3666407258.jpg'
import hackpi from '@/assets/hackpi.jpg'
import flipper from '@/assets/Screenshot-5-181655884.png'
import hackKey from '@/assets/UnicornGadgetHP-2994059497.jpg'

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

export const getProductById = (id: number | string) => {
	return products.find(products =>  products.id === Number(id))
} 