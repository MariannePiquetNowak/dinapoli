import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}