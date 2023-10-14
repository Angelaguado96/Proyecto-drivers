import './SearchBar.css'
import SearchBar from '../SearcBar/SearchBar'
import Filtrado from '../filtrado/Filtrado'






const NavBar = () => {

   

   return (

      <div>
         <div>
            <SearchBar />
         </div>
      
         <div className='bovv'>
            <Filtrado />
         </div>

      </div>



   )
}

export default NavBar ;

