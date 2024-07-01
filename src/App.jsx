import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={
              <Layout>
                  <Home />
              </Layout>
            }
          />
          <Route
            path="/game"
            element={
              <Layout>
                  <Game />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
