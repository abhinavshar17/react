function Lec1(){
  const name="Abhinav";
  let x =10; // storing values in a varibale 
  let y=20;
  function fruits(){
    return "Apple"
  }
  function operation(a,b,op){
    
    if(op=="+"){
        return a+b;
    }
    else if(op=="-"){
        return a-b;
    }
  }
  return(
    
    <div>
    <h1>jsx with curly brackets</h1>
    <h2>{name}</h2>
    <h2>area of rectangle :{x*y}</h2>
    <h1>{fruits()}</h1> // calling a function
    </div>
  )
}
export default Lec1;