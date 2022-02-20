import { Center, Flex, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaVuejs } from 'react-icons/fa'

const skills = [
  {
    name: 'HTML',
    icon: <Icon as={FaHtml5} boxSize={8} color="red.600" />,
    desc: '能使用語意化的標籤架構網頁。'
  },
  {
    name: 'CSS',
    icon: <Icon as={FaCss3Alt} boxSize={8} color="cyan.400" />,
    desc: '能寫響應式網頁，會使用預處理器，也會使用 Bootstrap、Ant-Design、ChakraUI等框架加快開發速度。'
  },
  {
    name: 'Javascript',
    icon: <Icon as={FaJs} boxSize={8} color="yellow.200" />,
    desc: '會使用JavaScript製作網站的互動功能、串接API、會使用Webpack打包工具。'
  },
  {
    name: 'VueJs',
    icon: <Icon as={FaVuejs} boxSize={8} color="teal.300" />,
    desc: '會使用該框架搭配Vuex,Vue-Router去製作網站。'
  },
  {
    name: 'ReactJs',
    icon: <Icon as={FaReact} boxSize={8} color="blue.300" />,
    desc: '會搭配Redux,React-Router去製作網站，也會使用ReactHooks 例如useState、useReducer、useEffect...等。'
  }
]

const SkillList = () => {
  return (
    <Flex
      w={'50%'}
      mx="auto"
      direction={['column', 'column', 'row', 'row']}
      justify={'center'}
      align={'center'}
      wrap={'wrap'}
    >
      {skills.map(({ name, desc, icon }) => {
        return (
          <VStack
            w={300}
            minH="150px"
            p={3}
            key={name}
            transition={'0.3s'}
            _hover={{
              shadow: 'xl'
            }}
          >
            <Center mb={2}>{icon}</Center>
            <Heading as="h4" fontSize="xl" mb={2} color="heading">
              {name}
            </Heading>
            <Text mb={2} color="text">
              {desc}
            </Text>
          </VStack>
        )
      })}
    </Flex>
  )
}

export default SkillList
