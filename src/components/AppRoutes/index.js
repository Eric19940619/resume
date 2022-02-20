import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Skill from '../../pages/Skill'
import Work from '../../pages/Work'

const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skill" element={<Skill />} />
        <Route path="work" element={<Work />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes
