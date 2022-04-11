import React, { useState } from 'react';
import Movies from '../movies/Movies';
import s from './slider.module.css'

function Slider({movies}) {
    let [slider, setSlider] = useState(0);
    
    let Next=()=>{
        if(-(movies.length*15)<slider){
           setSlider(slider-=15) 
        }
        
      }
      let Prev=()=>{
        if(slider<0){
            setSlider(slider+=15)
        }
        
      }
      let div = document.querySelector('.movies');
      console.log(div)
  return <>
     <div className="movies">
         {movies.map((mov,index) => {
          return <Movies  slider={slider} Poster={mov.Poster} Year={mov.Year} Title={mov.Title} />;
        })}
  </div>
  <div className={s.button}><button onClick={Next}>{'>'}</button></div>
  <div className={s.buttonLeft}><button onClick={Prev}>{'<'}</button></div>
  </>


        

}

export default Slider;
