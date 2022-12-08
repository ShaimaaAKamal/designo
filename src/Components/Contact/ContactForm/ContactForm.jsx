import React, { useEffect } from 'react'

export default function ContactForm() {
  const handleChange=(e)=>{
    if(e.target.value === ''){
      e.target.nextSibling.classList.remove('d-none');
    }
    else{
            e.target.nextSibling.classList.add('d-none');
    }
  }
  const handleFocus=(e)=>{
        if(!e.target.nextSibling.classList.contains('d-none')) e.target.nextSibling.classList.add('d-none');
  }
  useEffect(()=>{
    const message=document.querySelector('#message');
    const messageError=document.querySelector('.messageError');  
    message.style.color='#FDBDB3';
    
    message.addEventListener('focus',function(){
    messageError.classList.add('d-none'); 
      if(message.value === 'Your Message')
           message.value='';
    });
     message.addEventListener('blur',function(){
      message.style.color=(message.value === 'Your Message') ?'#FDBDB3':'#fff'
    });
    message.addEventListener('change',function(){
      if(message.value === ''){
            messageError.classList.remove('d-none'); 
            message.value='Your Message';
            message.blur();
      }
    });
  },[])
  return (
    <>
      <div className="mb-3 position-relative">
      <input type="text" className="form-control form-control-lg" id="name" name='name' placeholder="Name" onChange={handleChange} onFocus={handleFocus}/>
      <small className='text-white position-absolute nameError error d-none end-0'>Can't be empty <i className="fa-solid fa-circle-exclamation"></i></small>
     </div>
      <div className="mb-3 position-relative">
      <input type="email" className="form-control form-control-lg" id="email" name='email' placeholder="Email Address" onChange={handleChange} onFocus={handleFocus}/>
       <small className='text-white position-absolute emailError error d-none end-0'>Can't be empty <i className="fa-solid fa-circle-exclamation"></i></small>
     </div>
      <div className="mb-3 position-relative">
      <input type="text" className="form-control form-control-lg" id="phone" name='phone' placeholder="Phone" onChange={handleChange} onFocus={handleFocus}/>
      <small className='text-white position-absolute phoneError error d-none end-0'>Can't be empty <i className="fa-solid fa-circle-exclamation"></i></small>
     </div>
     <div className="form-floating position-relative">
        <textarea className="form-control"  name='message' id="message" style={{height:'100px'}} defaultValue='Your Message' ></textarea>
        <small className='text-white position-absolute messageError error d-none end-0'>Can't be empty <i className="fa-solid fa-circle-exclamation"></i></small>

    </div>
    <div className='text-end mt-4'>
            <button className='darkBtn rounded-2 position-relative learnMoreBtn'>Submit</button>
    </div>
    </>
  )
}
