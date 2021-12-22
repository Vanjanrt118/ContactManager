import { useState } from "react"
const Contact = ({id,name,email,phone,deleteContack}) => {
    const [displayInfo, setDisplayInfo] = useState(false)
    return (
        <div className="card card-body mb-3" id={id}>
            <h4 className="bg-warning">{name}
            <i className="fas fa-angle-down" style={{cursor:'pointer'}} onClick={()=>{setDisplayInfo(!displayInfo)}}></i>
            <i className="fas fa-times text-danger" style={{float:'right'}} onClick={()=>deleteContack(id)}></i>    
            </h4>
            {displayInfo? 
            <ul className="list-group">
                <li className="list-group-item"><span className='text-danger font-weight-bold'>  Email:</span> {email}</li>
                <li className="list-group-item"> <span className='text-danger font-weight-bold'>Phone: </span> {phone}</li>
            </ul>
            :null
            }
        </div>
    )
}

export default Contact
