import { useState } from 'react'
import './App.css'
import UserComponent from './components/UserComponent'
import ProductComponent from './components/ProductComponent'
import OutputComponent from './components/OutputComponent'

function App() {

  const [data, setData] = useState({})

  return (
    <div style={{width: "30vw", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <div>
        <h1>REST API</h1>
        <h2>Input</h2>
        <UserComponent setData={setData}/>
        <ProductComponent setData={setData}/>
      </div>
      <div>
        {data && <OutputComponent data={data}/>}
        {!data && "No Data"}
      </div>
    </div>
  )
}

export default App
