import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaVuejs } from 'react-icons/fa'

const skills = [
  {
    name: 'VueJs',
    icon: <Icon as={FaVuejs} boxSize={16} color="teal.300" />,
    desc: 'vuejs',
    color: 'teal.300'
  },
  {
    name: 'ReactJs',
    icon: <Icon as={FaReact} boxSize={16} color="blue.300" />,
    desc: 'react',
    color: 'blue.300'
  },
  {
    name: 'Javascript',
    icon: <Icon as={FaJs} boxSize={16} color="yellow.200" />,
    desc: 'javascript',
    color: 'yellow.200'
  },
  {
    name: 'HTML',
    icon: <Icon as={FaHtml5} boxSize={16} color="red.600" />,
    desc: 'html',
    color: 'red.600'
  },
  {
    name: 'CSS',
    icon: <Icon as={FaCss3Alt} boxSize={16} color="cyan.400" />,
    desc: 'css',
    color: 'cyan.400'
  }
]

const SkillList = () => {
  const { t } = useTranslation()

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
            {t(`skill.${desc}`)}
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
