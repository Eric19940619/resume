import { Flex, Heading, keyframes, Text } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const growup = keyframes`
  0% {transform: translateX(110%);opacity: 0.0;}
  50% {opacity: 0.0;}
  100% {transform: translateX(0%);opacity: 1.0;}
`

const Headline = () => {
  const { t } = useTranslation()

  return (
    <Flex
      h={200}
      textAlign={'right'}
      justify="space-between"
      direction="column"
    >
      <Heading
        as="h3"
        size="md"
        animation={`${growup} 0.3s linear 0.7s backwards`}
      >
        {t('headline.part1')}
      </Heading>
      <Heading
        as="h1"
        size="4xl"
        my={3}
        animation={`${growup} 0.3s linear 1s backwards`}
      >
        Eric Yang
      </Heading>
      <Text fontSize="2xl" animation={`${growup} 0.3s linear 1.3s backwards`}>
        {t('headline.part2')} <br />
        {t('headline.part3')}
      </Text>
    </Flex>
  )
}

export default Headline
