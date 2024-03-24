import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./Home"
import { Create as CreateQuestion } from "./Questions/Create"

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/questions/create" element={<CreateQuestion/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
