import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/userContext'

const UserSignup = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [userData,setUserData]=useState({})

const navigate=useNavigate()


const{user,setUser}=React.useContext(UserDataContext)


  const submithandler=async(e)=>{
    e.preventDefault();
    const newUser={
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password
    }
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
    if(response.status==201){
      const data=response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
    
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
   
  }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
        <form onSubmit={(e)=>{
            submithandler(e)
        }}>
            
            <h3 className='text-base font-medium mb-2'>What's your Name</h3>
            <div className='flex gap-4 mb-6'>
            <input 
            required 
         
            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder-text-sm'
            type="text" 
            placeholder='First Name'
            value={firstName}
            onChange={(e)=>{
                setFirstName(e.target.value)
            }}

            />
             <input 
            required 
         
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder-text-sm'
            type="text" 
            placeholder='Last Name'
            value={lastName}
            onChange={(e)=>{
                setLastName(e.target.value)
            }}
            />
            </div>
            <h3 className='text-base font-medium mb-2'>What's your email</h3>
            <input 
            required 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
         
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder-text-base'
            type="email" 
            placeholder='email@example.com'
            />

            <h3 className='text-base font-medium mb-2'>Enter Password</h3>
            <input             
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder-text-base'
            value={password}
            onChange={(e)=>{
            setPassword(e.target.value)
            }}           
            required type="password" 
            placeholder='password'
            />
            <button  
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder-text-base'>
                Create Account
            </button>
           <p className='text-center'>Already have an Account ?  <Link to='/login' className='text-blue-600'>Login Here</Link></p>
        </form>
        </div>
        <div>
        <p className='text-[12px] leading-tight'>This site is protected byCAPTCHA and the Google<b className='underline'>Privacy policy</b>  and <b className='underline'> Terms of Service</b> apply</p>
        </div>
    </div>
    </div>
  )
}

export default UserSignup
