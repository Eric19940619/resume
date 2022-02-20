import { Flex } from '@chakra-ui/react'
import AppRoutes from '../AppRoutes'
const AppContent = () => {
  return (
    <Flex w="100%" mt="20" justify="center" align="start">
      <AppRoutes />
    </Flex>
  )
}
export default AppContent
