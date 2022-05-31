import Container from './container.js'
import Image from 'next/image'
import CyberArm from '../assets/images/cyber-arm.png'

export default function Block(props) {
  const id = props.id
  const anchor = "#" + id
  let arm, bg
  if(props.arm) {
    arm = <div className="cyber-arm"><Image src={CyberArm} layout="fixed" width="204" height="653" /></div>
  }
  if(props.darken) { bg = { backgroundColor: "#ebebeb" } }
  return (
    <>
      <a name={anchor}></a>
      <section id={id} className="content-block section-basic flex-row-50-50" style={bg}>
        <Container>
          {props.children}
          {arm}
        </Container>
      </section>
    </>
  )
}

export function Title(props) {
  let textSize
  const WrapTag = `${props.tag}`
  const textColor = { color: props.color }
  if(props.tag != props.size) { textSize = props.size }
  return (
    <>
      <WrapTag>
        <span className={textSize} style={textColor}>
          {props.children}
        </span>
      </WrapTag>
    </>
  )
}

export function Legend(props) {
  return (
    <>
      <span className="pretitle">
        {props.children}
      </span>
    </>
  )
}
