import { Container, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <Container p={0} m={['auto', 'auto', 0, 0]}>
      <Text>
        {t('about.part1')}
        <br />
        <br />
        {t('about.part2')}
        <br />
        <br />
        {t('about.part3')}
      </Text>
    </Container>
  )
}

export default AboutMe
