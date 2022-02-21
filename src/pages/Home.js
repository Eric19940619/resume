import { Box, Flex, keyframes } from '@chakra-ui/react'
import Headline from '../components/Headline'
const growup = keyframes`
  from {transform: translateY(-100%);}
  to {transform: translateY(0%)}
`

const Home = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      overflow="hidden"
      h={200}
      mt="10%"
    >
      <Headline />
      <Box
        width={3}
        height={200}
        background="text"
        ml={2}
        animation={`${growup} 0.7s`}
      />
    </Flex>
  )
}

export default Home
