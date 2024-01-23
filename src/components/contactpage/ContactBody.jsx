
const ContactBody = () => {
  return (
    <div className="contact-body-section">
                 <div className="inner-row">
                              <div className="contact-body-content">
                                         <form action="">
                                                    <div className="form-row split">
                                                                <div className="form-column">
                                                                            <label htmlFor="firstname">Firstname <span>*</span></label>
                                                                            <input type="text" className="form-control" />
                                                                </div>
                                                                <div className="form-column">
                                                                            <label htmlFor="lastname">Lastname <span>*</span></label>
                                                                            <input type="text" className="form-control" />
                                                                </div>
                                                    </div>
                                                    <div className="form-row split">
                                                                <div className="form-column">
                                                                            <label htmlFor="firstname">Email <span>*</span></label>
                                                                            <input type="email" className="form-control" />
                                                                </div>
                                                                <div className="form-column">
                                                                            <label htmlFor="subject">Subject</label>
                                                                            <input type="text" className="form-control" />
                                                                </div>
                                                    </div>
                                                    <div className="form-row">
                                                               <label htmlFor="message">Message <span>*</span></label>
                                                               <textarea name="" id="" cols="30" rows="10"></textarea>
                                                    </div>
                                                    <div className="form-btn">
                                                               <button type="submit">Send Message</button>
                                                    </div>
                                         </form>
                              </div>
                 </div>
    </div>
  )
}

export default ContactBody