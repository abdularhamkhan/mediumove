import Home from './Pages/Dashboard/Home'
import routes from './Routes/routes'
import NavBar from './components/appComps/NavBar'
import { useRoutes } from 'react-router-dom'


const App = () => {

  const appRoutes=useRoutes(routes)
  return (
    <>
      <NavBar/>
      <div className='flex flex-col items-center'>
        {appRoutes}
      </div>
    </>

  )
}

export default App
