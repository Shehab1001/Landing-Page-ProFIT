import TrainerLandingPage from './trainerLandingPage/TrainerLandingPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index  element={<TrainerLandingPage />} />
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
