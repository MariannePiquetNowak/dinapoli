import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Home from './Views/Home/Home';

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