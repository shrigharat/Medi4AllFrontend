import React from "react";
import "./MedicalInfo.scss";

const MdeicalInfo = () => {
  return (
    <section>
      <div class="contentBx">
        <div class="formBx">
          <h2>Medical Information</h2>
          <form>
            <div class="inputBx">
              <span>Patient's ID</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Hospital Registration Number</span>
              <input type="text" name="" />
            </div>

            <div class="inputBx">
              <span>Symptom or health problem</span>
              <input type="text" name="" />
            </div>

            <div class="inputBx">
              <span>Oxygen Level</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Heart Rate</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Blood Pressure</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Weight/Height</span>
              <input type="text" name="" />
            </div>

            <div class="inputBx">
              <span>Inborn Disease</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Current Medication</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Alcohol Consumption</span>
              <form>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  NA
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Daily
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Weekly
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Monthly
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Occasionaly
                  <span class="checkmarks"></span>
                </label>
              </form>
            </div>
            <div class="inputBx">
              <span>Tobacco Consumption</span>
              <form>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  NA
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Daily
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Weekly
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Monthly
                  <span class="checkmarks"></span>
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" value="" />
                  Occasionaly
                  <span class="checkmarks"></span>
                </label>
              </form>
            </div>

            <div class="inputBx">
              <span>Additional Note</span>
              <input type="text" name="" />
            </div>

            <div class="inputBx">
              <input type="submit" value="Submit" name="" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MdeicalInfo;
