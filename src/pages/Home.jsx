import Carousel from '../components/Carousel'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features'
import FeaturedProducts from '../components/FeaturedProducts'
import PromoStrip from '../components/PromoStrip'
import Category from '../components/Category'

const Home = ({ addToCart }) => {
  return (
    <>
      <Carousel />
      <Category />
      <FeaturedProducts addToCart={addToCart} />
      <MidBanner />
      <PromoStrip />
      <Features />
    </>
  )
}

export default Home