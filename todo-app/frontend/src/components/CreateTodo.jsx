function CreateTodo(){
    return (
        <div>
            <input id="titl" style={{
                padding: "10px",
                margin: "10px",
                borderRadius: "10px"
            }}
            type="text" placeholder="Title" />
            <br/>

            <input id="desc" style={{
                padding: "10px",
                margin: "10px",
                borderRadius: "10px"
            }} 
            type="text" placeholder="Description" />
            <br/>

            <button style={{
                padding: "10px",
                margin: "10px",
                borderRadius: "10px"
            }} onClick={()=>{
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: document.getElementById("titl").value,
                        description: document.getElementById("desc").value
                    })
                })
                .then(async function(res){
                    const json = await res.json()
                    alert("Todo is created")
                })
            }}>Add Todo</button>
            
        </div>
    )
}

export default CreateTodo