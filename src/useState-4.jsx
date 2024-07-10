import react, {useState} from 'react'

const App = () => {

  const [firstname,setFirstname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const inputChange = (e, name)=>{
    console.log(e.target.value,name);
    if(name=='firstname'){
      setFirstname(e.target.value)
    }
    else if(name=='email'){
      setEmail(e.target.value)
    }
    else if(name=='password'){
      setPassword(e.target.value)
    }
  }
  
  return(
    <div>
      <form>
          <input type="text" name="firstname" id="firstname" placeholder="Enter first name" onChange={(e)=>inputChange(e,"firstname")}/><br/>
        <input type='email' name="email" id="email" placeholder='Enter email' onChange={(e)=>inputChange(e,"email")}/><br/>
        <input type="password" name="password" id='password' placeholder='Enter password' onChange={(e)=>inputChange(e,"password")}/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;