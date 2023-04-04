import { useState } from "react";
import './CustomerForm.scss';

export function CustomerForm(){

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    console.log(fullName,email,address)

    return(
        <form className="customer-form">
              <div className="customer-form__row">
                <div className="customer-form__row-item">
                  <label htmlFor="name" className="cart__field-label">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="customer-form__field"
                    placeholder="Your full name"
                    pattern="^(\w{3,})\s(\w+)$"
                    required
                    value={fullName}
                    onChange={(e)=>setFullName(e.target.value)}
                  />
                </div>
                <div className="customer-form__row-item">
                  <label htmlFor="email" className="cart__field-label">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="customer-form__field"
                    placeholder="example@yourmail.com"
                    pattern="[a-z0-9._]+@[a-z.-]+\.[a-z]{2,}$"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="customer-form__row">
                <div className="customer-form__row-item">
                  <label htmlFor="address" className="cart__field-label">
                    Address*
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="customer-form__field"
                    placeholder="Your company  address"
                    pattern="[A-Za-z0-9'\.\-\s\,]"
                    required
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                  />
                </div>
                <div className="customer-form__row-item">
                  <label htmlFor="phone" className="cart__field-label">
                    Phone number*
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="customer-form__field"
                    placeholder="Enter your phone"
                    pattern="\d{10}"
                    required
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                </div>
              </div>
              <label className="cart__field-label">
                Message
                <textarea
                  placeholder="Some extra information"
                  className="customer-form__field message-field"
                  pattern="\w\s"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
              </label>
            </form>
    )
}