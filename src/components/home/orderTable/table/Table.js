import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Chip } from "@material-ui/core";

const columns = [
  { id: "Ref Colis", label: "Ref Colis", minWidth: 170 },
  { id: "Client", label: "Client", minWidth: 100 },
  { id: "CIN", label: "CIN", minWidth: 170 },
  {
    id: "Date livraison",
    label: "Date livraison",
    minWidth: 170,
    align: "right",
  },
  {
    id: "Prix",
    label: "Prix",
    minWidth: 170,
    align: "right",
  },
  {
    id: "Status colis",
    label: "Status colis",
    minWidth: 170,
    align: "center",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "30px 0px",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({ rows }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="table">
      {/* <Paper className={classes.root}> */}
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    className="tableRow__custom"
                    hover
                    role="checkbox"
                    key={row?.ref}
                  >
                    <TableCell className="tableCell__keyValue">
                      {row?.ref}
                    </TableCell>
                    <TableCell className="tableCell__keyValue">
                      {row?.client}
                    </TableCell>
                    <TableCell className="tableCell__keyValue">
                      {row?.cinClient}
                    </TableCell>
                    <TableCell align="right">{row?.date}</TableCell>
                    <TableCell className="tableCell__keyValue" align="right">
                      {row?.prix}
                    </TableCell>
                    <TableCell align="center" className="tableCell__keyValue">
                      <Chip
                        size="small"
                        label={row?.status}
                        className={`statusStyle${row?.status
                          .split("")
                          .length.toString()} orderTable--status`}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* </Paper> */}
    </div>
  );
}
