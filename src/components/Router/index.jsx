import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import Apartment from '../../pages/apartment'
import About from '../../pages/about'
import Error from '../../components/Error'
import Header from '../Header'
import Footer from '../Footer'

function Router() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartment/:id" element={<Apartment />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Router
