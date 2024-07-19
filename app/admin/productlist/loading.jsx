"use client"
import { newtonsCradle } from 'ldrs'
import React,{useState} from 'react'
newtonsCradle.register()
const Loading = () => {

  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
      setShowForm(false);
    }, 2000)
  }
  return (
    <div className="loading-container">
            <l-newtons-cradle 
            size='78'
            speed='1.4'
            color='black'>
            </l-newtons-cradle>
  </div>  
);
};

export default Loading;