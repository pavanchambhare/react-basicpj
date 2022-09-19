
import './App.css';
import { FaPizzaSlice } from "react-icons/fa";
import Pizza from './menu/Pizza';
import { IconContext } from "react-icons";
import { GrRestaurant } from "react-icons/gr";
import { GiHamburger } from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";
import { BiDrink } from "react-icons/bi";
import { MdOutlineFastfood } from "react-icons/md";
import Burger from './menu/Burger';
import Salad from './menu/Salad';
import Snack from './menu/Snack';
import Drink from './menu/Drink';



function App() {
  return (
     <div className="Restaurant">    
       <h2><GrRestaurant/> Restaurants Menu App</h2> 
       <IconContext.Provider value={{ className: "top-react-icons" }}>
       <FaPizzaSlice/>
       <Pizza/>
       <GiHamburger/>
       <Burger/>
       <IoMdRestaurant/>
       <Salad/>
       <MdOutlineFastfood/>
       <Snack/>
       <BiDrink/>
       <Drink/>
        </IconContext.Provider>
     </div>  
  );
}

                  
export default App;
