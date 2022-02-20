import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import AnimatiedPage from '../AnimatedPage'

const Title = ({ id, title }) => {
  return (
    <Flex
      w="100%"
      mx="auto"
      mb="20"
      justify="center"
      align="center"
      textAlign="center"
    >
      <Heading as={'h2'} size="xl" fontFamily={'Roboto Mono'}>
        <Text display={'inline'} color="highlight">{`${id}.`}</Text>
        <Text display={'inline'} color="heading">
          {title}
        </Text>
      </Heading>
    </Flex>
  )
}

const PageLayout = ({ id, title, children }) => {
  return (
    <AnimatiedPage>
      <Box w={'100%'}>
        <Title id={id} title={title} />
        <Box>{children}</Box>
      </Box>
    </AnimatiedPage>
  )
}

export default PageLayout
