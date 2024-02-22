import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha"

const ContactBody = () => {
  const API_PATH = import.meta.env.VITE_CONTACT_API_PATH;
  const [captchaTokenMsg, setCaptchaTokenMsg] = useState('')
  const [btnMsg, setBtnMsg] = useState("Send Message");
  const [serverMsg, setServerMsg] = useState("")
  const { register, handleSubmit , formState: { errors }, reset} = useForm();
  const recaptchaRef = useRef();

  const submitContactForm = (form_data) => {
          const token = recaptchaRef.current.getValue();
          if(token === ''){
                setCaptchaTokenMsg('You must confirm the google recaptcha')
           }else{
               setBtnMsg('Sending...');
               axios.post(API_PATH, {
                  token: token,
                  form_data: form_data
              }).then(res => {
                      setServerMsg(res.data.message);
                      reset();
                      recaptchaRef.current.reset();
                }).finally(() =>{
                     setBtnMsg('Sent')
                     setTimeout(() => {
                          setBtnMsg('Send Message');
                          setServerMsg('')
                     }, 4500)
                })
           }        
}




  return (
    <div className="contact-body-section">
                 <div className="inner-row">
                              <div className="contact-body-content">
                                         <form onSubmit={handleSubmit(submitContactForm)}>
                                                    <div className="form-row split">
                                                                <div className="form-column">
                                                                            <label htmlFor="firstname">Firstname <span>*</span></label>
                                                                            <input type="text" {...register('firstname', { required: 'This input field is required'})} className="form-control" />
                                                                            <span className="error">{errors.firstname && errors.firstname.message}</span>
                                                                </div>
                                                                <div className="form-column">
                                                                            <label htmlFor="lastname">Lastname <span>*</span></label>
                                                                            <input type="text" {...register('lastname', { required: 'This input field is required'})} className="form-control" />
                                                                            <span className="error">{errors.lastname && errors.lastname.message}</span>
                                                                </div>
                                                    </div>
                                                    <div className="form-row split">
                                                                <div className="form-column">
                                                                            <label htmlFor="firstname">Email <span>*</span></label>
                                                                            <input type="email" {...register('email', { required: 'This input field is required'})} className="form-control" />
                                                                            <span className="error">{errors.email && errors.email.message}</span>
                                                                </div>
                                                                <div className="form-column">
                                                                            <label htmlFor="subject">Subject <span>*</span></label>
                                                                            <input type="text" className="form-control" {...register('subject', { required: 'This input field is required'})} />
                                                                            <span className="error">{errors.subject && errors.subject.message}</span>
                                                                </div>
                                                    </div>
                                                    <div className="form-row">
                                                               <label htmlFor="message">Message <span>*</span></label>
                                                               <textarea  {...register('msg', { required: 'This input field is required'})}  cols="30" rows="10"></textarea>
                                                               <span className="error">{errors.msg && errors.msg.message}</span>
                                                    </div>
                                                    <div className="form-row">
                                                          <ReCAPTCHA 
                                                                      sitekey={import.meta.env.VITE_GOOGLE_SITE_KEY}
                                                                      ref={recaptchaRef}
                                                                      onChange={() => setCaptchaTokenMsg('')}
                                                           />
                                                            <span className="error">{captchaTokenMsg}</span>
                                                    </div>
                                                    <div className="form-btn">
                                                               <button type="submit">{btnMsg}</button>
                                                    </div>
                                         </form>
                                         <p className="server-msg">{serverMsg}</p>
                              </div>
                 </div>
                 
    </div>
  )
}

export default ContactBody