import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import {HashRouter as Router, Route, Switch, useLocation} from 'react-router-dom'

import Home from './components/home';
import BlogPosts from './components/blog-posts';
import BlogArticle from './components/blog-article';


function App() {

  return (
    <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog/:slug" component={BlogArticle} />
          <Route exact path="/blog" component={BlogPosts} />
          <Route component={Error} />
        </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);