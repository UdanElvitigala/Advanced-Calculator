import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Standard from "./components/Standard"
import PageNotFound from "./components/404.jsx"
import Layout from "./components/Layout"

export default function App() { 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Standard />}/>
      {/* <Route path="converters" />
      <Route path="graphs" /> */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  ))

  return(
    <RouterProvider router={router} />
  )
}