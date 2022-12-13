
import './App.css';
import Message from './Mensaje';



const Mensaje=()=>{
return(
  <h1>Hello this is a mesesage</h1>
)

}



const App = () =>{

  const mensaje= 'Hola'
  const a=2
  const b=3

  return (
    // esto no es html es jsx 
    /// solo se puede renderizar elementos  validos 
    <div className="App">
      <h1>Titulo de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es: </p>
        {a+b}
      </div>
      <br>
      
      </br>
      {mensaje + 'prueba de jsx'} 

      <Mensaje />
      <Message message="hola esto es un params" color="green"/>
    </div>
    //
  )
}

export default App;
