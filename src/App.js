import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import dataReq from "./data.json";
import Table from "./Table";
import Form from "./Form";
import View from "./View";
import addIcon from "./addIcon.png";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

function App() {
  const [data, setData] = useState(dataReq);
  const [studentData, setStudentData] = useState({});
  const [showTable, setTable] = useState(true);
  const [showView, setView] = useState(false);
  const [newRegId, setNewRegId] = useState(dataReq.length + 1);
  const [newStudent, setNewStudent] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        CLOSE
      </Button>
    </React.Fragment>
  );

  const homePage = () => {
    setTable(true);
    setView(false);
    setNewStudent(false);
  };

  const addNew = () => {
    setNewRegId(newRegId + 1);
    setStudentData({ regId: newRegId });
    setTable(false);
    setNewStudent(true);
  };

  const deleteStudent = (id) => {
    const updatedData = data.filter((row) => !id.includes(row.regId));
    setData(updatedData);
  };

  const editStudent = (id) => {
    data.filter((item) => item.regId === id && setStudentData(item));
    setTable(false);
    setView(false);
  };

  const viewStudent = (id) => {
    data.filter((item) => item.regId === id && setStudentData(item));
    setTable(false);
    setView(true);
  };

  const updateStudentData = (objectIndex, value) => {
    data[objectIndex].name = value.name;
    data[objectIndex].mobile = value.mobile;
    data[objectIndex].birthday = value.birthday;
    data[objectIndex].location = value.location;
  };

  const handleSubmit = (value) => {
    const objectIndex =
      !newStudent && data.findIndex((item) => item.regId === value.regId);
    !newStudent && updateStudentData(objectIndex, value);
    newStudent && setStudentData(data.push(value));
    setNewStudent(false);
    setTable(true);
    handleClick();
  };

  return (
    <div>
      <header className="App-header">
        <Grid container className="headerPadding">
          <Grid item xs={6} onClick={() => homePage()}>
            Student Details
          </Grid>
          <Grid item xs={6} className="alignItemsRight">
            {showTable && (
              <img
                src={addIcon}
                className="AddIcon"
                alt=""
                onClick={() => addNew()}
              />
            )}
          </Grid>
        </Grid>
      </header>
      {showTable && !showView && (
        <Table
          rows={data}
          deleteStudent={deleteStudent}
          viewStudent={viewStudent}
        />
      )}
      {!showTable && !showView && (
        <Form
          studentData={studentData}
          handleSubmitSuccess={handleSubmit}
          homePage={homePage}
          newStudent={newStudent}
        />
      )}
      {!showTable && showView && (
        <View
          studentData={studentData}
          homePage={homePage}
          editStudent={editStudent}
        />
      )}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={newStudent ? "ADDED SUCCESSFULLY" : "UPDATED SUCCESSFULLY"}
        action={action}
      />
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
