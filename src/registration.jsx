import React,{useState,useEffect} from 'react';
import axios from'axios';
export default function Registration(){
  const BLOCKED_DATE='2025-08-31';
  const [message,setMessage]=useState('');
  const [form,setForm]=useState({
    name:'',
    age:'',
    email:'',
    feedback:'',
    image:null,
    date:'',
    time:''
  });

  const isDateDisabled=(date)=>{
    if(!date) return false;
    const d=new Date(date);
    if(d.getDay()===0)return true;
    if(date===BLOCKED_DATE)return true;
    return false;
  };
  //const[view,setView]=useState('');

  const handleChange=(e)=>{
    if (e.target.name==='image'){
      setForm({...form,image:e.target.files[0]});
    }
    else{
      setForm({...form,[e.target.name]:e.target.value});
    }
  };


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const data=new FormData();
    data.append('name',form.name);
    data.append('age',form.age);
    data.append('email',form.email);
    data.append('feedback',form.feedback);
    data.append('image',form.image);
    data.append('date',form.date);
    data.append('time',form.time);
    if(isDateDisabled(form.date)){
    setMessage('Sorry! appoinments cannot be booked on selected date!');
    return;}
    try{
      const response=await axios.post('https://frontendbackendeg.pythonanywhere.com/register',data);
      setForm({
        name:'',
        age:'',
        email:'',
        feedback:'',
        image:null,
        date:'',
        time:''
      });
      setMessage('form submitted succesfully');}
      catch(error){
        console.error('Error occured while submiting form',error);
        setMessage('Error submitting form!');
      }
    };

    return(
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Enter name:
          </label>
          <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          />
          <br></br>
          <label>
            Enter age:
          </label>
          <input
          type='text'
          name='age'
          value={form.age}
          onChange={handleChange}/>
          <br></br>
          <label>
            Enter email:
          </label>
          <input
          type='text'
          name='email'
          value={form.email}
          onChange={handleChange}
          />
          <br></br>
          <label>
            Enter feedback:
          </label>
          <input
          type='text'
          name='feedback'
          value={form.feedback}
          onChange={handleChange}
          />
          <br></br>
          <label>
            Upload profilepic:
          </label>
          <input
          type='file'
          name='image'
          onChange={handleChange}
          />
          <br></br>
           <label>
            Enter time of appoinment:
          </label>
          <input
          type='time'
          name='time'
          value={form.time}
          onChange={handleChange}
          />
          <br></br>
          <label>
            Enter date of appoinment:
          </label>
          <input
          type='date'
          name='date'
          value={form.date}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          />
          <br></br>
          <input type='Submit' value='Submit'></input>
          <p>{message}</p>
        </form>
      </div>
    );

}
