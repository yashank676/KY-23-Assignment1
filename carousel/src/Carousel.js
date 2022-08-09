import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css/bundle";

SwiperCore.use([
  Navigation,
  Pagination,
  Autoplay,
]);

const Carousel = () => {
  const content = [
    {
      text: "Image 1",
      ImgUrl:
        "https://images.unsplash.com/photo-1659940316181-d34bf23ae835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      text: "Image 2",
      ImgUrl:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
    },
    {
      text: "Image 3",
      ImgUrl:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80",
    },
    {
      text: "Image 4",
      ImgUrl:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      text: "Image 5",
      ImgUrl:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="h-full transition ease-in-out duration-3000">
      <Swiper
        pagination={{ clickable: true }}
        className="h-full"
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
      >
        {content.map(({ text, ImgUrl }) => {
          return (
            <SwiperSlide className="h-full">
              {({ isActive }) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.5,
                  }}
                  transition={{duration: 1}}
                  style={{height: "inherit"}}
                >
                  <div
                    style={{
                      background: `url(${ImgUrl}) center no-repeat`,
                      backgroundSize: "cover",
                      height: "inherit",
                    }}
                  >
                    <p
                      className="text-white absolute bottom-[0px] font-semibold max-w-[90%] text-xl p-2"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                    >
                      {text}
                    </p>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
