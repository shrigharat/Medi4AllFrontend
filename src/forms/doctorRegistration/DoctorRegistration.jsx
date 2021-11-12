import React from 'react'
import "./DoctorRegistration.scss"

const DoctorRegistration = () => {
    return(
        <section>
      
        <div class="contentBx">
            <div class="formBx">
                <h2>Registration</h2>
                <form>
                    <div class="auth-details">
                        <input type="radio" name="auth" id="dot-1"/>
                        <input type="radio" name="auth" id="dot-2"/>
                        <input type="radio" name="auth" id="dot-3"/>


                        <span class="auth-titile">Select Identification</span>
                        <div class="category">
                            <label for="dot-1 ">
                                <span class="dot one"></span>
                                <span class="auth">User</span>
                            </label>
                            <label for="dot-2">
                                <span class="dot two"></span>
                                <span class="auth">Student</span>
                            </label>
                            <label for="dot-3">
                                <span class="dot three"></span>
                                <span class="auth">Institution</span>
                            </label>
                        </div>
                    </div>

                    <div class="inputBx">
                        <span>Name</span>
                        <input type="text" name=""/>
                    </div>

                    <div class="inputBx">
                        <span>Email Address</span>
                        <input type="text" name=""/>
                    </div>

                    <div class="inputBx">
                        <span>Contact Number</span>
                        <input type="phone" name=""/>
                    </div>
                    <div class="inputBx">
                        <span>Date Of Birth</span>
                        <input type="date" name=""/>
                    </div>
                    <div class="inputBx">
                        <span>Gender</span>
                        <div class="custom_select">
                            <select>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div class="inputBx">
                        <span>Degree</span>
                        <div class="custom_select">
                            <select>
                                <option value="">Select</option>
                                <option value="male">MBBS</option>
                                <option value="female">BDS</option>
                                <option value="female">MD</option>
                                <option value="female">MS</option>
                                <option value="female">DM</option>
                                
                            </select>
                        </div>
                    </div>

                    <div class="inputBx">
                        <span>Speciality</span>
                        <input type="text" name=""/>
                    </div>



                    <div class="inputBx">
                        <span>Years Of Experience</span>
                        <input type="phone" name=""/>
                    </div>

                    <div class="inputBx">
                        <span>Availability</span>
                        <form>
                            <label class="checkbox-inline">
                                <input type="checkbox" value=""/>Su
                                <span class="checkmarks"></span>
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value=""/>Mo
                                <span class="checkmarks"></span>
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value=""/>Tu
                                <span class="checkmarks"></span>
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value=""/>We
                                <span class="checkmarks"></span>
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value=""/>Th
                                <span class="checkmarks"></span>
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value=""/>Fr
                                <span class="checkmarks"></span>
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value=""/>Sa
                                <span class="checkmarks"></span>
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value=""/>Every day
                                <span class="checkmarks"></span>
                            </label>
                        </form>



                    </div>




                    <div class="inputBx">
                        <span>Address</span>
                        <input type="text" name=""/>
                    </div>

                    <div class="inputBx">
                        <span>Password</span>
                        <input type="password" name=""/>
                    </div>
                    <div class="inputBx">
                        <span> Confirm Password</span>
                        <input type="password" name=""/>
                    </div>
                    
                    <div class="inputBx">
                        <input type="submit" value="Log IN" name=""/>
                    </div>
                    <div class="inputBx">
                        <p>Already have an account ?<a href="#">Login now</a></p>
                    </div>
                </form>

            </div>
        </div>
    </section>
  

    )
}
    
export default DoctorRegistration