import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./Form.css";

function Form(props) {
  const { studentData, handleSubmitSuccess } = props;
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

  const handleNameChange = (e) => setName(e.target.value);
  const handleMobileChange = (e) => setMobile(e.target.value);
  const handleBirthdayChange = (e) => setBirthday(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const nameRef = React.useRef();
  const mobileRef = React.useRef();
  const birthdayRef = React.useRef();
  const locationRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {
      name: nameRef.current.value,
      regId: regId,
      mobile: mobileRef.current.value,
      birthday: birthdayRef.current.value,
      location: locationRef.current.value,
    };
    handleSubmitSuccess(value);
  };

  return (
    <>
      <button onClick={() => props.homePage()} className="backButton">
        {" "}
        Go Back{" "}
      </button>
      <Grid container className="FormGrid">
        <form>
          <Grid item>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => handleNameChange(e)}
              value={nameValue}
              ref={nameRef}
            />
          </Grid>
          <Grid item>
            <input type="text" placeholder="reg ID" value={regId} disabled />
          </Grid>
          <Grid item>
            <input
              type="text"
              placeholder="mobile"
              onChange={(e) => handleMobileChange(e)}
              value={mobileValue}
              ref={mobileRef}
            />
          </Grid>
          <Grid item>
            <input
              type="text"
              placeholder="birthday"
              onChange={(e) => handleBirthdayChange(e)}
              value={birthdayValue}
              ref={birthdayRef}
            />
          </Grid>
          <Grid item>
            <input
              type="text"
              placeholder="location"
              onChange={(e) => handleLocationChange(e)}
              value={locationValue}
              ref={locationRef}
            />
          </Grid>
          <Grid item>
            <button className="submitButton" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}

export default Form;
