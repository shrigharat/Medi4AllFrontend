import React from 'react'
import "./Login.scss"

const LoginForm = () => {
    return (
        <section>

            <div class="contentBx">
                <div class="formBx">
                    <h2>Login</h2>
                    <form>
                        <div class="auth-details">
                            <input type="radio" name="auth" id="dot-1" />
                            <input type="radio" name="auth" id="dot-2" />
                            <input type="radio" name="auth" id="dot-3" />


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
                            <span>Email Address or Username</span>
                            <input type="text" name="" />
                        </div>
                        <div class="inputBx">
                            <span>Password</span>
                            <input type="password" name="" />
                        </div>
                        <div class="pass"><a href="#">Forgot password?</a></div>
                        <div class="inputBx">
                            <input type="submit" value="Log IN" name="" />
                        </div>
                        <div class="inputBx">
                            <p>Don't have an account ?<a href="#">Register now</a></p>
                        </div>
                    </form>

                </div>
            </div>
        </section>

    )
}

export default LoginForm
