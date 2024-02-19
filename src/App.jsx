
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dropdown from './components/Dropdown'
import Counter from './components/Counter'
import ApiData from './components/ApiData'
import Form from './components/Form'
import Todolist from './components/Todolist'


function App() {
  return (
    <div>
      < Dropdown/>
      <Routes>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/api-data' element={<ApiData />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/todo-list' element={<Todolist/>}></Route>
      </Routes>
    </div>
  )
}

export default App
