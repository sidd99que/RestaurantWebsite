import React from 'react';
import { Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('.Contact'));
const Product = React.lazy(() => import('./Product'));

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/product', component: Product },
];

export default routes;
