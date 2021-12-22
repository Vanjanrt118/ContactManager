import { useState } from "react"
const Test = () => {
    const [state,setState]=useState([]
     

    );
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data=>setState(  {
    'userId':data.userId,
    'id':data.id,
    'title':data.title
}))
    return (
        <div>
            
        </div>
    )
}

export default Test
