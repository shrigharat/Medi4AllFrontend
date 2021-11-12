import React from "react";
import "./InstituteRegistration.scss";

const InstituteRegistration = () => {
  return (
    <section>
      <div class="contentBx">
        <div class="formBx">
          <h2>Registration</h2>
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
              <span>Name</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Registration Number</span>
              <input type="phone" name="" />
            </div>
            <div class="inputBx">
              <span>Email Address</span>
              <input type="text" name="" />
            </div>

            <div class="inputBx">
              <span>Contact Number</span>
              <input type="phone" name="" />
            </div>
            <div class="inputBx">
              <span>Helpline Number</span>
              <input type="phone" name="" />
            </div>
            <div class="inputBx">
              <span>Medical Insurance</span>

              <form>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  All
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Cashless
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Reimbursement
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  TPA
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Any Other+
                  <span class="checkmarks"></span>
                </label>
              </form>
            </div>
            <div class="inputBx">
              <span>Specialities</span>
              <form>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Dietetics
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Cardiology
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Neurology
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Physiology
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Dental
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Any Other+
                  <span class="checkmarks"></span>
                </label>
              </form>
            </div>

            <div class="inputBx">
              <span>Address</span>
              <input type="text" name="" />
            </div>

            <div class="inputBx">
              <span>Password</span>
              <input type="password" name="" />
            </div>
            <div class="inputBx">
              <span> Confirm Password</span>
              <input type="password" name="" />
            </div>

            <div class="inputBx">
              <input type="submit" value="Log IN" name="" />
            </div>
            <div class="inputBx">
              <p>
                Already have an account ?<a href="#">Login now</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InstituteRegistration;
