import { ItemListCotainer } from "./components/ItemListContainer/ItemListCotainer"
import { Navbar } from "./components/Navbar/Navbar"

function App(){
  return(
    <>
    <div>
      <Navbar />
      <ItemListCotainer greeting= 'Bienvenido' />

    </div>
    </>
  )
}
export default App

