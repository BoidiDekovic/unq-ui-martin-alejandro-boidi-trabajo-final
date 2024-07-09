import { BrowserRouter, Route, Routes } from "react-router-dom"
import Difficulty from "./pages/Difficulty"
import Game from "./pages/Game"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={
              <Difficulty />
            }
          />
          <Route
            path="/game"
            element={
              <Game />
            }
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
