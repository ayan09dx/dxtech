import BannerTexts from '../components/BannerTexts'
import Imageslider from '../components/Imageslider'
import BannerCards from '../components/BannerCards'
import Teams from '../components/Teams'
import CompanyDesc from '../components/CompanyDesc'
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonial'
export default function Home() {
  return (
    <div>
      <Imageslider/>
      <BannerTexts/>
      <BannerCards/>
      <CompanyDesc/>
      <Teams/>
      <Stats/>
      <Testimonial/>
    
    </div>
  )
}
