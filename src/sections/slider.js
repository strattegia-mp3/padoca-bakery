import { useEffect, useRef } from "react";
import Image from "next/image";
import img1 from "/public/assets/hands-mass.jpg";
import img2 from "/public/assets/decorating-bread.jpg";
import img3 from "/public/assets/clapping-hands.jpg";
import { register } from "swiper/element/bundle";
import Swiper from "swiper";

export default function Slider() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();
    const swiper = new Swiper(swiperElRef.current, {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  const swiperOptions = {
    slidesPerView: 1,
    speed: 500,
    loop: true,
    allowSlideNext: false,
    allowSlidePrev: false,
    allowTouchMove: false,
  };

  return (
    <section id="slider">
      <h1 className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[99] text-center text-6xl text-marrom_escurot bg-chocolate/30 rounded shadow-lg py-4 px-10">
        Welcome to <br /> Padoca Bakery
      </h1>
      <div className="opacity-40 pointer-events-none relative z-[0]">
        <swiper-container options={swiperOptions} ref={swiperElRef}>
          <swiper-slide>
            <Image
              src={img1}
              width={1280}
              height={600}
              alt=""
              className="w-screen h-screen object-cover"
            />
          </swiper-slide>
          <swiper-slide>
            <Image
              src={img2}
              width={1280}
              height={600}
              alt=""
              className="w-screen h-screen object-cover"
            />
          </swiper-slide>
          <swiper-slide>
            <Image
              src={img3}
              width={1280}
              height={600}
              alt=""
              className="w-screen h-screen object-cover	"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
}
