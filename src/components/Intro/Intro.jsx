import React from 'react'
import './Intro.css'
import Github from './../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
const Intro = () => {
  return (
   <div className="intro">
    <div className="i-left">
      <div className="i-name">
        <span>Hi! I'm </span>
        <span>Jonatan Di Vincenzo</span>
        <span>FullStack developer with high level of experience in web designing and development, productin the Quality work</span>
      </div>
      <button className="button i-button">Hire me!</button>
      <div className="i-icons">
        <img src={Github} alt="" />
        <img src={Linkedin} alt="" />
        <img src={Instagram} alt="" />
      </div>
    </div>
    <div className="i-right">
      iam right side
    </div>
   </div>
  )
}

export default Intro