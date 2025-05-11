import './App.css'
import DetailPage from './components/detailPage'
import { GiConqueror } from "react-icons/gi";

function App() {
  

  return (
    <>
      <div className='container'>
       
        <p className='logoHeading'><GiConqueror size={28} color='#ff751a'/>  Coding Conf</p>
         <DetailPage/>
      </div>
      
    </>
  )
}

export default App
