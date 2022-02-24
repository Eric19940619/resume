import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/image/logo.svg'
import i18n from '../../i18n/i18n'
import Menu from '../Menu'

const AppHeader = () => {
  const logocolor = useColorModeValue('black', '#64ffda')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [lang, setLang] = useState(navigator.language)

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  const toggleLangMode = () => {
    lang === 'zh-TW' ? setLang('en') : setLang('zh-TW')
  }
  return (
    <Flex
      as="nav"
      w={'100%'}
      h={'50px'}
      px={5}
      justify={'space-between'}
      align="center"
      direction="row"
    >
      <Flex justify="center" align="center">
        <Center as={NavLink} to="/" w={8} h={8} mr={2} fontSize={16}>
          <Logo src={Logo} fill={logocolor} />
        </Center>
      </Flex>

      <Button
        mx={5}
        bg="transparent"
        display={{ base: 'block', lg: 'none' }}
        onClick={onOpen}
        ref={btnRef}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Menu
              onClick={onClose}
              toggleLangMode={toggleLangMode}
              lang={lang}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex
        justify={{ base: 'center', lg: 'space-between' }}
        align="center"
        direction={{ base: 'column', lg: 'row' }}
        display={{ base: 'none', lg: 'flex' }}
      >
        <Menu toggleLangMode={toggleLangMode} lang={lang} />
      </Flex>
    </Flex>
  )
}

export default AppHeader
