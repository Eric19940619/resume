import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Button,
  Center,
  Flex,
  Link,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/image/logo.svg'
import i18n from '../../i18n/i18n'

const AppHeader = () => {
  const { t } = useTranslation()
  const logocolor = useColorModeValue('black', '#64ffda')
  const { colorMode, toggleColorMode } = useColorMode()
  const [lang, setLang] = useState(navigator.language || 'en')

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  const toggleLangMode = () => {
    lang === 'zh-TW' ? setLang('en') : setLang('zh-TW')
  }

  const NavLinks = ['about', 'skill', 'work'].map((link, index) => {
    return (
      <Link as={NavLink} to={`/${link}`} mx={10} key={link}>
        <Text display="inline" color="highlight">{`0${index + 1}.`}</Text>
        <Text display="inline" color="heading" ml={3}>
          {t(`nav.${link}`)}
        </Text>
      </Link>
    )
  })

  return (
    <Flex
      as="nav"
      w={'100%'}
      h={'50px'}
      px={5}
      justify={['center', 'center', 'space-between', 'space-between']}
      align="center"
      direction={['column', 'column', 'row', 'row']}
    >
      <Flex justify="center" align="center">
        <Center as={NavLink} to="/" w={8} h={8} mr={2} fontSize={16}>
          <Logo src={Logo} fill={logocolor} />
        </Center>
      </Flex>

      <Flex
        justify={['center', 'center', 'space-between', 'space-between']}
        align="center"
        direction={['column', 'column', 'row', 'row']}
        display={['none', 'none', 'flex', 'flex']}
      >
        <Button mx={5} bg="transparent" onClick={toggleLangMode}>
          {lang === 'zh-TW' ? 'EN' : '中'}
        </Button>
        <Button mx={5} bg="transparent" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        {NavLinks}
      </Flex>
    </Flex>
  )
}

export default AppHeader
