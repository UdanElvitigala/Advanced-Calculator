import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Standard from "./components/Standard"
import PageNotFound from "./components/404.jsx"
import Layout from "./components/Layout"
import Scientific from "./components/Scientific"
import UnitConverter from "./components/converters/Units"
import QuantityConverter from "./components/converters/Quantity"
import DementionalConverter from "./components/converters/Dementions"

export default function App() { 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Standard />}/>
      <Route path="scientific" element={<Scientific />} />
      <Route path="converter">
        <Route path="units" element={<UnitConverter />}></Route>
        <Route path="quantity" element={<QuantityConverter />}></Route>
        <Route path="dementions" element={<DementionalConverter /> } ></Route>
      </Route>
      {/*<Route path="graphs" /> */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  ))

  return(
    <RouterProvider router={router} />
  )
}