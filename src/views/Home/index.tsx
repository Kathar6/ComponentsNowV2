import type { FC } from "react"

// Router
import { useNavigate } from "react-router-dom"

// Assets
import background from "@src/Assets/imgs/manage-marketplace-banner.jpg"

// Styles
import "swiper/css"
import "swiper/css/navigation"
import "./style.scss"

// Components
import TipList from "@src/components/TipList"

// Vendor
import { Icon } from "@iconify/react"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  Box,
  Text,
  Image
} from "@chakra-ui/react"

const Home: FC = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <Swiper
        navigation
        slidesPerView={1}
        spaceBetween={20}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Image 
            src={background}
            h="16rem"
            objectFit="cover"
            backgroundRepeat="no-repeat"
            />
        </SwiperSlide>
      </Swiper>
      <Text 
        my="2.5rem"
        textAlign="center"
        fontSize="2.25rem">
        Categories
      </Text>
      <TipList>
        <Icon icon="eva:monitor-outline"/>
        <Icon icon="bx:mouse"/>
        <Icon icon="fe:keyboard"/>
        <Icon icon="bi:gpu-card"/>
        <Icon icon="fluent:ram-20-filled"/>
      </TipList>
      <Text 
        my="2.5rem"
        textAlign="center"
        fontSize="2.25rem">
        Deals
      </Text>
    </Box>
  )
}

export default Home