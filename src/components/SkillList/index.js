import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaVuejs } from 'react-icons/fa'

const skills = [
  {
    name: 'VueJs',
    icon: <Icon as={FaVuejs} boxSize={16} color="teal.300" />,
    desc: '會使用該框架搭配Vuex,Vue-Router去製作網站。',
    color: 'teal.300'
  },
  {
    name: 'ReactJs',
    icon: <Icon as={FaReact} boxSize={16} color="blue.300" />,
    desc: '會搭配Redux,React-Router去製作網站，也會使用ReactHooks 例如useState、useReducer、useEffect...等。',
    color: 'blue.300'
  },
  {
    name: 'Javascript',
    icon: <Icon as={FaJs} boxSize={16} color="yellow.200" />,
    desc: '會使用JavaScript製作網站的互動功能、串接API、會使用Webpack打包工具。',
    color: 'yellow.200'
  },
  {
    name: 'HTML',
    icon: <Icon as={FaHtml5} boxSize={16} color="red.600" />,
    desc: '能使用語意化的標籤架構網頁。',
    color: 'red.600'
  },
  {
    name: 'CSS',
    icon: <Icon as={FaCss3Alt} boxSize={16} color="cyan.400" />,
    desc: '能寫響應式網頁，會使用預處理器，也會使用 Bootstrap、Ant-Design、ChakraUI等框架加快開發速度。',
    color: 'cyan.400'
  }
]

const SkillList = () => {
  return (
    <Flex
      w={'90%'}
      mx="auto"
      direction={{ base: 'column', lg: 'row' }}
      justify={'center'}
      align={'stretch'}
      wrap={'wrap'}
    >
      {skills.map(({ name, desc, icon, color }) => (
        <Flex
          w={{ base: '90%', lg: '50%', xl: '20%' }}
          p="10"
          m="5"
          direction="column"
          bg="white"
          borderTop="3px solid"
          borderColor={color}
          shadow="xl"
          key={name}
          transition="all 0.5s"
          _hover={{
            shadow: '2xl'
          }}
        >
          <Heading as="h4" fontSize="xl" mb={5} color="#53556A">
            {name}
          </Heading>
          <Text mb={5} color="text">
            {desc}
          </Text>
          <Box ml="auto" mt="auto">
            {icon}
          </Box>
        </Flex>
      ))}
    </Flex>
  )
}

export default SkillList
