import React, { useEffect ,useContext} from 'react'
import userContext from '../../context/userContext'


function AccountDetails() {
    const {getUserLoginDetails} = useContext(userContext);
    useEffect(()=>{
        const fetchData = async () => {
            const {sessionId,userId} = getUserLoginDetails();
            console.log(sessionId,userId)
            // const options = {
            //     method : "POST",
            //     body : JSON.stringify({
            //         "userId":"657223d052b5f0d7ee32"
            //     }),
            //     headers: {
            //         "Content-type": "application/json; charset=UTF-8"
            //     }
            // }
            // const data = await fetch('http://localhost:4500/getUserDetails',options);
            // const d = await data.json();
            // console.log(d);
            fetch("http://localhost:4500/getUserDetails", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
        }
        fetchData();
    },[])
  return (
    <div className='h-screen text-xl text-white bg-black'>AccountDetails</div>
  )
}

export default AccountDetails