import React from 'react'
import "./UserRegistration.scss"

const UserRegistration = () => {
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
                        <span>Full Name</span>
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
                         </div>
                       
                <div class="custom_select">
                    <input type="date"/>
                    </div>
                    
                    <div class="auth-details">
                        <input type="radio" name="auth" id="dot-1"/>
                        <input type="radio" name="auth" id="dot-2"/>
                        <input type="radio" name="auth" id="dot-3"/>


                        <span class="auth-titile">Gender</span>
                        <div class="category">
                            <label for="dot-1 ">
                                <span class="dot one"></span>
                                <span class="auth">Male</span>
                            </label>
                            <label for="dot-2">
                                <span class="dot two"></span>
                                <span class="auth">Female</span>
                            </label>
                            <label for="dot-3">
                                <span class="dot three"></span>
                                <span class="auth">Prefer not to say</span>
                            </label>
                        </div>
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
    
    export default UserRegistration