import React, { useState } from 'react'

import Api from './Api/Api'
import { useNavigate } from 'react-router-dom'
import './css/login.css'

function Login() {
    const [email, setemail] = useState('') 
    const [password, setpassword] = useState('')
    const [alladmin, setalladmin] = useState([]) 
    console.log(alladmin);
    let navigate = useNavigate();
    let handleemail = (event)=>{
        setemail(event.target.value)
    } 


    let handlepass= (event)=>{
        setpassword(event.target.value)
    } 
    

    let checkLogin = async (event)=>{
        event.preventDefault();
        Api.fetchData('admin').then((result)=>{
          setalladmin([...result]) 
          console.log(alladmin)
                let ads =  alladmin.filter(item=>item.email==email && item.password == password) 
                console.log(ads);
                if(ads.length>=1)
                {
                    localStorage.setItem('email',email)
                    navigate('/Crad')
                }
                else 
                {
                    // alert("nathi email ")
                    console.log(

                    )
                }



        })


    }
  return (
    <div >
         <head>
    <meta charset="utf-8"/>
    <title>Amazon</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
 </head>
  
  

    <header>
      <div class="d-flex flex-row justify-content-center">
        <div class="row">
          <div class="col-md">
            <img class="img_1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGziCTrkNwarbW5bzfj5xTcXCPpRYwzkXuQPO0Y7_J&s" alt="Amazon Logo"/>
          </div>
        </div>
      </div>

   </header>     
     

      <div class="d-flex flex-row justify-content-center">
        <div class="row">
          <div class="col-md">
           <form  onSubmit={checkLogin}>
             <div class="sign-in">Sign In</div>  
                
  <div class="form-group">
    <label id="words_1" for="exampleInputEmail1">Email(phone for mobile accounts)</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleemail}/>
    
  </div>
  <div class="form-group">
    <label id="words_2" for="exampleInputPassword1">Password   </label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"onChange={handlepass}/>
    <div class="form-group">
      <button type="submit" class="btn btn-warning" id="sign-in">Sign In</button>
     
      <p class="keep-sign-in">Keep me signed in. <a href="https://stupidlink.com">Details</a></p>
      <img id="amazon-img" src="https://logodownload.org/wp-content/uploads/2018/07/prime-video.png" alt="Amazon Image"/>
    </div>
  </div>
  <div class="form-check">
   
    
  </div>
  <button type="button" class="btn btn-warning" id="grey-button">Create your Amazon account</button>
  
</form> 
          </div>
        </div>
      </div>

      
      
      

<div class="d-flex flex-row justify-content-center footer_1">
  <div class="row">
    <div class="col">
      <p class="conditions"><a>Conditions of Use &nbsp &nbsp &nbsp </a>   <a>Privacy Notice&nbsp &nbsp &nbsp </a>   <a>Help&nbsp &nbsp &nbsp </a></p>
    </div>
  </div>
  
    </div>

    </div>
  )
}

export default Login;