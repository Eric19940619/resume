import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = {
  fonts: {
    heading: 'Roboto Mono',
    text: 'Noto Sans TC'
  },
  semanticTokens: {
    colors: {
      text: { default: 'black', _dark: '#8892b0' },
      highlight: { default: '#0a192f', _dark: '#64ffda' },
      heading: { default: 'gray.700', _dark: '#c3c8d6' },
      bg: { default: '#fffafa', _dark: '#0a192f' }
    }
  },
  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: 'md',
        backgroundColor: props.colorMode === 'dark' ? '#0a192f' : '#fffafa',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        lineHeight: 'tall'
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500'
      }
    })
  }
}

const Theme = extendTheme({ ...theme, ...config })

export default Theme
