import './SearchBar.css'
import SearchBar from '../SearcBar/SearchBar'
import { useState } from 'react';
import { ImParagraphJustify, ImIndentIncrease } from "react-icons/im";
import Filtrado from '../filtrado/Filtrado'






const NavBar = () => {

   const [showMenu, setShowmenu] = useState(false);
  

   const toggleSearch = (evento) => {
      setShowmenu(!showMenu)
      evento.stopPropagation();
   }


   return (
      <div className='cajaDeSeracBarc'>

         {
            showMenu ?
            (
               <div onClick={toggleSearch}>
                  <ImParagraphJustify className='y'  />
                  <div className='boxMenu'  onClick={(e) => e.stopPropagation()}>

                     <SearchBar />
                     <Filtrado />

                  </div>
                  </div>
            )
               : (<div onClick={toggleSearch}><ImIndentIncrease /></div>)
         }


      </div>
   )
}

export default NavBar
