// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sliderData = [
  {
    id: 1,
    imgUrl: "../images/slide-1.webp",
  },
  {
    id: 2,
    imgUrl: "../images/slide-2.webp",
  },
  {
    id: 3,
    imgUrl: "../images/slide-3.webp",
  },
  {
    id: 4,
    imgUrl: "../images/slide-4.webp",
  },
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="">
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {sliderData.map((item, i) => (
          <div key={i}>
            <SwiperSlide>
              <img src={item.imgUrl} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
