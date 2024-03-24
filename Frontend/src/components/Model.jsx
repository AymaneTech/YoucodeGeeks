import Navbar from './partials/Navbar'
import Sidebar from './partials/Sidebar'

const Model = ({ children }) => {
  return (
    <main className=" text-white grid grid-cols-12 grid-rows-auto font-mono">
      <Navbar />
      <div className="col-span-12 md:col-span-2 ">
        <Sidebar />
      </div>
      <div className="col-span-12 md:col-span-10 mx-2 md:mx-20">
        { children }
      </div>

    </main >
  )
}

export default Model
