import React, { useEffect } from 'react'

export default function ContactForm() {
  useEffect(()=>{
    const message=document.querySelector('#message');
    message.style.color='#FDBDB3';
    message.addEventListener('focus',function(){
      if(message.value === 'Your Message')
           message.value='';
    });
     message.addEventListener('blur',function(){
      message.style.color=(message.value === 'Your Message') ?'#FDBDB3':'#fff'
    });
    message.addEventListener('keyup',function(){
      if(message.value === ''){
            message.value='Your Message';
            message.blur();
      }
    });
  },[])
  return (
    <>
      <div className="mb-3">
      <input type="text" className="form-control form-control-lg" id="name" name='name' placeholder="Name"/>
     </div>
      <div className="mb-3">
      <input type="email" className="form-control form-control-lg" id="email" name='email' placeholder="Email Address"/>
     </div>
      <div className="mb-3">
      <input type="text" className="form-control form-control-lg" id="phone" name='phone' placeholder="Phone"/>
     </div>
     <div className="form-floating">
        <textarea className="form-control"  name='message' id="message" style={{height:'100px'}} defaultValue='Your Message' ></textarea>
    </div>
    <div className='text-end mt-4'>
            <button className='darkBtn rounded-2 position-relative learnMoreBtn'>Submit</button>
    </div>
    </>
  )
}
