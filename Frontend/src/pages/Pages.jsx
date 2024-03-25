import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./Home"
import { Create as CreateQuestion } from "./Questions/Create"
import { Question } from "./Questions/Question"

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/questions/create" element={<CreateQuestion/>}/>
        <Route path="/posts/:slug" element={<Question/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
