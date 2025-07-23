
function App(){//these are components that usally start with captial letters and we can write html code in this 
  return <div>
    <h1> this is my app component</h1>
    <Fruit/>
    <Color/>
    <sum/>
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