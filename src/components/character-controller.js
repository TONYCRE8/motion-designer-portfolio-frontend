import React, {useRef, useLayoutEffect} from 'react'
import gsap, {TimelineLite, Power1} from 'gsap'
import './../main.css'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

function CharacterController() {

    // Character object
    let character = useRef(null)
    let shadow = useRef(null)

    // Head group
    let GRP_head = useRef(null)
    
    // Eye states
    let OBJ_eyesOpen = useRef(null)
    let OBJ_eyesHappy = useRef(null)
    let OBJ_eyesClosed = useRef(null)

    // Mouth states
    let OBJ_mouthSmile = useRef(null)
    let OBJ_mouthWorry = useRef(null)
    let OBJ_mouthOpen = useRef(null)
    let OBJ_mouthTeeth = useRef(null)

    // Torso group
    let GRP_torso = useRef(null)

    // Right arm
    let GRP_armRight = useRef(null)
    let OBJ_forearmRight = useRef(null)
    let OBJ_handRight = useRef(null)
    
    // Left arm
    let GRP_armLeft = useRef(null)
    let OBJ_forearmLeft = useRef(null)
    let OBJ_handLeft = useRef(null)

    // Right leg

    let GRP_legRight = useRef(null)
    let OBJ_lowerLegRight = useRef(null)
    let OBJ_shoeRight = useRef(null)
    let OBJ_footRight = useRef(null)

    // Left leg

    let GRP_legLeft = useRef(null)
    let OBJ_lowerLegLeft = useRef(null)
    let OBJ_shoeLeft = useRef(null)
    let OBJ_footLeft = useRef(null)

    // Animation hellfire

    var wave = new TimelineLite({delay: .5, duration: .3, repeat: -1, yoyo: true})
    /* const blink = () => {
        var blink = new TimelineLite({repeat: -1});
        blink
        .to(OBJ_eyesOpen,  {duration: 3, visibility: "visible"}, 0)
        .to(OBJ_eyesOpen, {duration: .1, delay: 3, visibility: "hidden"}, 0)
        .to(OBJ_eyesClosed, {duration: .1, delay: 3, visibility: "visible"}, 0)
        .to(OBJ_eyesOpen, {delay: 3.1, visibility: "visible"}, 0)
        .to(OBJ_eyesClosed, {delay: 3.1, visibility: "hidden"}, 0)
    }
    const waveAnimation = () => {
        gsap.to(GRP_armRight, {rotation: 10, transformOrigin: "0% center", delay: .3, duration: .4})
        
        wave.to(OBJ_forearmRight, {rotation: -70, transformOrigin: "50% left"}, 0)
    } */

    useLayoutEffect(() => {
        var characterAnim = gsap.timeline({
            duration: 1,
            scrollTrigger: {
                trigger: "#section1",
                endTrigger: "#section5",
                start: "top top",
                end: "+=5000",
                scrub: 1
            }
        })
        ScrollTrigger.defaults({
            ease: Power1.in
        })
        characterAnim
            .add("slide2", 0)
            .add("slide2exit", 10.9)
            .add("slide3", 13)
            .add("slide3exit", 20)
            .add("slide4", 22)
            .add("slide4exit", 28.2)
            .add("slide5", 30)
            .add("slide5exit", 38.2)
            //.add("slide6", 40)

        // remove all unessential object visibility
        gsap.to([OBJ_eyesClosed, OBJ_eyesHappy, OBJ_mouthOpen, OBJ_mouthTeeth, OBJ_mouthWorry], {duration: 0, css: {visibility: "hidden"}})
        // move character into frame, offset on object should allow for use to animate this easily
        gsap.to(character, {x: 0, duration: 1})
        gsap.to(GRP_armLeft, {rotation: -80, transformOrigin: "100% center", duration: 0})
        gsap.to(GRP_armRight, {rotation: 80, transformOrigin: "0% center", duration: 0})
        //waveAnimation()
        
        characterAnim

            // Slide 1 (Waving)


            // Slide 2
                // Right leg
                .to(character, {translateY: "+=40", duration: 5}, "slide2")
                .to(shadow, {translateY: "-=40", duration: 5}, "slide2")
                .to(GRP_legRight, {duration: 5, transformOrigin: "0% left", rotation: 5}, "slide2")
                .to(OBJ_lowerLegRight, {duration: 5, transformOrigin: "31% top", rotation: -40}, "slide2")
                // Foot direction flip (annoyingly complicated)
                .to(OBJ_shoeRight, {duration: .01, scaleX: -1, scaleY: 1, translateX: -75, translateY: 0, transformOrigin: "69% center"}, "slide2")
                .to(OBJ_footRight, {duration: .01, rotation: -35, transformOrigin: "0% left"}, "slide2")

                // Left leg
                .to(GRP_legLeft, {duration: 5, transformOrigin: "0% right", rotation: -5}, "slide2")
                .to(OBJ_lowerLegLeft, {duration: 5, transformOrigin: "67% top", rotation: 40}, "slide2")
                // Foot direction flip (annoyingly complicated)
                .to(OBJ_shoeLeft, {duration: .01, scaleX: -1, scaleY: 1, translateX: -75, translateY: 0, transformOrigin: "129% center"}, "slide2")
                .to(OBJ_footLeft, {duration: .01, rotation: 35, transformOrigin: "0% right"}, "slide2")
                // Arm Right move
                .to(GRP_armRight, {duration: 5, rotation: -40, transformOrigin: "0% center"}, "slide2")
                .to(OBJ_forearmRight, {duration: 5, rotation: -60, transformOrigin: "50% left"}, "slide2")
                // Arm Left move
                .to(GRP_armLeft, {duration: 5, rotation: 40, transformOrigin: "100% center"}, "slide2")
                .to(OBJ_forearmLeft, {duration: 5, rotation: 60, transformOrigin: "50% right"}, "slide2")
                // Expression change
                .to(OBJ_eyesOpen, {visibility: "hidden"}, "slide2")
                .to(OBJ_eyesClosed, {visibility: "visible"}, "slide2")
                .to(OBJ_mouthSmile, {visibility: "hidden"}, "slide2")
                .to(OBJ_mouthWorry, {visibility: "visible"}, "slide2")

                // Exit

                .to(character, {translateY: "-=40", duration: .5}, "slide2exit")
                .to(shadow, {translateY: "+=40", duration: .5}, "slide2exit")
                    // Right leg
                .to(GRP_legRight, {duration: .5, transformOrigin: "0% left", rotation: 0}, "slide2exit")
                .to(OBJ_lowerLegRight, {duration: .5, transformOrigin: "72% top", rotation: 0}, "slide2exit")
                .to(OBJ_shoeRight, {duration: .01, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, transformOrigin: "61% center"}, "slide2exit")
                .to(OBJ_footRight, {duration: .01, rotation: -0, transformOrigin: "0% left"}, "slide2exit")
                    // Left leg
                .to(GRP_legLeft, {duration: .5, transformOrigin: "0% right", rotation: 0}, "slide2exit")
                .to(OBJ_lowerLegLeft, {duration: .5, transformOrigin: "27% top", rotation: 0}, "slide2exit")
                .to(OBJ_shoeLeft, {duration: .01, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, transformOrigin: "126% center"}, "slide2exit")
                .to(OBJ_footLeft, {duration: .01, rotation:  0, transformOrigin: "0% right"}, "slide2exit")
                    // Right arm
                .to(GRP_armRight, {rotation: -85, translateX: "+=5.5", translateY: "-=5.5", transformOrigin: "0% bottom"}, "slide2exit")
                .to(OBJ_forearmRight, {rotation: 0, transformOrigin: "50% left"}, "slide2exit")
                    // Left arm
                .to(GRP_armLeft, {duration: .5, rotation: 85, translateX: "-=5.5", translateY: "-=5.5", transformOrigin: "100% bottom"}, "slide2exit")
                .to(OBJ_forearmLeft, {duration: .5, rotation: 0, transformOrigin: "50% right"}, "slide2exit")


            // Slide 3
                .to(character, {translateY: "+=60", duration: .5}, "slide3")
                .to(shadow, {translateY: "-=60", duration: .5}, "slide3")
                    // Right leg
                .to(GRP_legRight, {duration: 5, transformOrigin: "0% left", rotation: -40}, "slide3")
                .to(OBJ_lowerLegRight, {duration: 5, transformOrigin: "30% top", rotation: 60}, "slide3")
                .to(OBJ_shoeRight, {duration: 5, transformOrigin: "-10% center", translateX: "+=15", rotation: -20}, "slide3")
                    // Left leg
                .to(GRP_legLeft, {duration: 5, transformOrigin: "0% right", rotation: 40}, "slide3")
                .to(OBJ_lowerLegLeft, {duration: 5, transformOrigin: "70% top", rotation: -60}, "slide3")
                .to(OBJ_shoeLeft, {duration: 5, transformOrigin: "110% center", translateX: "-=15", rotation: 20}, "slide3")
                    // Right arm
                .to(GRP_armRight, {duration: 5, transformOrigin: "0% center", translateX: "+=1.5", translateY: "-=5.5", rotation: 40}, "slide3")
                .to(OBJ_forearmRight, {duration: 5, transformOrigin: "50% left", rotation: 100}, "slide3")
                    // Left arm
                .to(GRP_armLeft, {duration: 5, transformOrigin: "100% center", translateY: "-=5.5", rotation: -50}, "slide3")
                .to(OBJ_forearmLeft, {duration: 5, transformOrigin: "50% right", rotation: -100}, "slide3")
                
                // Exit
                .to(character, {translateY: "-=60", duration: .5}, "slide3exit")
                .to(shadow, {translateY: "+=1000", duration: .5}, "slide3exit")
                    // Right leg
                .to(GRP_legRight, {duration: .5, transformOrigin: "100% top", translateX: "+=16", rotation: 0}, "slide3exit")
                .to(OBJ_lowerLegRight, {duration: .5, transformOrigin: "24% top", rotation: 0}, "slide3exit")
                .to(OBJ_shoeRight, {duration: .5, transformOrigin: "-10% center", translateX: "-=15", rotation: 0}, "slide3exit")
                    // Left leg
                .to(GRP_legLeft, {duration: .5, transformOrigin: "0% top", translateX: "-=16", rotation: 0}, "slide3exit")
                .to(OBJ_lowerLegLeft, {duration: .5, transformOrigin: "76% top", rotation: 0}, "slide3exit")
                .to(OBJ_shoeLeft, {duration: .5, transformOrigin: "110% center", translateX: "+=15", rotation: 0}, "slide3exit")
                    // Right Arm
                .to(GRP_armRight, {duration: .5, transformOrigin: "0% center", translateY: "+=10.5", translateX: "+=10.5", rotation: 30}, "slide3exit")
                .to(OBJ_forearmRight, {duration: .5, transformOrigin: "50% left", rotation: 20}, "slide3exit")
                    // left Arm
                .to(GRP_armLeft, {duration: .5, transformOrigin: "100% center", translateY: "+=19.5", translateX: "-=19.5", rotation: -30}, "slide3exit")
                .to(OBJ_forearmLeft, {duration: .5, transformOrigin: "50% right", rotation: -20}, "slide3exit")


            // Slide 4
                .to(character, {translateX: "-=50%", duration: .5}, "slide4")
                    // Right leg
                .to(GRP_legRight, {duration: 5, transformOrigin: "100% top", translateX: "-=15.5", translateY: "-=15.5", rotation: -50}, "slide4")
                .to(OBJ_lowerLegRight, {duration: 5, transformOrigin: "30% top", rotation: 110}, "slide4")
                .to(OBJ_footRight, {duration: 5, transformOrigin: "0% center", translateY: "-=20.5", rotation: 20}, "slide4")  
                    // left leg
                .to(GRP_legLeft, {duration: 5, transformOrigin: "0% top", rotation: 10}, "slide4")
                .to(OBJ_lowerLegLeft, {duration: 5, transformOrigin: "30% top", rotation: -15}, "slide4")
                .to(OBJ_shoeLeft, {duration: 5, transformOrigin: "100% center", translateX: "+=8", translateY: "-=12.5", rotation: -20}, "slide4")
                .to(OBJ_footLeft, {duration: 5, transformOrigin: "50% center", translateX: "+=5.5", rotation: -30}, "slide4")

                // Exit
                .to(character, {translateX: "-=0", duration: .5}, "slide4exit")
            // Slide 5
                .to(character, {translateX: "+=50%", duration: .5}, "slide5")
            
                    // Right leg
                .to(GRP_legRight, {duration: 5, transformOrigin: "100% top", translateX: "+=5.5", rotation: 0}, "slide5")
                .to(OBJ_lowerLegRight, {duration: 5, transformOrigin: "30% top", rotation: 10}, "slide5")
                    // Right arm
                .to(GRP_armRight, {duration: 5, transformOrigin: "0% top", translateX: "-=21.5", translateY: "+=15.5", rotation: -60}, "slide5")
                .to(OBJ_forearmRight, {duration: 5, transformOrigin: "50% left", rotation: -20}, "slide5")
                    // Left arm
                .to(GRP_armLeft, {duration: 5, transformOrigin: "100% top", translateX: "+=21.5", translateY: "+=10.5", rotation: 60}, "slide5")
                .to(OBJ_forearmLeft, {duration: 5, transformOrigin: "50% right", rotation: 20}, "slide5")
                // Exit
                .to(character, {translateY: "+=0", duration: .5}, "slide5exit")
            // Slide 6
                //.to(character, {translateY: "-=800", translateX: "+=50%", duration: 5}, "slide6")
                // Left arm
                //.to(GRP_armLeft, {duration: 5, transformOrigin: "100% center", translateX: "-=24.5", translateY: "-=15.5", rotation: -30}, "slide6")
                // Expression change
                //.to(OBJ_eyesOpen, {visibility: "visible"}, "slide6")
                //.to(OBJ_eyesClosed, {visibility: "hidden"}, "slide6")
                //.to(OBJ_mouthTeeth, {visibility: "visible"}, "slide6")
                //.to(OBJ_mouthWorry, {visibility: "hidden"}, "slide6")
        return () => {
            //gsap.kill()
            characterAnim.pause()
        }
    }, [character])

    return (
            <div style={{width: "592px", height: "780px", position: "relative", left: "50%", right: "50%", transform: "translate(-50%, -50%)", marginTop: "50vh"}}>
                <svg className="character" ref={el => {character = el}} xmlns="http://www.w3.org/2000/svg" width="592" height="840" viewBox="0 0 592 840" style={{overflow: "hidden", zIndex: "-1", pointerEvents: "none"}}>
                <ellipse ref={el => {shadow = el}} id="shadow" data-name="shadow" cx="25" cy="25" rx="150" ry="25" transform="translate(266 760)" fill="rgba(33,33,33,0.5)"/>
                <g id="LowerBody" transform="translate(-4 -12)">
                        <rect id="Pelvis" width="145" height="40" transform="translate(228 380)" fill="#757c98"/>
                        <g ref={el => {GRP_legRight = el}} id="LegRight">
                            <g ref={el => {OBJ_lowerLegRight = el}} id="LowerLegRightParent">
                                <g ref={el => {OBJ_shoeRight = el}} id="ShoeRight">
                                    <g id="AnkleRight">
                                        <rect id="Ankle-2" data-name="Ankle" width="30" height="30" transform="translate(333 720)" fill="#343434"/>
                                        <g id="Eyelet1" transform="translate(357 726)" fill="#fff" stroke="#707070" strokeWidth="1">
                                        <circle cx="2" cy="2" r="2" stroke="none"/>
                                        <circle cx="2" cy="2" r="1.5" fill="none"/>
                                        </g>
                                        <g id="Eyelet2" transform="translate(357 732)" fill="#fff" stroke="#707070" strokeWidth="1">
                                        <circle cx="2" cy="2" r="2" stroke="none"/>
                                        <circle cx="2" cy="2" r="1.5" fill="none"/>
                                        </g>
                                        <g id="Eyelet3" transform="translate(357 738)" fill="#fff" stroke="#707070" strokeWidth="1">
                                        <circle cx="2" cy="2" r="2" stroke="none"/>
                                        <circle cx="2" cy="2" r="1.5" fill="none"/>
                                        </g>
                                        <g id="Eyelet4" transform="translate(357 744)" fill="#fff" stroke="#707070" strokeWidth="1">
                                        <circle cx="2" cy="2" r="2" stroke="none"/>
                                        <circle cx="2" cy="2" r="1.5" fill="none"/>
                                        </g>
                                    </g>
                                    <g ref={el => {OBJ_footRight = el}} id="FootRight">
                                        <path id="Foot-2" data-name="Foot" d="M0,0H60A15,15,0,0,1,75,15V30a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(333 750)" fill="#343434"/>
                                        <rect id="Sole" width="75" height="10" transform="translate(333 780)" fill="#6c561b"/>
                                    </g>
                                </g>
                                <g id="LowerLegRight">
                                    <rect id="ShinRight" data-name="Shin" width="50" height="150" transform="translate(323 570)" fill="#757c98"/>
                                    <rect id="Cuff1" data-name="Rectangle 2" width="54" height="10" transform="translate(321 710)" fill="#bfdcea"/>
                                </g>
                            </g>
                            <g id="UpperLegRight">
                                <circle id="Knee" cx="25" cy="25" r="25" transform="translate(323 545)" fill="#757c98"/>
                                <rect id="Thigh" width="50" height="160" transform="translate(323 410)" fill="#757c98"/>
                            </g>
                        </g>
                        <g ref={el => {GRP_legLeft = el}} id="LegLeft">
                            <g  ref={el => {OBJ_lowerLegLeft = el}} id="LowerLegLeftParent">
                                <g  ref={el => {OBJ_shoeLeft = el}} id="ShoeLeft">
                                    <g id="AnkleLeft" data-name="Ankle">
                                        <rect id="Ankle-4" data-name="Ankle" width="30" height="30" transform="translate(239 720)" fill="#343434"/>
                                        <g id="Eyelet1-2" data-name="Eyelet1" transform="translate(241 726)" fill="#fff" stroke="#707070" strokeWidth="1">
                                        <circle cx="2" cy="2" r="2" stroke="none"/>
                                        <circle cx="2" cy="2" r="1.5" fill="none"/>
                                        </g>
                                        <g id="Eyelet2-2" data-name="Eyelet2" transform="translate(241 732)" fill="#fff" stroke="#707070" strokeWidth="1">
                                        <circle cx="2" cy="2" r="2" stroke="none"/>
                                        <circle cx="2" cy="2" r="1.5" fill="none"/>
                                        </g>
                                        <g id="Eyelet3-2" data-name="Eyelet3" transform="translate(241 738)" fill="#fff" stroke="#707070" strokeWidth="1">
                                        <circle cx="2" cy="2" r="2" stroke="none"/>
                                        <circle cx="2" cy="2" r="1.5" fill="none"/>
                                        </g>
                                        <g id="Eyelet4-2" data-name="Eyelet4" transform="translate(241 744)" fill="#fff" stroke="#707070" strokeWidth="1">
                                        <circle cx="2" cy="2" r="2" stroke="none"/>
                                        <circle cx="2" cy="2" r="1.5" fill="none"/>
                                        </g>
                                    </g>
                                    <g ref={el => {OBJ_footLeft = el}} id="FootLeft" data-name="Foot">
                                        <path id="Foot-4" data-name="Foot" d="M15,0H75a0,0,0,0,1,0,0V30a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V15A15,15,0,0,1,15,0Z" transform="translate(194 750)" fill="#343434"/>
                                        <rect id="Sole-2" data-name="Sole" width="75" height="10" transform="translate(194 780)" fill="#6c561b"/>
                                    </g>
                                </g>
                                <g id="LowerLegLeft" data-name="Shin">
                                <rect id="Shin-4" data-name="Shin" width="50" height="150" transform="translate(228 570)" fill="#757c98"/>
                                <rect id="Cuff" width="54" height="10" transform="translate(226 710)" fill="#bfdcea"/>
                                </g>
                            </g>
                            <g id="upperLegLeft">
                                <circle id="Knee-2" data-name="Knee" cx="25" cy="25" r="25" transform="translate(228 545)" fill="#757c98"/>
                                <rect id="Thigh-2" data-name="Thigh" width="50" height="160" transform="translate(228 410)" fill="#757c98"/>
                            </g>
                        </g>
                    </g>
                    <g id="UpperBody" transform="translate(79 -10)">
                        <g id="Torso" ref={GRP_torso}>
                            <path id="Chest" d="M15,0H130a15,15,0,0,1,15,15V155a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V15A15,15,0,0,1,15,0Z" transform="translate(145 224)" fill="#fdfbf4"/>
                            <path id="Rollneck" d="M5,0H35a5,5,0,0,1,5,5V25a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z" transform="translate(197 199)" fill="#fdfbf4"/>
                            <path id="ShoulderLeft" d="M16.5,0A16.5,16.5,0,1,1,0,16.5,16.5,16.5,0,0,1,16.5,0Z" transform="translate(137 224)" fill="#fdfbf4"/>
                            <path id="ShoulderRIght" d="M16.5,0A16.5,16.5,0,1,1,0,16.5,16.5,16.5,0,0,1,16.5,0Z" transform="translate(264 224)" fill="#fdfbf4"/>
                        </g>
                        <g id="ArmRight" ref={el => {GRP_armRight = el}} transform="translate(-83 -1)">
                            <path id="ElbowRight" d="M16.5,0A16.5,16.5,0,1,1,0,16.5,16.5,16.5,0,0,1,16.5,0Z" transform="translate(447 225)" fill="#fdfbf4"/>
                            <rect id="UpperArmRight" data-name="ArmRight" width="100" height="33" transform="translate(363 225)" fill="#fdfbf4"/>
                            <g ref={el => {OBJ_forearmRight = el}}>
                                <path id="ForearmRight" d="M0,0H95a5,5,0,0,1,5,5V28a5,5,0,0,1-5,5H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(463 225)" fill="#fdfbf4"/>
                                <rect ref={el => {OBJ_handRight = el}} id="HandRight" width="33" height="33" rx="5" transform="translate(563 225)" fill="#fbede4"/>
                            </g>
                        </g>
                        <g id="ArmLeft" ref={el => {GRP_armLeft = el}} transform="translate(-83 -1)">
                            <rect id="UpperArmRight" data-name="ArmLeft" width="100" height="33" transform="translate(137 225)" fill="#fdfbf4"/>
                            <path id="ElbowLeft" d="M16.5,0A16.5,16.5,0,1,1,0,16.5,16.5,16.5,0,0,1,16.5,0Z" transform="translate(121 225)" fill="#fdfbf4"/>
                            <g ref={el => {OBJ_forearmLeft = el}}>
                            <path id="ForearmLeft" d="M0,0H95a5,5,0,0,1,5,5V28a5,5,0,0,1-5,5H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(137 258) rotate(180)" fill="#fdfbf4"/>
                                <rect ref={el => {OBJ_handLeft = el}} id="HandLeft" data-name="Hand" width="33" height="33" rx="5" transform="translate(4 225)" fill="#fbede4"/>
                            </g>
                        </g>
                        <g id="Head" ref={el => {GRP_head = el}}>
                            <rect id="Neck" width="30" height="14" transform="translate(202 185)" fill="#fbede4"/>
                            <path id="Head-2" data-name="Head" d="M0,0H140a0,0,0,0,1,0,0V100a60,60,0,0,1-60,60H60A60,60,0,0,1,0,100V0A0,0,0,0,1,0,0Z" transform="translate(147 27)" fill="#fbede4"/>
                            <rect id="Ears" width="160" height="30" rx="15" transform="translate(137 100)" fill="#fbede4"/>
                            <g id="Mouths">
                                <path ref={el => {OBJ_mouthSmile = el}} id="Smile" d="M204.671,162.554,218.1,175.982l13.428-13.428" transform="translate(-1.1 -2)" fill="none" stroke="#707070" strokeWidth="3"/>
                                <path ref={el => {OBJ_mouthWorry = el}} id="Worry" d="M140.625,169.456l6.714,13.428,6.714-13.428,6.714,13.428,6.714-13.428" transform="translate(62.946 -5.902)" fill="none" stroke="#707070" strokeWidth="3"/>
                                <path ref={el => {OBJ_mouthOpen = el}} id="Open" d="M208.243,173.982l13.724-13.724,13.724,13.724H208.243Z" transform="translate(-4.967)" fill="#c49292" stroke="#707070" strokeWidth="2"/>
                                <path ref={el => {OBJ_mouthTeeth = el}} id="Teeth" d="M140.566,161.8h26.857l-5.656,13.428H146.222Z" transform="translate(63.006 -1.248)" fill="#fff" stroke="#707070" strokeWidth="3"/>
                            </g>
                            <rect id="Nose" width="24" height="40" transform="translate(205 107)" fill="#efb1b1"/>
                            <g id="Eyes">
                                <g id="EyesOpen" ref={el => {OBJ_eyesOpen = el}}>
                                    <g id="EyeLeft" transform="translate(-83 -1)">
                                    <path id="EyeWhites" d="M111.3,137.788l-9.249-14.682,9.249-15.318h15.671l5.08,5.809-2.194,16.578Z" transform="translate(143 -9)" fill="#fff"/>
                                    <path id="EyeLine" d="M111.3,137.788l-9.249-14.682,9.249-15.318h15.671l5.08,5.809" transform="translate(143 -9)" fill="none" stroke="#707070" strokeWidth="3"/>
                                    <circle id="Pupil" cx="10" cy="10" r="10" transform="translate(253 104)" fill="#a0c5f4"/>
                                    </g>
                                    <g id="EyeRight" transform="translate(241.954 97.788)">
                                    <path id="EyeWhites-2" data-name="EyeWhites" d="M122.5,137.788l9.249-14.682L122.5,107.788H107.126l-5.08,5.809,2.194,16.578Z" transform="translate(-102.046 -107.788)" fill="#fff"/>
                                    <path id="EyeLine-2" data-name="EyeLine" d="M122.5,137.788l9.249-14.682L122.5,107.788H107.126l-5.08,5.809" transform="translate(-102.046 -107.788)" fill="none" stroke="#707070" strokeWidth="3"/>
                                    <circle id="Pupil-2" data-name="Pupil" cx="10" cy="10" r="10" transform="translate(2.046 5.212)" fill="#a0c5f4"/>
                                    </g>
                                </g>
                                <g id="EyesClosed" ref={el => {OBJ_eyesClosed=el}}>
                                    <path id="EyeLineLeft" d="M192.693,98.545l-30.647,15,30.647,15" transform="translate(79.585 -0.545)" fill="none" stroke="#707070" strokeWidth="3"/>
                                    <path id="EyeLineLeft-2" data-name="EyeLineLeft" d="M162.046,98.545l30.647,15-30.647,15" transform="translate(-0.324 -0.757)" fill="none" stroke="#707070" strokeWidth="3"/>
                                </g>
                                <g id="EyesHappy" ref={el => {OBJ_eyesHappy = el}}>
                                    <path id="EyeLineLeft-3" data-name="EyeLineLeft" d="M192.693,98.545l-30.647,15,30.647,15" transform="translate(370.499 -64.37) rotate(90)" fill="none" stroke="#707070" strokeWidth="3"/>
                                    <path id="EyeLineLeft-4" data-name="EyeLineLeft" d="M162.046,98.545l30.647,15-30.647,15" transform="translate(63.501 290.157) rotate(-90)" fill="none" stroke="#707070" strokeWidth="3"/>
                                </g>
                            </g>
                            <g id="Hat">
                                <rect id="Brim" width="150" height="20" transform="translate(142 50)" fill="#fdfbf4"/>
                                <path id="Hat-2" data-name="Hat" d="M20,0H120a20,20,0,0,1,20,20V40a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z" transform="translate(147 10)" fill="#fdfbf4"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        )
        
}

export default CharacterController
