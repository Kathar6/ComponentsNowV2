import { useEffect, useState } from "react"

// Vendor
import { Box } from "@chakra-ui/react"
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper"
import {
  Swiper,
  SwiperSlide
} from "swiper/react"

// Styles
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/thumbs";

import "./styles.scss"

// Types
import { IProductCarouselProps } from "./types"

const ProductCarousel = ({images, ...props}: IProductCarouselProps) => {

  const [slides, setSlides] = useState<Array<string>>([])
  const [thumbSlide, setThumbSlide] = useState<any>(null)

  useEffect(() => {
    if (Array.isArray(images)) {
      setSlides(() => {
        const imagesToSlides = new Array(images.length)
        return imagesToSlides.concat(images)
      })

      return () => setSlides([])
    }
  }, [images])

  return (
    <Box overflow='hidden'>
      <Swiper 
      modules={[Navigation, Pagination, Thumbs]}
      slidesPerView={1}
      spaceBetween={50}
      thumbs={{ swiper: thumbSlide }}
      navigation
      pagination={{clickable: true}}
      {...props}>
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={slide}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setThumbSlide(swiper)}
        spaceBetween={20}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className='thumb-swiper'>
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={slide}/>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </Box>
  )
}

export default ProductCarousel