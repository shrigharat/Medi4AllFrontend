import React from "react";
import "./Appointment.scss";

const Appointment = () => {
  return (
    <section>
      <div class="contentBx">
        <div class="formBx">
          <h2>Book An Appointment</h2>
          <form>
            <div class="inputBx">
              <span>Patient ID</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Doctor ID</span>
              <div class="custom_select">
                <select>
                  <option value="">Select</option>
                  <option value="M4A00">M4A00</option>
                  <option value="M4A01">M4A01</option>
                  <option value="M4A02">M4A02</option>
                  <option value="M4A03">M4A03</option>
                  <option value="M4A04">M4A04</option>
                </select>
              </div>
            </div>

            <div class="inputBx">
              <span>Appointment Mode</span>
              <div class="custom_select">
                <select>
                  <option value="">Select</option>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                </select>
              </div>
            </div>

            <div class="inputBx">
              <span>Appointment Date</span>
              <input type="date" name="" />
            </div>

            <div class="inputBx">
              <span>Appointment Time</span>
              <input type="time" name="" />
            </div>

            <div class="inputBx">
              <span>Symptom or health problem</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Additional Note</span>
              <input type="text" name="" />
            </div>

            <div class="inputBx">
              <input type="submit" value="Confirm Appointment" name="" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
