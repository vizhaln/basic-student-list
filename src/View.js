import React from "react";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./View.css";

function View(props) {
  const { studentData } = props;
  const {
    name = "",
    regId = "",
    mobile = "",
    birthday = "",
    location = "",
  } = studentData;
  return (
    <>
      <button onClick={() => props.homePage()} className="backButton">
        {" "}
        Go Back{" "}
      </button>

      <Box sx={{ width: "100%" }} className="ViewGrid">
        <Paper sx={{ width: "100%", mb: 2 }} className="paperWidth">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              size="medium"
            >
              <TableBody>
                <TableRow align="right">
                    <button
                      onClick={() => props.editStudent(regId)}
                      className="backButton"
                    >
                      {" "}
                      Edit{" "}
                    </button>
                </TableRow>
                <TableRow>
                  <TableCell className="boldName">Name</TableCell>
                  <TableCell align="right">{name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="boldName">Reg ID</TableCell>
                  <TableCell align="right">{regId}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="boldName">Mobile</TableCell>
                  <TableCell align="right">{mobile}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="boldName">Birthday</TableCell>
                  <TableCell align="right">{birthday}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="boldName">Location</TableCell>
                  <TableCell align="right">{location}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
}

export default View;
