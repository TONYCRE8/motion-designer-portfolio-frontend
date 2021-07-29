import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Link} from 'react-router-dom'

import CharacterController from '../components/character-controller';
import Form from '../components/contact/form'
import BlogLatest from '../components/blog/blog-latest';
import SEO from '../components/seo'

function Home() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger); 
    ScrollTrigger.config({syncInterval: 999999999});
  }
    let fullblock = useRef(null)

    let block_dev = useRef(null)
    // let block_mo = useRef(null)
    let block_des = useRef(null)

    let blogblock = useRef(null)
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
        .add("section3", 18.2)
        .add("section4", 29.1)
        .add("section5", 40)

        slide_anim
          .to([fullblock, block_des, block_dev/* , block_mo */], {duration: 5, position: "absolute", top: 0, translateY: -2000}, "section1")
          .to(fullblock, {duration: 5, translateY: 0}, "section2")
          .to(fullblock, {duration: 5, translateY: -2000}, "section3")
          //.to(block_mo, {delay: 1, duration: 1, rotation: 15, translateX: 10, translateY: "31vh"}, "section3")
          .to(block_dev, {delay: 2, duration: 2, rotation: -58, translateX: -30, translateY: "41vh"}, "section3")
          .to(block_des, {delay: 3, duration: 3, rotation: 38, translateX: 40, translateY: "41vh"}, "section3")
          .to([block_des, block_dev/* ,  block_mo */], {duration: 5, translateY: 2000}, "section4")
          .to(blogblock, {duration: 5, translateX: 1000}, "section5")
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
              <div ref={el => {fullblock = el}} className="w-full md:h-72 h-44 bg-purple-200 relative flex justify-center items-center">
                  <p className="uppercase font-inter-extrabold text-4xl">Motion Designer</p>
              </div>
            </div>
          </section>
          <section className="section" id="section3">
            <div className="section-inner">
              <Link ref={el => {block_des = el}} to="/design">
                <div className="md:w-32 md:h-32 w-24 h-24 bg-purple-200 flex justify-end text-left uppercase text-l">
                  <p className="md:mr-4 md:mt-4 mr-1 mt-1 font-inter-extrabold">Design</p>
                </div>
              </Link>
              <Link ref={el => {block_dev = el}} to="/development">
                <div className="md:w-32 md:h-32 w-24 h-24 bg-purple-200 flex justify-start text-left uppercase text-l">
                  <p className="md:ml-4 md:mt-4 ml-1 mt-1 font-inter-extrabold">Develop- ment</p>
                </div>
              </Link>
              {/* <div ref={el => {block_mo = el}} className="w-32 h-32 bg-purple-200 flex justify-start text-left uppercase text-l">
                <p className="ml-4 mt-4 font-inter-extrabold">Motion</p>
              </div> */}
            </div>
          </section>
          <section className="section" id="section4">
          <div className="section-inner">
            <div className="absolute right-0 md:w-2/5 md:h-1/4 bg-purple-200" ref={el => {blogblock = el}}>
              <h2 className="font-inter-medium text-lg -mt-6 md:text-left text-center">Latest Blog article!</h2>
              <BlogLatest />
            </div>
          </div>
          </section>
          <section className="section" id="section5">
            <div className="section-inner">
              <div className="md:w-1/3 w-5/6 md:max-w-md h-42 bg-gray-800 md:-mt-24 mt-36"><Form /></div>
            </div>
          </section>
      </div>
    )
  }

export default Home