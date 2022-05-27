import Image from 'next/image'
import Logo from '../assets/images/Logo.png'

export default function Branding(props) {
  return (

    <div className="branding">
      <style jsx>{`
        .logo { 
          display: inline-block;
          width: 100%;
          max-width: ${props.logoWidth + "px"}; 
          height: auto;
        }
      `}</style>
      <a href="/" className="logo">
        <Image layout="intrinsic" src={Logo} />
      </a>
      {props.children}
    </div>

  )
}