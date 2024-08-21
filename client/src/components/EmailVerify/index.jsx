import { Link, useParams } from 'react-router-dom'
import styles from './styles.module.css'
import  {useState,useEffect} from 'react'
import axios from 'axios'
const EmailVerify=() => {

    const [validUrl,setValidUrl]=useState(false)
   const parms=useParams();
   console.log(parms);
   useEffect(() => {

    const verifyEmailUrl=async () => {
        try {
            const url =`http://localhost:8080/api/users/${parms.id}/verify/${parms.token}`
            const {data}=await axios.get(url)
            console.log(data);
            setValidUrl(true)

        } catch (error) {
            console.log(error);
            setValidUrl(false)
            
        }
    }    
   verifyEmailUrl()
   
     
   }, [parms])
   
   
   
   return (
<>
{validUrl?(
<div className={styles.container}>
    <h1>Email Verified Successfully</h1>
    <Link to="/login">
    <button className={styles.green_btn}>Login</button>
    </Link>
</div>
):(
    <h1>404 NotFound</h1>
)}


</>
    )
}


export default EmailVerify