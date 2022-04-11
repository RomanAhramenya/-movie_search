import React, { useState } from 'react';
import style from './search.module.css'
function Search(props) {
    let [value,setValue]=useState('');
    let onChange=(e)=>{
        setValue(e.target.value)
    }
    let onClick=()=>{
    props.SearchApi(value)
    }
  return <div className={style.wraper}>
      <input value={value} onChange={onChange}/>
      <button onClick={onClick}>Search</button>
  </div>;
}

export default Search;
