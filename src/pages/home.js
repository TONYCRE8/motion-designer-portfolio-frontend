import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap, {TimelineLite} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Link} from 'react-router-dom'

import CharacterController from '../components/character-controller';
import Form from '../components/contact/form'
import BlogLatest from '../components/blog/blog-latest';
import SEO from '../components/seo'

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
    // That's the one

    useLayoutEffect(() => {
      let slides = gsap.utils.toArray(".section")
      const slide = gsap.timeline()
      slide
        .from("#section2", {yPercent: 100})
        .from("#section3", {yPercent: -100})
        .from("#section4", {xPercent: 100})
        .from("#section5", {yPercent: 100})
        //.from("#section6", {yPercent: 100})

        const scrollTrigger = ScrollTrigger.create({
          animation: slide,
          trigger: ".sections",
          start: "top top",
          end: "+=5000",
          scrub: 1,
          snap: 1 / (slides.length - 1),
          pin: true,
          anticipatePin: 1
        });
        let slide_anim = new gsap.timeline({
          duration: 1,
          scrollTrigger: {
              trigger: "#slide2",
              endTrigger: "#slide4",
              start: "top center",
              end: "+=5000",
              scrub: 1
          }
        })
  
        slide_anim
        .add("section1", 0)
        .add("section2", 10)
        .add("section3", 20)
        .add("section4", 30)
        .add("section5", 40)
        //.add("section6", 50)
  
        slide_anim
          .to([fullblock, block_des, block_dev, block_mo], {duration: 5, position: "absolute", top: 0, translateY: -2000}, "section1")
          .to(fullblock, {duration: 5, translateY: 0}, "section2")
          .to(fullblock, {duration: 5, translateY: -2000}, "section3")
          .to(block_mo, {delay: 1, duration: 1, rotation: 15, translateX: 10, translateY: "31vh"}, "section3")
          .to(block_dev, {delay: 2, duration: 2, rotation: -58, translateX: -30, translateY: "41vh"}, "section3")
          .to(block_des, {delay: 3, duration: 3, rotation: 38, translateX: 40, translateY: "41vh"}, "section3")
          .to([block_des, block_dev, block_mo], {duration: 5, translateY: 2000}, "section4")
          .to(blogblock, {duration: 5, translateX: 1000}, "section5")
          //.to(contactblock, {duration: 5, translateY: -1000}, "section6")
        return () => {
          scrollTrigger.kill()
          slide_anim.kill()
          slide.kill()
        }
    }, [])
  
    return(
      <div className="sections">
          <SEO
            title="Home page"
            description="The home page for Tony Ingall's digital portfolio website."
            pathSlug=""
          />
          <CharacterController />
          <section className="section" id="section1">
            <div className="section-inner">
              
            </div>
          </section>
          <section className="section" id="section2">
            <div className="section-inner">
              <div ref={el => {fullblock = el}} className="w-full h-72 bg-purple-200 relative flex justify-center items-center">
                  <p className="uppercase font-inter-extrabold text-4xl">Motion Designer</p>
              </div>
            </div>
          </section>
          <section className="section" id="section3">
            <div className="section-inner">
              <Link ref={el => {block_des = el}} to="/design">
                <div className="w-32 h-32 bg-purple-200 flex justify-end text-left uppercase text-l">
                  <p className="mr-4 mt-4 font-inter-extrabold">Design</p>
                </div>
              </Link>
              <Link ref={el => {block_dev = el}} to="/development">
                <div className="w-32 h-32 bg-purple-200 flex justify-start text-left uppercase text-l">
                  <p className="ml-4 mt-4 font-inter-extrabold">Develop- ment</p>
                </div>
              </Link>
              <div ref={el => {block_mo = el}} className="w-32 h-32 bg-purple-200 flex justify-start text-left uppercase text-l">
                <p className="ml-4 mt-4 font-inter-extrabold">Motion</p>
              </div>
            </div>
          </section>
          <section className="section" id="section4">
          <div className="section-inner">
            <div className="absolute right-0 w-2/5 h-1/4 bg-purple-200" ref={el => {blogblock = el}}>
              <h2 className="font-inter-medium text-lg -mt-6">Latest Blog article!</h2>
              <BlogLatest />
            </div>
          </div>
          </section>
          <section className="section" id="section5">
            <div className="section-inner">
              <div className="w-1/3 max-w-md h-42 bg-gray-800 -mt-24" ref={el => {contactblock = el}}><Form /></div>
            </div>
          </section>
      </div>
    )
  }

export default Home

/**
 * <section className="section" id="section6">
          <div className="section-inner">
            <div className="flex w-full absolute bottom-0 flex-row border-purple-200 border-t-8 border-b-8">
              <div className="w-full bg-purple-200 z-0 text-gray-700">
                <p>That's it for now! Did you get all that?</p>
                <p>If not, here's a very helpful sitemap to get you round the whole place!</p>
                <ul className="flex flex-col">
                  <Link to="/design-projects">Design Projects</Link>
                  <Link to="/development-projects">Development Projects</Link>
                  <Link to="/blog">Blog articles</Link>
                </ul>
              </div>
              <svg stroke-width="0.501" stroke-linejoin="bevel" fill-rule="evenodd" version="1.1" className="z-10" overflow="visible" width="416.69px" height="416.69px" viewBox="0 0 416.69 416.69">
              <g id="Document" fill="none" transform="scale(0.7 -0.7)">
                <g id="Spread" transform="translate(0 -595.277)">
                <g id="Layer 1">
                  <path d="M 0,0 L 0,595.277 L 595.277,595.277 L 595.277,0 L 0,0 Z M 496.208,75.864 C 618.627,185.474 629.022,373.79 519.412,496.209 C 409.802,618.628 221.487,629.024 99.068,519.414 C -23.351,409.804 -33.746,221.488 75.864,99.069 C 185.474,-23.35 373.789,-33.746 496.208,75.864 Z" fill="#DDD6FE" stroke="none" stroke-width="0.5" stroke-linejoin="miter" stroke-linecap="round" marker-start="none" marker-end="none" stroke-miterlimit="79.8403193612775"/>
                </g>
                </g>
              </g>
              </svg>
            </div>
          </div>
          </section>
 */