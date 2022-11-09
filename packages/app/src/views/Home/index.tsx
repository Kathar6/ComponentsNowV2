import { useState } from "react"
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
import { List, ListItem } from "@src/components/ProductItemList"

// Vendor
import { Icon } from "@iconify/react"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  Box,
  Text,
  Image
} from "@chakra-ui/react"

const Home = (): JSX.Element => {
  
  const navigate = useNavigate()
  const [cards, setCards] = useState(new Array(8).fill(""))

  return (
    <Box>
      <Swiper
        navigation
        slidesPerView={1}
        spaceBetween={20}
        modules={[Navigation]}>
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
        color="gray.700"
        fontSize="2.25rem">
        Categories
      </Text>
      <TipList>
        <Icon data-text="Displays" icon="eva:monitor-outline"/>
        <Icon data-text="Mouses" icon="bx:mouse"/>
        <Icon data-text="Keyboards" icon="fe:keyboard"/>
        <Icon data-text="GPUS" icon="bi:gpu-card"/>
        <Icon data-text="RAMS" icon="fluent:ram-20-filled"/>
      </TipList>
      <Text 
        my="2.5rem"
        textAlign="center"
        color="gray.700"
        fontSize="2.25rem">
        Deals
      </Text>
      <Box 
      display="flex"
      justifyContent="center">
        <List>
          {cards.map((currentCard, index) => {
            return (
              <ListItem
                key={index}
                previousValue={20}
                value={2000}
                discount={10}
                description="hgasdf"
                onClick={() => navigate('/product/1')}
              />
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default Home