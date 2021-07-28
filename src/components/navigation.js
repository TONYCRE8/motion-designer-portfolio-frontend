import React, {useRef, useState} from 'react'
import {NavLink} from 'react-router-dom'
import gsap from 'gsap'

import {RiMenuFill, RiInstagramFill, RiTwitterFill} from 'react-icons/ri'
import './extra.css'
import logo from '../components/logo.png'

function Navigation() {
    let [menuActive, setMenuActive] = useState(false)
    let navIcon = useRef(null)
    let navClose = useRef(null)
    let nav = useRef(null)
    let navContent = useRef(null)

    const menuToggle = () => {
        if(menuActive === false) {
            gsap.to(nav, {duration: 0, scaleX: 1})
            gsap.to(navIcon, {display: 'none'})
            gsap.fromTo([navContent, navClose], {duration: .6, opacity: 0, x: "+1500px"}, {x: 0, opacity: 1, display: 'block'})
            setMenuActive(!menuActive)
        }
        else {
            gsap.to(navIcon, {display: 'flex'})
            gsap.to([navContent, navClose], {duration: .4, opacity: 0, x: "+1500px"})
            gsap.to(nav, {delay: 0.6, duration: 0, scaleX: 0})
            setMenuActive(!menuActive)
        }
    }
    return (
        <>
        <div>
            <img src={logo} className="h-16 fixed top-2 left-2" alt="Logo for TONYCRE8" />
        </div>
        <div onClick={menuToggle} ref={el => {navIcon = el}} className="text-gray-800 z-50 fixed top-4 right-4 text-4xl cursor-pointer">
            <RiMenuFill/>
        </div>
        <div ref={el => {nav = el}} className={menuActive ? "active nav" : "nav"}>
            <div onClick={menuToggle} ref={el => {navClose = el}} className="hidden scroll-container bg-white z-50 cursor-pointer">
                <div className="scroll text-center md:text-9xl text-5xl font-inter-black text-gray-800 uppercase select-none" direction="right" scrollamount="30">close menu</div>
            </div>
            <div ref={el => {navContent = el}} className="nav-content bg-gray-800">
                <div className="nav-inner flex flex-row w-screen">
                    <div className="text-right flex-col flex w-full md:text-4xl text-2xl select-none">
                        <NavLink exact activeClassName="text-purple-300" className="font-inter-semibold text-white md:-mr-20 -mr-10 md:my-4 my-2 border-gray-400 border-b-2 border-opacity-0 md:hover:-mr-24 md:hover:border-opacity-100 transition-all duration-150" to="/" onClick={menuToggle}>Home</NavLink>
                        <NavLink activeClassName="text-purple-300" className="font-inter-semibold text-white md:-mr-12 -mr-6 md:my-4 my-2 border-gray-400 border-b-2 border-opacity-0 md:hover:-mr-16 md:hover:border-opacity-100 transition-all duration-150" to="/blog" onClick={menuToggle}>Blog</NavLink>
                        <NavLink activeClassName="text-purple-300" className="font-inter-semibold text-white md:-mr-6 -mr-2 md:my-4 my-2 border-gray-400 border-b-2 border-opacity-0 md:hover:-mr-10 md:hover:border-opacity-100 transition-all duration-150" to="/development" onClick={menuToggle}>Development</NavLink>
                        <NavLink activeClassName="text-purple-300" className="font-inter-semibold text-white  md:my-4 my-2 border-gray-400 border-b-2 border-opacity-0 md:hover:-mr-4 md:hover:border-opacity-100 transition-all duration-150" to="/design" onClick={menuToggle}>Design</NavLink>
                    </div>
                    <p className="text-purple-300 slash md:ml-20 select-none">/</p>
                    <p className="text-purple-300 md:text-4xl text-3xl mt-12 md:pr-0 pr-2 select-none">&gt;</p>
                </div>
                <div className="font-inter-mediumfont-inter-medium h-24 w-full flex justify-center center py-4">
                    <p className="text-white ">Built by @TONYCRE8</p>
                    <p className="text-white px-4">|</p>
                    <a className="text-white text-2xl pr-2" href="https://twitter.com/tonycre8"><RiTwitterFill /></a>
                    <a className="text-white text-2xl pr-2" href="https://instagram.com/tonycre8"><RiInstagramFill /></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navigation