import { Route, Routes } from "react-router-dom"
import Company from "./pages/Company"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Analytics from "./pages/Analytics"
import Users from "./pages/Users"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="">
     <Routes>
      <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="users" element={<Users />}/>
          <Route path="contact" element={<Contact />} />
      </Route>
     </Routes>
    </div>
  )
}

export default App
