import './App.css'
import AddRoom from './components/room/AddRoom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import ExistRoom from './components/room/ExistRoom'
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import EditRoom from './components/room/EditRoom'
import Home from './components/home/Home'
function App() {
  return (
    <>
    <main>
      <Router>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/exist-rooms' element={<ExistRoom/>} />
            <Route exact path='/edit-room/:roomId' element={<EditRoom />} />
            <Route exact path='/add-room/' element={<AddRoom />} />
          </Routes>
      </Router>
      
      
    </main>
      
 
    </>
  )
}

export default App
