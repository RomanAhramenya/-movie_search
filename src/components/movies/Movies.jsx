import React from 'react';
import style from './movies.module.css'
function Movies({Poster,Title,Year,slider,id}) {
  
  return <div  style={{left:slider+'vw'}} className={style.wraper}>
      <div className={style.img}><img src={Poster} alt='#'/></div>
      <div className={style.title}>{Title}</div>
      <div className={style.year}>{Year}</div>
  </div>;
}

export default Movies;
