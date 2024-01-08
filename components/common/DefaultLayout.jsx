import React from 'react'
import dynamic from 'next/dynamic'
const SeoMetaData = dynamic(() =>import('./SeoMetaData'), {ssr:true})

export default function DefaultLayout(props) {
  return (
    <React.Fragment>
      <SeoMetaData {...props}/>
      {props?.children}
    </React.Fragment>
  )
}
