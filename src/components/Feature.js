import React from 'react'
import { HeadingFour } from '../styles/Headings.styled'
export default function Feature(props) {
  return (
    <div>
        <div className='feature-icon'>
        {props.icon}
        </div>
        <HeadingFour className='feature-title'>
            {props.feature}
        </HeadingFour>
        <p>{props.desc}</p>
    </div>
  )
}
