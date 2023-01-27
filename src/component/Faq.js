import React from 'react';
import faqdb from '../json/faqbd.json' 

const Faq = () => {
    
   return (
        <div id="faq" className='container py-5'>
<h2 className='text-center pt-5 pb-3'>묻고 답하기</h2>                
<ul className='border col-8 mx-auto p-4'>
{
    faqdb.faqlist.map((el, idx)=>{
        {/* 문자열을 특정문자로 정렬로 데이터타입변경 */}
        var listArr = el.faqContent.split('/');
        return (
            <li key={ 'faqcom'+ idx }>
                <strong role="button" 
                onClick={ e => { 
                    e = e || window.event;
                    e.target.nextSibling.classList.toggle('d-none')
                    }}>{el.faqtitle}
                </strong>
                <p className='d-none bg-dark text-white py-3'>
                {/* \n json에서 문자떨어짐보다는 엔터를 못치니깐 씀 */}
                    {                        
                      listArr.map((eel, index) => {
                        return <>{eel}<br /></>
                      })
                    }
                </p>
            </li>    
        )
    })
}
</ul>
</div>
);}

export default Faq;
