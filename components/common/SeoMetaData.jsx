import Head from 'next/head'
import React from 'react'
import PropType from "prop-types";
import { env } from '@/next.config';

export default function SeoMetaData(pageProps) {

  const Env = JSON.parse(pageProps?.env)
  const scripts= {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": Env?.REACT_APP_DOMAIN_NAME,
    "description": pageProps?.description,
    "url": "https://www.fellame.com",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.fellame.com/"
    },
    "sameAs": [
        "https://www.facebook.com/people/Fellame_Official/100086525761128/",
        "https://twitter.com/fellamefashion?lang=en"
    ],
    "logo": "https://www.fellame.com/assets/logo512x512.png",
    "email": "fellamefashion@gmail.com",
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+917498074963",
            "contactType": "Customer Service",
            "email": "fellamefashion@gmail.com"
        }
    ]
  }
  return (
    <Head>
        <title>{pageProps?.title}</title>
        <meta name="title" content={pageProps?.title} inertia />
        <meta name="description" content={pageProps?.title} />

        {/* <meta property="article:publisher" content=""  />
        <meta property="article:modified_time" content="2023-02-24T10:11:35+00:00"  /> */}
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8"/>
        <meta property="og:title" content={pageProps?.title}  />
        <meta property="og:description" content={pageProps?.description}  />
        <meta property="og:url" content={pageProps?.url}  />
        <meta property="og:site_name" content={Env.REACT_APP_DOMAIN_NAME} />
        <meta property="og:image"  content={pageProps?.image} />
        <meta name="twitter:description" content={pageProps?.description} />
        <meta name="twitter:title" content={pageProps?.title} />
        <meta name="twitter:image" content={pageProps?.image} />
        <meta property="twitter:url" content={pageProps?.url} />
        <meta property="al:ios:app_name" content={pageProps?.title} />
        <meta property="al:android:url" content={pageProps?.android_url}  />
        <meta property="al:ios:url" content={pageProps?.ios_url}  />
        <meta name="keywords" content={pageProps?.keywords} />
        <link rel="canonical" href={pageProps?.canonical} />
        <meta itemprop="name" content={pageProps?.title}  />
        <meta itemprop="description" content={pageProps?.description} />
        <meta itemprop="image" content={pageProps?.image} />

        <link rel="icon" href={Env.REACT_APP_FAVICON} />
        <link rel="manifest" href={Env?.REACT_APP_MANIFEST_JSON} />
        <link rel="apple-touch-icon" href={Env?.REACT_APP_LOGO} />

        <link rel="preload" href={Env?.REACT_APP_LOGO_NAME} type="image/webp" as="image"/>
        {pageProps?.preloadImage &&(
          pageProps?.preloadImage?.map((item, key)=>(
          <link rel="preload" href={item} key={key?.toString()} type="image/webp" as="image"/>
          ))
        )}
        <meta property="og:locale" content="en_US"  />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#3498db"/>
        <meta name="twitter:app:country" content="IN"  />
        <meta name="twitter:card" content="summary"  />
        <meta name="twitter:site" content={Env?.REACT_USERNAME_TWITTER}  />
        <meta name="twitter:creator" content={Env?.REACT_USERNAME_TWITTER} />
        <meta property="twitter:domain" content={Env?.REACT_APP_DOMAIN_NAME} />
        <meta property="al:ios:app_store_id" content={Env?.REACT_APP_STORE_ID} />
        <meta property="al:android:package" content={Env?.REACT_ANDROID_PACKAGE}  />
        <meta property="al:android:app_name" content={Env?.REACT_APP_NAME}  />
        <link rel="dns-prefetch" href="http://localhost:3000/"/>
        <link rel="dns-prefetch" href="http://localhost:3000/"/>
        <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
        <link rel="dns-prefetch" href="https://connect.facebook.net"/>
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="http://localhost:3000/" crossorigin/>
        <link rel="preconnect" href="http://localhost:3000/" crossorigin/>
        <link rel="preconnect" href="https://www.google-analytics.com" crossorigin/>
        <link rel="preconnect" href="https://connect.facebook.net" crossorigin/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta name="facebook-domain-verification" content="" />
        <meta name="p:domain_verify" content="" />
        <meta name='robots' content='index, follow' />
        <meta name="google-site-verification" content="" />
        <meta property="fb:app_id" content="" />
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <script defer type="application/ld+json" >
          {JSON.stringify(scripts)}
          </script>
    </Head>
  )
}
SeoMetaData.propType={
  image: PropType.any,
  url: PropType.any,
  android_url: PropType.any,
  ios_url: PropType.any,
  canonical: PropType.any,
  domain: PropType.any,
  keywords: PropType.any,
}
SeoMetaData.defaultProps = {
  image:"",
  url: "window.location.href",
  android_url: "window.location.href",
  ios_url: "window.location.href",
  canonical: "window.location.origin",
  domain: "window.location.host",
  keywords: "Fellame",
  preloadImage:["Fellame"]
}