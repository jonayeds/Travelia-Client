import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import slider1 from '../assets/slider1.png'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'
import slider5 from '../assets/slider5.jpg'
import { Typewriter } from 'react-simple-typewriter'
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Slider = () => {
    
    
     
    return (
        <div className='group h-screen'>
          <Swiper
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className='relative  lg:h-screen  flex items-center justify-center '
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={
           { nextEl : '.button-next-slide',
            prevEl : '.button-prev-slide'}
        }
        pagination={{ clickable: true }}
      >
        
        <SwiperSlide><div><img src={slider1} className='lg:h-screen h-full' alt="" /></div></SwiperSlide>
      <SwiperSlide><div><img src={slider2} alt="" className='lg:h-screen w-screen h-full' /></div></SwiperSlide>
      <SwiperSlide><div><img src={slider3} alt="" className='lg:h-screen brightness-90' /></div></SwiperSlide>
      <SwiperSlide><div><img src={slider4} alt="" className='lg:h-screen w-screen ' /></div></SwiperSlide>
      <SwiperSlide><div><img src={slider5} alt="" className='lg:h-screen w-screen brightness-90' /></div></SwiperSlide>
        <div className='button-prev-slide w-10 h-10 bg-yellow-600 text-white flex justify-center items-center absolute  z-10 -left-52 group-hover:left-0 top-[45%] duration-300 shadow-xl'>
        <FaArrowLeft className='' />
        </div>
        <div className='button-next-slide w-10 h-10 bg-yellow-600 text-white flex justify-center items-center absolute  z-10 -right-52   group-hover:right-0 top-[45%] duration-300 shadow-xl'> 
        
        <FaArrowRight className='' />
        </div>
        
      </Swiper>
      <div className='App absolute md:top-1/3 top-1/4 lg:left-96 left-10 z-30'>
      <h1  className='md:text-7xl text-3xl font-bold heading text-orange-700  text-center '>
      Explore the World with {' '}
        <span className='text-orange-200 '>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Ease', 'Comfort', 'Adventure']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h1>
    </div>
        <p className='lg:text-lg text-center  lg:left-96 left-10 text-white font-mono absolute md:top-1/2 top-1/3 z-30 opacity-90 bg-black p-6 rounded-md bg-opacity-50'>
        Welcome to Travelia, your premier destination for all your travel needs. At Travelia, <br /> we specialize in curating unforgettable experiences tailored to your preferences, <br /> ensuring every journey is filled with excitement, discovery, and relaxation.
        </p>
        </div>
    );
};

export default Slider;