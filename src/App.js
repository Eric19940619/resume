import { Flex } from '@chakra-ui/react'
import AppContent from './components/AppContent'
import AppHeader from './components/AppHeader'

const App = () => {
  return (
    <Flex direction="column" align="center" m="0 auto">
      <AppHeader />
      <AppContent />
    </Flex>
  )
}

export default App
