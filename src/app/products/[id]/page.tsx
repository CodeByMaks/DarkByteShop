'use client'
import { getProductById } from '@/components/getbyid'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'


export default function ProductPage() {
	const params = useParams()
	const product = getProductById(params.id  as string)

	if (!product) {
		return (
			<div className='container mx-auto py-12 text-center'>
				Product not found
			</div>
		)
	}

	return (
		<div className='container mx-auto px-4'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-col md:flex-row gap-8'>
					<div className='md:w-1/2'>
						<div className='py-5'>
							<Link href={'/'}>
								<h1 className='cursor-pointer hover:text-red-500'>
									⬅ Back to home
								</h1>
							</Link>
						</div>
						<div className='bg-gray-100 rounded-lg overflow-hidden h-96 relative'>
							<Image
								src={product.image}
								alt={product.name}
								fill
								className='object-cover'
							/>
						</div>
					</div>
					<div className='md:w-1/2 flex flex-col justify-center items-start'>
						<h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
						<p className='text-2xl text-red-600 font-bold mb-6'>
							${product.price}
						</p>
						<p className='text-gray-700 mb-8'>{product.description}</p>
						<button className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center'>
							<ShoppingCart className='mr-2 h-5 w-5' />
							Add to Cart
						</button>
					</div>
				</div>

				<div className='mt-12'>
					<h2 className='text-2xl font-bold mb-4'>Product Details</h2>
					<div className='p-6 rounded-lg'>
						<p className='mb-4'>
							This is a professional-grade cybersecurity tool designed for
							ethical hackers and penetration testers.
						</p>
						<ul className='list-disc pl-5 space-y-2'>
							<li>Advanced security features</li>
							<li>Regular firmware updates</li>
							<li>Comprehensive documentation</li>
							<li>24/7 technical support</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
