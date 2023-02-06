import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import mbanner from "../css/mbanner.module.css";
import bannerDb from "../json/bannerDb.json";
import { Link } from 'react-router-dom';


function Banner(props) {

  return (
    <div id={props.objid} className='h-100'>    
      <Swiper      
        modules={[Pagination, Autoplay ]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1.1}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        centeredSlides={true}
        pagination={{
          type: "fraction",
          // clickable: true,
          }}
       
        
      >

{
  bannerDb.mainBanner.map((value, idx) => {
      return( 
           <SwiperSlide key={ 'sw'+idx } className={ mbanner.item +" "+ value.cls.join(" ") }>
                <div >
                   <h2>
                    { value.title[0] }
                   </h2>
                   <p>
                     { value.title[1] }
                   </p>
                   {
                    value.type == "a" ? 
                      <a href={ value.href[0] } target={ value.href[1]}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a> : 
                      <Link to={ value.href[0]}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></Link>
                   }
                </div>      
             </SwiperSlide>
      )
  })
        
}

      
           
      </Swiper>
    </div>
  )
}
export default Banner;
