import { useEffect, useRef } from 'react';
import gsap, {TimelineMax} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Link} from 'react-router-dom'

import CharacterController from './character-controller';
import Form from './form'

function Home() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger); 
  }
    let fullblock = useRef(null)
  
    let block_dev = useRef(null)
    let block_mo = useRef(null)
    let block_des = useRef(null)
  
    let blogblock = useRef(null)
  
    let contactblock = useRef(null)
  
    useEffect(() => {
      let slides = gsap.utils.toArray(".section")
      
      let slide = new TimelineMax()
      slide
        .from("#section2", {yPercent: 100})
        .from("#section3", {yPercent: -100})
        .from("#section4", {xPercent: 100})
        .from("#section5", {yPercent: 100})
        .from("#section6", {yPercent: 100})
  
        let slide_anim = new gsap.timeline({
          duration: 1,
          scrollTrigger: {
              trigger: "#slide2",
              endTrigger: "#slide5",
              start: "top center",
              end: "+=6000",
              scrub: 1
          }
        })
  
        slide_anim
        .add("section1", 0)
        .add("section2", 10)
        .add("section3", 20)
        .add("section4", 30)
        .add("section5", 40)
        .add("section6", 50)
  
        ScrollTrigger.create({
          animation: slide,
          trigger: ".sections",
          start: "top top",
          end: "+=6000",
          scrub: 1,
          snap: 1 / (slides.length - 1),
          pin: true,
          anticipatePin: 1
        });
  
        slide_anim
          .to([fullblock, block_des, block_dev, block_mo], {duration: 5, position: "absolute", top: 0, translateY: -2000}, "section1")
          .to(fullblock, {duration: 5, translateY: 0}, "section2")
          .to(fullblock, {duration: 5, translateY: -2000}, "section3")
          .to(block_mo, {delay: 1, duration: 1, rotation: 15, translateX: 20, translateY: "34vh"}, "section3")
          .to(block_dev, {delay: 2, duration: 2, rotation: 28, translateX: -20, translateY: "41vh"}, "section3")
          .to(block_des, {delay: 3, duration: 3, rotation: -37, translateX: 40, translateY: "41vh"}, "section3")
          .to([block_des, block_dev, block_mo], {duration: 5, translateY: 2000}, "section4")
          .to(blogblock, {duration: 5, translateX: 1000}, "section5")
          .to(contactblock, {duration: 5, translateY: -1000}, "section6")
    }, [])
  
    return(
      <div className="sections">
          <CharacterController />
          <section className="section" id="section1">
            <div className="section-inner"></div>
          </section>
          <section className="section" id="section2">
            <div className="section-inner">
              <div ref={el => {fullblock = el}} className="w-full h-72 bg-purple-300 relative">b l o c k</div>
            </div>
          </section>
          <section className="section" id="section3">
            <div className="section-inner">
              <div ref={el => {block_des = el}} className="w-32 h-32 bg-purple-400 flex justify-center items-center text-center uppercase text-l">Design</div>
              <div ref={el => {block_dev = el}} className="w-32 h-32 bg-purple-400 flex justify-center items-center text-center uppercase text-l">Development</div>
              <div ref={el => {block_mo = el}} className="w-32 h-32 bg-purple-400 flex justify-center items-center text-center uppercase text-l">Motion</div>
            </div>
          </section>
          <section className="section" id="section4">
          <div className="section-inner">
            <div className="absolute right-0 w-2/5 h-1/4 bg-purple-300" ref={el => {blogblock = el}}>
              <Link to="/blog">Blogs</Link>
            </div>
          </div>
          </section>
          <section className="section" id="section5">
            <div className="section-inner">
              <div className="w-1/3 h-2/5 bg-purple-300 -mt-48" ref={el => {contactblock = el}}><Form /></div>
            </div>
          </section>
          <section className="section" id="section6">
          <div className="section-inner">
            <div className="w-full h-96 bg-purple-300 absolute bottom-0"></div>
          </div>
          </section>
        </div>
    )
  }

export default Home