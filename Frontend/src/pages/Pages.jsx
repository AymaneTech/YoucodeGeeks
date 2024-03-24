import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./Home"

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
