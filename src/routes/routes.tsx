import {lazy} from "react";

const LandingSite = lazy(() => import('../pages/Landing'))
const MintingPage = lazy(() => import('../pages/MintingPage'))
const AboutPage = lazy(() => import('../pages/MintingPage'))
const HowItWorksPage = lazy(() => import('../pages/MintingPage'))
const CommunityPage = lazy(() => import('../pages/MintingPage'))

const NotFound = lazy(() => import('../pages/NotFound'))

export const routes = [
    {
        name: 'Landing Site',
        path: '/',
        exact: false,
        component: LandingSite,
        protected: false,
    },
    {
        name: 'Minting Site',
        path: '/minting',
        exact: false,
        component: MintingPage,
        protected: false,
    },
    {
        name: 'How It Works',
        path: '/how-it-works',
        exact: false,
        component: HowItWorksPage,
        protected: false,
    },   {
        name: 'About',
        path: '/about',
        exact: false,
        component: AboutPage,
        protected: false,
    },   {
        name: 'Community',
        path: '/community',
        exact: false,
        component: CommunityPage,
        protected: false,
    },
    {
        name: 'Not Found',
        path: '*',
        exact: true,
        component: NotFound,
        protected: false,
    },
]
