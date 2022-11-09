import {
  SwiperProps
} from "swiper/react"

export interface IProductCarouselProps extends Omit<SwiperProps, 'modules'|'slidesPerView'> {
  images: Array<string>
}