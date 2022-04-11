import React from 'react'
import s from './Preloader.module.css'
import img from './preloadergif.gif'
export default function Preloader() {
    return (
        <div className={s.wraper}>
            <img src={img} alt='#'/>
        </div>
    )
}
