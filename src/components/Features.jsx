import { Truck, ShieldCheck, RefreshCcw, Headphones } from 'lucide-react'

const features = [
    {icon: Truck, text: "Free Shipping", subtext: "On orders over $50"},
    {icon: ShieldCheck, text: "Secure Payment", subtext: "100% secure payment"},
    {icon: RefreshCcw, text: "Easy Returns", subtext: "30-day return policy"},
    {icon: Headphones, text: "24/7 Support", subtext: "We're here to help"},
]

const Features = () => {
  return (
    <div className='py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-white to-rose-50 border-t border-pink-100'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-pink-100 hover:shadow-md hover:border-pink-300 transition-all duration-300'>
                        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 flex-shrink-0'>
                            <feature.icon className='w-6 h-6 text-pink-500' />
                        </div>
                        <div>
                            <h3 className='font-bold text-[#5A2A55]'>{feature.text}</h3>
                            <p className='text-sm text-gray-400'>{feature.subtext}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features