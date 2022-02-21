import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Image, Link, Tag, Text } from '@chakra-ui/react'
import work1 from '../../assets/image/work1.jpg'
import work2 from '../../assets/image/work2.jpg'
import work3 from '../../assets/image/work3.jpg'

const Works = [
  {
    name: 'NewYorkTimes API',
    desc: '使用原生Javascript與axios取得Api的資料後，將資料分類並隨著頁面捲動更新畫面。',
    tags: ['Axios'],
    img: work1,
    url: 'https://eric19940619.github.io/nytimes/'
  },
  {
    name: '訂餐網站',
    desc: '使用VueJs框架與LocalStorage實作小型線上訂餐系統。 利用Vuex管理產品數據與購物清單數據並使用VueRouter實現切換分頁功能。',
    tags: ['VueJs', 'Vuex', 'VueRouter'],
    img: work2,
    url: 'https://eric19940619.github.io/foodwebsite'
  },
  {
    name: '虛擬貨幣清單',
    desc: '使用ReactJs框架，搭配Router切換分頁，使用Axios取得虛擬貨幣Api的資訊後，用Bootstrap來呈現頁面，用C3Js呈現量價圖，最後使用LocalStorage儲存使用者的喜愛清單。',
    tags: ['ReactJs', 'React-Router', 'Axios', 'Bootstrap', 'C3js'],
    img: work3,
    url: 'https://eric19940619.github.io/Coin'
  }
]

const WorkItem = ({ work }) => {
  const { name, img, tags, desc, url } = work

  return (
    <Box
      w={{ base: '95%', lg: '45%', xl: '30%' }}
      shadow={'0 2px 20px rgba(0, 0, 0, 0.2)'}
      my="8"
      bg="white"
    >
      <Box>
        <Image src={img} alt={name} objectFit="cover" boxSize="100%" />
      </Box>
      <Flex direction={'column'} p={5}>
        <Flex mb={5} flexWrap="wrap">
          {tags.map((tag) => (
            <Tag m={2} key={tag} variant="solid" colorScheme="teal">
              {tag}
            </Tag>
          ))}
        </Flex>

        <Heading
          as={Link}
          size="lg"
          color="heading"
          mb={5}
          href={url}
          isExternal
          display="flex"
          align="flex-start"
        >
          {name} <ExternalLinkIcon display="inline-block" ml="2" />
        </Heading>

        <Text color="text" mb={5}>
          {desc}
        </Text>
      </Flex>
    </Box>
  )
}

const WorkList = () => {
  return (
    <Flex
      w="90%"
      m="auto"
      justify={{ base: 'center', lg: 'space-around', xl: 'space-between' }}
      align="stretch"
      flexWrap="wrap"
    >
      {Works.map((work, index) => (
        <WorkItem work={work} key={work.name} index={index} />
      ))}
    </Flex>
  )
}

export default WorkList
