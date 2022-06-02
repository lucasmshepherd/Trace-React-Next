import Container from '../container.js'
import Image from 'next/image'
import LogoLarge from '../../assets/images/Logo-Large.png'
import Punk from '../../assets/images/Banner-Punk.png'
import BannerBG from '../../assets/images/Banner-BG.jpg'

export default function Banner(props) {
  return (
    <>
      <style>{`
        .banner .container {
          min-height: ${props.height}px
        }
      `}  
      </style>
      <style jsx>{`
        .banner { 
          background-image: url(${BannerBG.src});
          background-size: cover;
          background-position: 50% 50%;
          background-repeat: no-repeat;
        }
      `}  
      </style>
      <section className="banner flex-row-fill-50-50 align-center">
        <Container>
          <div className="banner-logo flex-col-center">
            <Image src={LogoLarge} layout="intrinsic" />
          </div>
          <div className="banner-punk flex-col-end-center">
            <Image src={Punk} layout="intrinsic" />
          </div>
        </Container>
      </section>
    </>
  )
}
