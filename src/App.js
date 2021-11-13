import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import dataReq from "./data.json";
import Table from "./Table";
import Form from "./Form";
import addIcon from "./addIcon.png";

function App() {
  const [data, setData] = useState(dataReq);
  const [studentData, setStudentData] = useState({});
  const [showTable, setTable] = useState(true);
  const [newRegId, setNewRegId] = useState(dataReq.length + 1);
  const [newStudent, setNewStudent] = useState(false);

  const homePage = () => setTable(true);

  const addNew = () => {
    setNewRegId(newRegId + 1);
    setStudentData({ regId: newRegId });
    setTable(false);
    setNewStudent(true);
  };

  const deleteStudent = (id) =>
    id.map((del) => setData(data.filter((item) => item.regId !== del)));

  const viewStudent = (id) => {
    data.filter((item) => item.regId === id && setStudentData(item));
    setTable(false);
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
  };

  return (
    <div>
      <header className="App-header">
      <Grid container className="headerPadding">
        <Grid item xs={6} onClick={() => homePage()}>Student Details</Grid>
        <Grid item xs={6} className="alignItemsRight">
          <img
            src={addIcon}
            className="AddIcon"
            alt=""
            onClick={() => addNew()}
          />
        </Grid>
        </Grid>
      </header>
      {showTable && (
        <Table
          rows={data}
          deleteStudent={deleteStudent}
          viewStudent={viewStudent}
        />
      )}
      {!showTable && (
        <Form studentData={studentData} handleSubmitSuccess={handleSubmit} />
      )}
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
