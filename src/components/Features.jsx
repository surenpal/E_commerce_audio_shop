import React from 'react'
import { Truck, ShieldCheck, RefreshCcw, Headphones } from 'lucide-react'

const features = [
    {icon: Truck, text: "Free Shipping", subtext: "On orders over $50"},
    {icon: ShieldCheck, text: "Secure Payment", subtext: "100% secure payment"},
    {icon: RefreshCcw, text: "Easy Returns", subtext: "30-day return policy"},
    {icon: Headphones, text: "24/7 Support", subtext: "We're here to help"},
]

const Features = () => {
  return (
    <div className='py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                {features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-4'>
                        <feature.icon className='w-8 h-8 text-gray-500' />  
                        <div>
                            <h3 className='font-semibold text-gray-900'>{feature.text}</h3>
                            <p className='text-sm text-gray-500'>{feature.subtext}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features