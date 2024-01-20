import React from 'react'
import './UploadDriverInfoPage.css';

function UploadDriverInfoPage() {
  return (
    <div className="Big_container">
    <header>Registration</header>
    <form action="#">
               <div className="form_first">
                 <div className="details personal">
                    <span className="title_name">Owner Identity</span>
                      <div className="fields_name">
                        <div className="input_field">
                            <label>Holder name</label>
                            <input type="text" placeholder="Enter your Name" required/>
                        </div>

                        <div className="input_field">
                            <label>Address</label>
                            <input type="text" placeholder="Enter your Address" required/>
                        </div>

                        <div className="input_field">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your Email" required/>
                        </div>

                        <div className="input_field">
                            <label>Mobile Number</label>
                            <input type="number" placeholder="Enter your Number" required/>
                        </div>

                        <div className="input_field">
                            <label>Gender</label>
                            <input type="text\" placeholder="Enter your Gender" required/>
                        </div>

                        <div className="input_field">
                            <label>Nid</label>
                            <input type="number" placeholder="Enter your Nid" required/>
                        </div>

                      </div>
                 </div>
                 <div className="details ID">
                    <span className="title_name">Car Identity</span>
                      <div className="fields_name">
                        <div className="input_field">
                            <label>Licence Number</label>
                            <input type="text" placeholder="Driving licence" required/>
                        </div>

                        <div className="input_field">
                            <label>vehicle Type</label>
                            <input type="text" placeholder="Vehicle Name" required/>
                        </div>

                        <div className="input_field">
                            <label>Plate Number</label>
                            <input type="email" placeholder="Enter Plate Number" required/>
                        </div>

                        <div className="input_field">
                            <label>Add vehicle Image</label>
                            <input type="file" placeholder="Enter your Number" required/>
                        </div>

                        <div className="input_field">
                           
                            <input type="file" placeholder="Enter your Gender" required/>
                        </div>

                        <div className="input_field">
                        
                            <input type="file" placeholder="Enter your Occupation" required/>
                        </div>

                      </div>

                      <button className="next_Btn">
                           <span className="btn_Text">Submit</span>
                      </button>
                 </div>

               </div>
    </form>

</div>

  )
}

export default UploadDriverInfoPage