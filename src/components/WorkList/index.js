import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  VStack
} from '@chakra-ui/react'
import work1 from '../../assets/image/work1.jpg'
import work2 from '../../assets/image/work2.jpg'
import work3 from '../../assets/image/work3.jpg'

const Works = [
  {
    name: 'NewYorkTimes API',
    desc: '使用原生Javascript與axios取得Api的資料後，將資料分類並隨著頁面捲動更新畫面。',
    tags: ['Axios'],
    img: work1
  },
  {
    name: '訂餐網站',
    desc: '使用VueJs框架與LocalStorage實作小型線上訂餐系統。 利用Vuex管理產品數據與購物清單數據並使用VueRouter實現切換分頁功能。',
    tags: ['VueJs', 'Vuex', 'VueRouter'],
    img: work2
  },
  {
    name: '虛擬貨幣清單',
    desc: '使用ReactJs框架，搭配Router切換分頁，使用Axios取得虛擬貨幣Api的資訊後，用Bootstrap來呈現頁面，用C3Js呈現量價圖，最後使用LocalStorage儲存使用者的喜愛清單。',
    tags: ['ReactJs', 'React-Router', 'Axios', 'Bootstrap', 'C3js'],
    img: work3
  }
]

const WorkItem = ({ work, index }) => {
  const { name, img, tags, desc } = work
  return (
    <Stack
      w={{ base: '100%', md: '100%', lg: '80%' }}
      mx="auto"
      pb={20}
      direction={{
        base: 'column',
        md: 'column',
        lg: index % 2 === 0 ? 'row' : 'row-reverse'
      }}
      align={{ base: 'start', md: 'start', lg: 'center' }}
    >
      <Box w={{ md: '100%', lg: '60%' }}>
        <Image src={img} alt={name} objectFit="cover" boxSize="100%" />
      </Box>
      <Flex
        w={{ md: '80%', lg: '50%' }}
        mx={{ base: 'auto', lg: '0' }}
        direction="column"
        justify={'center'}
        align={'start'}
      >
        <Heading size="lg" color="heading">
          {name}
        </Heading>
        <Text py={10} color="text">
          {desc}
        </Text>
        <Box>
          {tags.map((tag) => (
            <Tag mx={2} key={tag}>
              {tag}
            </Tag>
          ))}
        </Box>
      </Flex>
    </Stack>
  )
}

const WorkList = () => {
  return (
    <VStack>
      {Works.map((work, index) => (
        <WorkItem work={work} key={work.name} index={index} />
      ))}
    </VStack>
  )
}

export default WorkList
