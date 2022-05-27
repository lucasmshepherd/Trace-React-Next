import Image from 'next/image'
import Logo from '../assets/images/Logo.png'

export default function Branding(props) {
  return (

    <div className="branding">
      <style>{`
        .logo img {
          width: ${props.logoWidth + "px"};
          height: auto;
        }
      `}</style>
      <style jsx>{`
        .logo { 
          display: inline-block;
        }
        .logo img {
          width: ${props.logoWidth + "px"}; 
          height: auto;
        }
      `}</style>
      <a href="/" className="logo">
        <Image layout="fixed" src={Logo} />
      </a>
      {props.children}
    </div>

  )
}