import React, {useState} from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import { useTransition, animated as a, config } from "react-spring";
//import gsap from 'gsap'

import Home from './pages/home';
import Blog from './pages/blog';
import Design from './pages/design';
import Development from './pages/development';


import BlogArticle from './pages/templates/blog-article';
import DesignProject from './pages/templates/design-project'
import DevelopmentProject from './pages/templates/development-project'

function Routes() {
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
    return (
        <div className="page">
            {transition((style, item, t, key) => (
                <a.div key={key} style={{ ...style, position: 'absolute', width: "100%"}}>
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