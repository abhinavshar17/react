import Login from "./Usercomponent";
import Todo from "./Task";
import { Profile,Setting} from "./Usercomponent";
function App(){//these are components that usally start with captial letters and we can write html code in this 
  //  alert(sum());
  return <div>
    <Todo/>
    <Login/>
    <Profile/>
    <Setting/>
    <h1> this is my app component</h1>
    <Fruit/>
    <Color/>
  
   
  </div>
}
function sum(){ // this is a function usally start with small letter 
  return 10;
  <h1>hi everone</h1> // is cannot be accesd !!
}
function Fruit(){
  return (
  <h1>this is my fruit compent </h1>
  )
}

function Color(){
  return(
  <div>
    <h1>red color</h1>
    <h1>color compemnt</h1>
  </div>
  )
}

export default App