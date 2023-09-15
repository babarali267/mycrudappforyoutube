import axios from "axios"

const Update  = ({name,lastname,id,setLastName,setName})=>{


  const UpdateHandel = ()=>{
     axios.put(`https://65035ca9a0f2c1f3faebd985.mockapi.io/students/${id}`,{
           name : name,
           lastname:lastname
     }).then((res)=>{
         console.log(res);
         window.location.reload()
     })
  }


     return(<>
          <div className="update_form">
                <p>{id}</p>

               <h1>Update Student</h1>

                <div className="form_div">
                  <input  type="text"  value={name} 
                   onChange={(e)=> setName(e.target.value)}/>
                  <input  type="text"  value={lastname}
                   onChange={(e)=> setLastName(e.target.value)}/>

                  <button onClick={UpdateHandel}>Update</button>
                </div>

          </div>
     </>)
}


export default Update