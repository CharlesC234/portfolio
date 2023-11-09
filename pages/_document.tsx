
import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script';
import React from "react";


export default function Document() {
	return (
		<Html lang="en">
			
<Head>
{/*
				Author: Charles Cahill
                  */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
    <title>Charles Cahill</title>
       <meta name="description" content="Charles Cahill - A dedicated Full Stack Developer proficient in App/Web, Cloud, and Design. Engineering Perfection." />

    {/*These are need for PWA*/}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="Charles Cahill" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta name="msapplication-tap-highlight" content="no" />

            <meta name="theme-color" content="#000000" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="English"/>
            <meta name="revisit-after" content="1 days"/>
            <link rel="canonical" href="https://charlescahill.dev" />
            <meta name="license" content="MIT License" />
            <meta httpEquiv="content-language" content="en-us" />

            <link rel="preconnect" href="https://charlescahill.dev" />

            <link rel="dns-prefetch" href="https://charlescahill.dev" />

            <meta name="author" content="Charles Cahill" />

            <link rel="alternate" hrefLang="en" href="https://charlescahill.dev" />

            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />

            <link rel="apple-touch-icon" href="/img/logo_rounded.png" />

            <link rel="apple-touch-icon" sizes="180x180" href="/img/logo_rounded.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg" />
             <link rel="icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>
            <link rel="shortcut icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>

             <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="manifest" href="/manifest.json" />





            <meta property="og:title" content="Charles Cahill" key="title" />
            <meta property="og:description" content="Charles Cahill - A dedicated Full Stack Developer proficient in App/Web, Cloud, and Design. Engineering Perfection." />
            <meta property="og:image" content="/img/pfp.jpg" />
            <meta property="og:image:secure_url" content="/img/pfp.jpg" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:alt" content="Charles Cahill" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />
            <meta property="og:url" content="https://charlescahill.dev" />
            <meta property="og:type" content="website" />
            <meta property="og:profile" content="https://github.com/CharlesC234" />
            <meta property="og:site_name" content="Charles Cahill" />
             <meta property="og:locale" content="en_US" />



            <meta name="twitter:title" content="Charles Cahill" />
            <meta name="twitter:description" content="Charles Cahill - A dedicated Full Stack Developer proficient in App/Web, Cloud, and Design. Engineering Perfection." />
            <meta name="twitter:domain" content="https://charlescahill.dev" />


    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='2048x2732' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1668x2224' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1536x2048' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1125x2436' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1242x2208' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='750x1334' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='640x1136' />

            {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
            <meta name="keywords" content="
    Charles Cahill, Full Stack Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, Charles Cahill Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Charles Cahill Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Charles Cahill Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Charles Cahill DevOps, IT Portfolio, Web Developer Portfolio, Charles Cahill Developer,
    Full Stack Engineer Charles Cahill, Charles Cahill Coding, Charles Cahill IT,
    Charles Cahill Full Stack Developer, Charles Cahill Software Engineer, Charles Cahill DevOps Engineer,
    Charles Cahill Programming, Charles Cahill Software Development, Charles Cahill Coding Projects,
    Charles Cahill Tech Portfolio, Charles Cahill IT Portfolio, Charles Cahill Software Engineer Portfolio,
    Charles Cahill Web Developer Portfolio, Charles Cahill DevOps Portfolio, Charles Cahill Full Stack Engineer,
    Charles Cahill Full Stack Developer Portfolio, Charles Cahill Coding Portfolio, Charles Cahill Programming Portfolio,
    Charles Cahill Software Development Portfolio, Charles Cahill Technology Projects,
    Charles Cahill Computer Science, Charles Cahill Cloud Computing, Charles Cahill IT Professional,
    Charles Cahill Technology Enthusiast, Charles Cahill Computer Programmer, Charles Cahill Code Portfolio,
    Charles Cahill Technology Student, Charles Cahill Software Architect,fiaz,fiaz portfolio,fiaz devops,fiaz devops engineer,
    fiaz devops portfolio,fiaz devops projects,fiaz devops specialist,fiaz devops professional,fiaz devops engineer portfolio,
    fiaz devops engineer projects,fiaz devops engineer specialist,fiaz devops engineer professional,fiaz devops engineer coding,
    fiaz devops engineer coding projects,fiaz devops engineer coding portfolio,fiaz devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

" />


            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Charles Cahill",
          "url": "https://charlescahill.dev",
        }`
                }}
            />


            {/*Edit this to your according to your website*/}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://charlescahill.dev/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Projects",
              "item": "https://charlescahill.dev/projects"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Resume",
              "item": "https://charlescahill.dev/resume"
            },
        `
            }} />

	{/*theme*/}
	<Script id="theme.util.jsx" strategy="beforeInteractive" >
		{`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
	</Script>

</Head>

			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}
