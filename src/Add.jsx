import { useState } from "react"
import axios from 'axios'

const Add  =({getData})=>{
  
    const [name,setName] = useState('')
    const [lastname,setLastName] = useState('')
    const [alert,setAlert]    = useState('')


    const onsubmitHandel =(e)=>{
            e.preventDefault()
          
            axios.post('https://65035ca9a0f2c1f3faebd985.mockapi.io/students',{
                 name: name,
                 lastname: lastname
            }).then(()=>{
                   setAlert('data Has insert')
                   setName('')
                   setLastName('')
                   getData()
            })


    }

     return(<>
       
         <div className="add_data"> 
           
                <h1>Students</h1>
                 <span className="alert_s"> {alert}</span>
                <div className="form_div">
                     <input type="text" value={name} 
                     onChange={(e)=> setName(e.target.value)}  placeholder="name"/>   

                     <input type="text"  placeholder="Last Name" value={lastname}
                     onChange={(e)=> setLastName(e.target.value)}/>   
                     <button onClick={onsubmitHandel}>Add Item</button>
                </div>
         </div>
     

     
     </>)
}

export  default Add