import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Image, Link, Tag, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import work1 from '../../assets/image/work1.jpg'
import work2 from '../../assets/image/work2.jpg'
import work3 from '../../assets/image/work3.jpg'

const Works = [
  {
    name: 'work1',
    tags: ['Axios'],
    img: work1,
    url: 'https://eric19940619.github.io/nytimes/'
  },
  {
    name: 'work2',
    tags: ['VueJs', 'Vuex', 'VueRouter'],
    img: work2,
    url: 'https://eric19940619.github.io/foodwebsite'
  },
  {
    name: 'work3',
    tags: ['ReactJs', 'React-Router', 'Axios', 'Bootstrap', 'C3js'],
    img: work3,
    url: 'https://eric19940619.github.io/Coin'
  }
]

const WorkItem = ({ work }) => {
  const { name, img, tags, url } = work
  const { t } = useTranslation()

  return (
    <Box
      w={{ base: '95%', lg: '45%', xl: '30%' }}
      shadow={'0 2px 20px rgba(0, 0, 0, 0.2)'}
      my="8"
      bg="white"
    >
      <Box>
        <Image
          src={img}
          alt={t(`work.${name}.title`)}
          objectFit="cover"
          boxSize="100%"
        />
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
          {t(`work.${name}.title`)}
          <ExternalLinkIcon display="inline-block" ml="2" />
        </Heading>

        <Text color="text" mb={5}>
          {t(`work.${name}.desc`)}
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
