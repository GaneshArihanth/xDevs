

function Todos({passedtodos}) {

  return (

    <div>
        {passedtodos.map(function(itertedtodo){

          return (
            <div>
              <h1>{itertedtodo.title}</h1>
              <h2>{itertedtodo.description}</h2>
              <button>{itertedtodo.completed ? "Completed" : "Mark as Completed"}</button>
            </div>   
          )
          
        })}
    </div>

  )
}

export default Todos

