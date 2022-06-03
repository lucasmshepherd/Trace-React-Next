import Image from 'next/image'
import Logo from '../assets/images/Logo.png'

export default function Branding(props) {
  if(props.social) {
    return (

      <div className="branding">
        {props.children}
      </div>
  
    )
  } else {
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
        `}</style>
        <a href="#top" className="logo">
          <Image layout="fixed" src={Logo} priority="true" />
        </a>
        {props.children}
      </div>
  
    )
  }

}