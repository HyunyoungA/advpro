import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Qna from './Qna';

function Maincomponent() {
  return (
    <div>
      <Banner objid="mainBanner"></Banner>
      <div>
        <Faq></Faq>
        <div style={{height:"100vh"}} id="review" className="border-top bg-dark"></div>
        <Qna></Qna>
      </div>
    </div>
  )
}

export default Maincomponent