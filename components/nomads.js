import Image from 'next/image'
import StaticPlanet from '../assets/images/Planet6.png'

export default function Nomads(props) {
  return (
    <>
      <div className="nomads">
        {props.children}
      </div>
    </>
  )
}

export function NomadProfiles(props) {
  return (
    <>
      <div className="no-pro">
        {props.children}
      </div>
    </>
  )
}