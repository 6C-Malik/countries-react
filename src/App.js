import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Notfound from "./pages/Notfound"
import About from "./pages/About"
import News from "./pages/News"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}
