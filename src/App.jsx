import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Game from "./pages/Game"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={
              <Home />
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
