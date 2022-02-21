import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, Flex, Link, Text, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import i18n from '../../i18n/i18n'

const Menu = ({ onClick = null }) => {
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()
  const [lang, setLang] = useState(navigator.language || 'en')

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  const toggleLangMode = () => {
    lang === 'zh-TW' ? setLang('en') : setLang('zh-TW')
  }

  const Links = ['about', 'skill', 'work'].map((link, index) => {
    return (
      <Link
        as={NavLink}
        to={`/${link}`}
        mx={10}
        my={3}
        key={link}
        onClick={onClick}
      >
        <Text display="inline" color="highlight">{`0${index + 1}.`}</Text>
        <Text display="inline" color="heading" ml={3}>
          {t(`nav.${link}`)}
        </Text>
      </Link>
    )
  })

  return (
    <>
      <Flex justify={'center'} my={{ base: '5', lg: '0' }}>
        <Button mx={5} bg="transparent" onClick={toggleLangMode}>
          {lang === 'zh-TW' ? 'EN' : '中'}
        </Button>
        <Button mx={5} bg="transparent" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify={{ base: 'flex-start', lg: 'center' }}
        align={{ base: 'flex-start', lg: 'center' }}
      >
        {Links}
      </Flex>
    </>
  )
}

export default Menu
