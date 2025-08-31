import React,{useState,useEffect} from 'react';
import axios from'axios';
export default function Admin(){
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get('https://backendeg.pythonanywhere.com/admin')
        .then(res=>setUsers(res.data))
        .catch(err=>console.error(err));
    },[]);

    return (
    <div>
        <h2>Registered users</h2>
        {Array.isArray(users)&&users.length === 0 ? (
            <p>No users found</p>
        ) : (
            users.map((user, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
                    <video controls>
                        <source src={user.image_url} type='video/mp4' />
                    </video>
                    <p>{user.date}</p>
                    <p>{user.time}</p>
                </div>
            ))
        )}
    </div>
);
}
