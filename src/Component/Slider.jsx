import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation, FreeMode, Thumbs } from 'swiper';
import CarCard from './CarCard'
import './PaginationStyle.css'

import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef, useState } from 'react';

const Slider = ({ carsData, setSwiperState }) => {
  const swiperRef = useRef(null);
  const [mobileMode, setMobileMode] = useState(false)
  useEffect(()=>{
    setSwiperState(swiperRef)
  },[swiperRef,setSwiperState])

  useEffect(() => {
    // Handler to update window width
    const handleResize = () => {
      console.log(window.innerWidth /carsData.length)
      if(window.innerWidth < 950){
        setMobileMode(true)
      }else{
        setMobileMode(false)
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Swiper
      slidesPerView={mobileMode ? 1 : carsData.length < 3 ? carsData.length : 3}
      spaceBetween={30}
      ref={swiperRef}
      rewind={true}
      slidesPerGroup={mobileMode ? 1 : 3}
      navigation={true}
      // freeMode={true}
      pagination={{
        clickable: true,
        bulletClass: 'owl-clas',
        bulletActiveClass: 'active'
      }}
      loop={true}
      modules={[FreeMode, Pagination,Navigation, Thumbs]}
      className="mySwiper .swiper-pagination-bullet:w-7 flex w-full h-full p-5  overflow-hidden"
    >
      {carsData.map((carData,idx)=>(
        <SwiperSlide key={idx}>
          <CarCard carData={carData}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
