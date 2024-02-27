import React from 'react';
import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {useSelector,useDispatch} from "react-redux"
import {toast} from "react-hot-toast";

const Login = () => {
  const dispatch=useDispatch()
  const nav = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const email = e.target.elements.email.value 
    const pass = e.target.elements.password.value
    if(email==="ankeetnepali6@gmail.com" && pass==="ankit"){
        nav("/cart")
        toast.success("Login sucessful")
        const token = "12345";
        localStorage.setItem("_token",token)
        dispatch({
          type: "LOGIN",
          payload:{
            isLogged: true,
            token: token
          },
        })
    }else{
      toast.error(`Incorrect`)
    }
  }
  return (
    <>
    <div className="container" style={{display: "grid", placeItems: "center", height: "50vh"}}>
      <h1>Login</h1>
    <form onSubmit={handleSubmit} style={{width: "50%", justifyContent: "center", alignItems: "center", margin: "10"}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" required name='email'id='example-email'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password'id='example-pass'/>
  </div>
  <button type="submit" className="btn btn-danger" style={{justifyContent: "center"}}>Submit</button>
</form>
</div>
    </>
  )
}
export default Login;