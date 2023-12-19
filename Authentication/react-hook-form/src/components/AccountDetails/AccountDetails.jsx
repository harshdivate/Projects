import React, { useEffect ,useContext,useState } from 'react'
import userContext from '../../context/userContext'
import './AccountDetails.css';


function AccountDetails() {
    const {getUserLoginDetails} = useContext(userContext);
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const {sessionId,userId} = getUserLoginDetails();
            console.log(sessionId,userId)
            const options = {
                method : "POST",
                body : JSON.stringify({
                    "userId":userId,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
            const result = await fetch('http://localhost:4500/getUserDetails',options);
            const d = await result.json();
            setData(d)
            
        }
        fetchData();
    },[])
  return (
    <div className=' mx-auto bg-black text-white' >
        <div className=' text-4xl  text-center'>AccountDetails</div>
        <div className='h-screen flex justify-center items-center'>
            <div className='w-1/4 h-[400px] border flex flex-col justify-around items-start border-white'>
                <div className="m-4  flex text-2xl font-bold w-full justify-center items-center  ">
                   <div>Welcome {data.name}</div>
                            
                </div>
                   
                <div className='m-4'>
                    <div className='text-lg'>Name</div>
                    <div className='text-xl text-black p-2 rounded-lg bg-white'>{data.name}</div>
                    
                </div>
                <div className='m-4'>
                    <div className='text-lg'>Email</div>
                    <div className='text-xl text-black p-2 rounded-lg bg-white'>{data.email}</div>
                </div>
                <div className='m-4'>
                    <div className='text-lg'>Phone</div>
                    <div className='text-xl text-black p-2 rounded-lg bg-white'>{data.phone}</div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default AccountDetails