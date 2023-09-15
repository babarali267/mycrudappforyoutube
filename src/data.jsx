import axios from 'axios'
 import { useEffect, useState } from "react"
import Add from "./Add"
import Update from './update'
const UserData  = ()=>{

    const [data,setData] = useState([])
    const [alert,setAlert] = useState ('')

  function getData  (){
     axios.get('https://65035ca9a0f2c1f3faebd985.mockapi.io/students').then((res)=>{
        setData(res.data);
     })
  }

//  UpdateForm  get itemes into form 
  const [myid,setMyid] = useState('')
  const [u_name, Setu_name]  = useState('')
  const [u_lastname, Setu_lastname]  = useState('')

 const UpdateForm  =(id)=>{

      axios.get(`https://65035ca9a0f2c1f3faebd985.mockapi.io/students/${id}`).then((res)=>{
         console.log(res.data);

          Setu_name(res.data.name)
          Setu_lastname(res.data.lastname)
          setMyid(res.data.id)
      })

      document.querySelector('.update_form').classList.add('show')
      document.querySelector('.add_data').classList.add('hide')

 }



// deleteHandel 


const deleteHandel = (id)=>{
     axios.delete(`https://65035ca9a0f2c1f3faebd985.mockapi.io/students/${id}`).then(()=>{
          setAlert('Data Has been Delete')
          getData()
     })
}


  useEffect(()=>{
    getData()
  },[])



     return(<>

        <Add  getData={getData}/>
        <Update   name={u_name} lastname={u_lastname}  id={myid}
                setName = {Setu_name} setLastName = {Setu_lastname}/>

        <h1>Table Data</h1>
         <span className='d_alert'>{alert}</span>

        <table>
             <tr>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Update</th>
                 <th>Delete</th>
             </tr>

                  {
                    data.map((item)=>(
                        <tr>
                         <td> {item.name} </td>
                         <td>{item.lastname} </td>
                         <td>  <a className="u_btn"
                          onClick={()=>UpdateForm(item.id)}>Update</a> </td>
                         <td>  <a  className="d_btn"
                         onClick={()=> deleteHandel(item.id)}>Delete</a> </td>
                     </tr>
                    ))
                  }
    
            
        </table>

     </>)
}


export default UserData