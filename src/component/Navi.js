import React, { useState } from 'react';
import logo from '../img/logo.png';
import navicss from '../css/navi.module.css';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import navijson from '../json/navi.json';
// npm i react-router-dom
// npm install react-bootstrap bootstra
// npm i react-scrollspy

 function Navi() {
    const [ colorMode, updataColor ] = useState(true);
    const [ activenum, updateactive ] = useState(-1);

    const naviactive =(e) => {
        const navitag = e.target.parentElement.parentElement;
        //li태그들의 나열을 정렬데이터
        const navitagArr = [...e.target.parentElement.parentElement.children]
        //태그요소를 정렬
        // console.log(navitag.children.length);

        //숫자 -1 : 못찾음.
        const mynum = navitagArr.indexOf(e.target.parentElement)
        updateactive(mynum); //화면을 새롭게 랜더링
        console.log(activenum)
    }

  return (
    <div className={  colorMode ? 'lightmode fixed-top' : 'darkmode fixed-top' }>
        <div className={`${navicss.hd} 
                          border-bottom 
                        py-3 px-4 
        d-flex justify-content-between align-items-center
        `}>
        <h1>
            <Link to="/">
                <img src={logo}  />
            </Link>
        </h1>
        <Scrollspy className='d-flex'>
        {
            navijson.nav.map((el, idx) => {
                return (
                    <li key={ 'gnb'+idx }>
                        <a href={el.href} onClick={ naviactive } className={
                            activenum === idx ? 'active' : null
                        }>{el.title}</a>
                    </li>
                )
            })
        }        
        </Scrollspy>
            <ul id="sns" className='d-flex'>
                <li>
                    <a href="http://www.youtube.com" target="_blank">Youtube</a>
                </li>
                <li>
                    <a href="http://www.youtube.com" target="_blank">자료실</a>
                </li>
                <li>
                    <button onClick={ () =>{
                        updataColor(!colorMode)
                    }}> { colorMode ? 'black' : 'white' }</button>
                </li>
            </ul>  

        </div>
    </div>
  )
}

export default Navi;
