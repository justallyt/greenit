import axios from "axios"
import { useForm } from "react-hook-form"
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha"

const DonationForm = () => {
  const URL_PATH = import.meta.env.VITE_DONATE_API_PATH;
  const [captchaTokenMsg, setCaptchaTokenMsg] = useState('')
  const [btnMsg, setBtnMsg] = useState("Send Donation Interest")
  const [serverMsg, setServerMsg] = useState("");
  const { register, handleSubmit, formState: {errors}, reset} = useForm();
  const recaptchaRef = useRef();

  const submitDonationInterest = (form_data) => {
            const token = recaptchaRef.current.getValue();
            if(token === ''){
                  setCaptchaTokenMsg('You must confirm the google recaptcha')
            }else{
                 setBtnMsg("Sending...");
                 axios.post(URL_PATH, { 
                      token: token,
                      form_data: form_data
                 }).then(res => {
                        setServerMsg(res.data.message);
                         reset();
                         recaptchaRef.current.reset();
                  }).finally(() => {
                      setBtnMsg("Interest Sent")
                      setTimeout(() => {
                         setBtnMsg('Send Donation Interest');
                         setServerMsg("")
                      }, 4500)
                  } 
                  )
            }
  }

  return (
    <div className="donation-form-section">
                <div className="inner-row">
                          <div className="donation-form-content">
                                     <h2>Fill in the Details below</h2>

                                     <form onSubmit={handleSubmit(submitDonationInterest)}>
                                                 <div className="form-row">
                                                            <label htmlFor="name">Full Name <span className="error">*</span></label>
                                                            <input type="text" {...register('name', { required: 'This input is required'})}  className="form-control"/>
                                                            <span className="error">{errors.name && errors.name.message}</span>
                                                 </div>
                                                 <div className="form-row">
                                                            <label htmlFor="email">Email Address <span className="error">*</span></label>
                                                            <input type="text"{...register("email", { required: "This input is required"})} className="form-control"/>
                                                            <span className="error">{errors.email && errors.email.message}</span>
                                                 </div>
                                                 <div className="form-row">
                                                          <label htmlFor="phone">Phone Contact</label>
                                                          <input type="number" {...register("phone")} className="form-control" pattern="+[0,9]"/>
                                                 </div>
                                                 <div className="form-row">
                                                             <label htmlFor="organization type">Type of Organization <span className="error">*</span></label>
                                                             <input type="text"  className="form-control" {...register('organization_type', { required: 'This in put is required'})} placeholder=""/>
                                                             <span className="error">{errors.organization_type && errors.organization_type.message}</span>
                                                 </div>
                                                 <div className="form-row">
                                                             <label htmlFor="amount to donate">
                                                                         Amount to Donate
                                                                         <span className="error">*</span>
                                                             </label>
                                                             <select className="form-control" {...register('donation_range', { required: 'This input is required'})}>
                                                                          <option value="">Select a range</option>
                                                                          <option value="1$-250$">1$ - 250$</option>
                                                                          <option value="250$ - 500$">250$ - 500$</option>
                                                                          <option value="500$ - 1000$">500$ - 1000$</option>
                                                                          <option value="1000$ and above">1000$ and Above</option>
                                                             </select>
                                                             <span className="error">{errors.donation_range && errors.donation_range.message}</span>
                                                 </div>
                                                 <div className="form-row">
                                                             <label htmlFor="details">Any extra details you may have</label>
                                                             <textarea {...register('extra')} cols="30" rows="10"></textarea>
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

export default DonationForm