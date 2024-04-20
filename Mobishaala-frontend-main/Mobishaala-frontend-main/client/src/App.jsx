import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loader from "./components/Loader"

const Home = lazy(() => import('./pages/Home'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
