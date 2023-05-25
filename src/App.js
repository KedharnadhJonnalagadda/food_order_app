import React,{ useState} from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './store/CartProvider';
const App=()=>{

  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandelr=()=>{
    setCartIsShown(true);
  }
  const hideCartHandelr=()=>{
    setCartIsShown(false);

  }

  return (<CartProvider>

    {cartIsShown && <Cart onHideCart={hideCartHandelr} key={234}/>} 
    <Header onShowCart={showCartHandelr} />
   <main>
    <Meals />
   </main>
  </CartProvider>);
};
export default App;