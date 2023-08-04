import React from 'react'
import "../App.css";

function Form() {
    return (
        <div className='form-container'>
            <div className='form-box'>
                <div className='form-content'>
                    <h2>Address</h2>

                    <form id='#form' method='post'>
                        <label htmlFor="">Address Line 1</label>
                        <input type="text" name='address-1' placeholder='' />

                        <label htmlFor="">Address Line 2</label>
                        <input type="text" name='address-2' />

                        <label htmlFor="">City</label>
                        <input type="text" name='city' />

                        <label htmlFor="">Postal Code</label>
                        <input type="text" name='postal-code' />

                        <label htmlFor="">State</label>
                        <select name="state" id="selectors">
                            <option value="" selected>select one</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </form>
                </div>
                <div className='bottom-container email-box '>
                    <h3>Email Address</h3>
                    <p>krakesh7788@gmail.com</p>
                </div>

                <div className='button-box bottom-container'>
                    <input  className='btn' type='button' value='Save and Continue' />
                </div>
            </div>
        </div>
    )
}

export default Form