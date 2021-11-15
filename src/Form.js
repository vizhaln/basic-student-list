import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "./Form.css";
import InputAdornment from "@material-ui/core/InputAdornment";

function FormComponent(props) {
  const { studentData, handleSubmitSuccess, newStudent } = props;
  const {
    name = "",
    regId = "",
    mobile = "",
    birthday = "",
    location = "",
  } = studentData;
  const [nameValue, setName] = useState(name);
  const [mobileValue, setMobile] = useState(mobile);
  const [birthdayValue, setBirthday] = useState(birthday);
  const [locationValue, setLocation] = useState(location);
  const [isError, setError] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleMobileChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setMobile(e.target.value);
    }
    if (e.target.value.length > 10) setError(true);
    else setError(false);
  };
  const handleBirthdayChange = (e) => setBirthday(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {
      name: nameValue,
      regId: regId,
      mobile: mobileValue,
      birthday: birthdayValue,
      location: locationValue,
    };
    nameValue !== "" && !isError && handleSubmitSuccess(value);
  };

  return (
    <>
      <button onClick={() => props.homePage()} className="backButton">
        {" "}
        Go Back{" "}
      </button>
      <Grid container className="FormGrid">
        <form>
          <Grid item className="inputProp">
            <TextField
              type="text"
              value={nameValue}
              onChange={(e) => handleNameChange(e)}
              className="inputWidth"
              required
              label="Name"
            />
          </Grid>
          <Grid item className="inputProp">
            <TextField
              type="text"
              value={regId}
              className="inputWidth"
              disabled
              label="Reg ID"
            />
          </Grid>
          <Grid item className="inputProp">
            <TextField
              type="text"
              error={isError}
              value={mobileValue}
              onChange={(e) => handleMobileChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
              className="inputWidth"
              label="Mobile"
            />
          </Grid>
          <Grid item className="inputProp">
            <TextField
              type="date"
              InputLabelProps={{ shrink: true }}
              value={birthdayValue}
              onChange={(e) => handleBirthdayChange(e)}
              className="inputWidth"
              label="Date of Birth"
            />
          </Grid>
          <Grid item className="inputProp">
            <TextField
              type="text"
              value={locationValue}
              onChange={(e) => handleLocationChange(e)}
              className="inputWidth"
              label="Location"
            />
          </Grid>
          <Grid item>
            <button className="submitButton" onClick={(e) => handleSubmit(e)}>
              {newStudent ? "Add Student" : "Update"}
            </button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}

export default FormComponent;
