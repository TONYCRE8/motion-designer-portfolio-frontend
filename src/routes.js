import React, {useState, useLayoutEffect, useRef} from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import { useTransition, animated as a, config } from "react-spring";
//import gsap from 'gsap'

import Home from './pages/home';
import Blog from './pages/blog';
import Design from './pages/design';
import Development from './pages/develop';


import BlogArticle from './pages/templates/blog-article';
import DesignProject from './pages/templates/design-project'
import DevelopmentProject from './pages/templates/development-project'

function Routes() {
    /*let page = useRef(null)

     useLayoutEffect(() => {
        gsap.fromTo(page, {opacity: 0, duration: 1}, {opacity: 1})
    }) */
    const location = useLocation();
    const [visible, setVisible] = useState(false)
    const object = {location, visible}
    const transition = useTransition( object, {
        keys: object.location.pathname,
        from: {  opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: object.visible,
        delay: 200,
        config: config.default,
        onRest: () => setVisible(!object.visible)
    });
    // Try and work out how we can make this absolute whilst being able to
    // keep the footer at the bottom of the page.
    return (
        <div className="page">
            {transition((style, item, t, key) => (
                <a.div key={key} style={{ ...style, position: 'absolute', width: "100%"}}>
                    {console.log(item)}
                    <Switch location={item.location}>
                        <Route exact path="/" component={Home} />
                        <Route path="/blog/:slug" component={BlogArticle} />
                        <Route exact path="/blog" component={Blog} />
                        <Route path="/design/:slug" component={DesignProject} />
                        <Route exact path="/design" component={Design} />
                        <Route path="/development/:slug" component={DevelopmentProject} />
                        <Route exact path="/development" component={Development} />
                        <Route component={Error} />
                    </Switch> 
                </a.div>
            ))}
        </div>
    )
}

export default Routes

/**
 *  const location = useLocation();
    const [visible, setVisible] = useState(false)
    // How do I incorperate visibility and location in this transition? I need both of them here
    const transition = useTransition (location, {
        keys: location => location.pathname,
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        duration: 200,
        config: config.default
    })
    return (
        <div className="page">
            {transition((style, item, t, key) => (
                <a.div key={key} style={style}>
                    <Switch location={item}>
                        <Route exact path="/" component={Home} />
                        <Route path="/blog/:slug" component={BlogArticle} />
                        <Route exact path="/blog" component={BlogPosts} />
                        <Route exact path="/design" component={Design} />
                        <Route exact path="/development" component={Development} />
                        <Route component={Error} />
                    </Switch> 
                </a.div>
            ))}
        </div>
    )
 */