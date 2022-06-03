import React, { useState } from 'react';
import Container from './container.js'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CyberArm from '../assets/images/cyber-arm.png'
import SkullWyrm from '../assets/images/Skull-Wyrm.png'
import Harpoon from '../assets/images/harpoon.png'
import DragonFrog from '../assets/images/dragon-frog.png'
import FloatingCityPng from '../assets/images/floatingcitypng.png'
import StaticPlanet from '../assets/images/Planet6.png'

export default function Block(props) {
  const id = props.id
  let arm, bg, city
  let pad = ""
  let styles = "content-block section-basic flex-row-50-50"
  if(props.vertical) { styles = "content-block section-basic" }
  if(props.default) { styles = "content-block section-basic flex-row-start" }
  if(props.wide) { styles = "content-block section-basic section-wide" }
  if(props.arm) {
    arm = <div className="cyber-arm">
            <Image src={CyberArm} layout="fixed" width="204" height="653" />
          </div>
  }
  if(props.wyrm) {
    arm = <div className="skull-wyrm">
            <Image src={SkullWyrm} layout="fixed" width="217" height="371" />
          </div>
  }
  if(props.harpoon) {
    arm = <div className="harpoon">
            <Image src={Harpoon} layout="fixed" width="254" height="338" />
          </div>
  }
  if(props.drog) {
    arm = <div className="dragon-frog">
            <Image src={DragonFrog} layout="fixed" width="956" height="348" />
          </div>
  }
  if(props.city) {
    city =  <>
              <picture className="floating-city">
                <source srcSet={process.env.PUBLIC_URL + '/images/floatingcity.webp'} type="image/webp" />
                <img src={FloatingCityPng.src} alt="logo" />
              </picture>
              <div className="static-planet">
                <Image src={StaticPlanet} layout="intrinsic" />
              </div>
            </>
  }
  if(props.darken) { bg = { backgroundColor: "#ebebeb" } }
  if(props.dark) { bg = { backgroundColor: "#0d1012", color: "#fff" } }
  if(props.buzzcut) { 
    pad = "no-top-padding"
  }
  if(props.tailcut) { 
    pad = "no-bottom-padding"
  }
  return (
    <>
      <section id={id} className={`${styles} ${pad}`} style={bg}>
        <a className="block-anchor" name={props.id}></a>
        <Container>
          {props.children}
          {arm}
        </Container>
        {city}
      </section>
    </>
  )
}

export function Title(props) {
  let textSize
  const title = props.children
  const Tag = props.tag
  const textColor = { color: props.color }
  if(props.tag != props.size) { textSize = props.size }
  return (
    <>
      <Tag style={textColor} className={textSize}>
        {title}
      </Tag>
    </>
  )
}

function WrapTitleTag(props) {
  return (
    <>
        {props.children}
    </>
  )
}

export function Legend(props) {
  let classes = "pretitle"
  if(props.light) {
    classes = "pretitle light"
  }
  return (
    <>
      <span className={classes}>
        {props.children}
      </span>
    </>
  )
}

export function Divider() {
  return (
    <>
      <hr className="divider" />
    </>
  )
}

export function BlockFeatures(props) {
  return (
    <>
      <div className="blocklist">
        {props.children}
      </div>
    </>
  )
}

export function BlockFeaturesItem(props) {
  return (
    <>
      <div className="blocklist-item">
        {props.children}
      </div>
    </>
  )
}

export function BlockFeaturesItemContent(props) {
  return (
    <>
      <div className="blocklist-item-content">
        {props.children}
      </div>
    </>
  )
}

export function BlockList(props) {
  return (
    <>
      <div className="blocklist-wide">
        {props.children}
      </div>
    </>
  )
}

export function BlockListItem(props) {
  return (
    <>
      <div className="blocklist-wide-item flex-row-start">
        {props.children}
      </div>
    </>
  )
}

export function Faq(props) {
  return (
    <>
      <div className="faq">
        {props.children}
      </div>
    </>
  )
}

export function FaqItem(props) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  return (
    <>
      <div 
        className={isActive ? 'openme faq-item' : 'faq-item'} 
        onClick={handleClick}
      >
        <FontAwesomeIcon icon="fa-solid fa-caret-right" />
        {props.children}
      </div>
    </>
  )
}

export function Planets(props) {
  return (
    <>
      <div className="planets">
        {props.children}
      </div>
    </>
  )
}

export function Planet(props) {
  return (
    <>
      <div className="planet-item">
        {props.children}
      </div>
    </>
  )
}