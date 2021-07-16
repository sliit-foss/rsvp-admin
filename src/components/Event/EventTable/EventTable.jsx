import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@material-ui/core";
import EventTableAction from "./EventTableAction";
import { useFilterRows } from "../../Common/TableViewComponents/useFilterData";
import Alert from "@material-ui/lab/Alert";
import { TableFooterPagination } from "../../Common/TableViewComponents/TableFooterPagination";

function filterData(tableData, searchText = "") {
  if (searchText === "") return tableData;

  return tableData.filter(
    (dataObj) =>
      dataObj.name && dataObj.name.toLowerCase().startsWith(searchText)
  );
}

const EventTable = ({ Events, searchVal }) => {
  const { pageData, tableFooterProps, noMatchingItems } = useFilterRows(
    searchVal,
    Events,
    filterData
  );

  return (
    <>
      <TableContainer className="table-container expandable-table-container">
        <Table
          size="small"
          stickyHeader
          aria-label="sticky table"
          className="table-first-cell-padded"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>description</TableCell>
              <TableCell>headerImage</TableCell>
              <TableCell>photos</TableCell>
              <TableCell>venue</TableCell>
              <TableCell>fromDate</TableCell>
              <TableCell>toDate</TableCell>
              <TableCell>status</TableCell>
              <TableCell>speakers</TableCell>
              <TableCell>createdBy</TableCell>
              <TableCell>host</TableCell>
              <TableCell>Featured Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {pageData.map((p) => (
              <TableRow key={p?.id}>
                <TableCell>{p?.name}</TableCell>
                <TableCell>{p?.description}</TableCell>
                <TableCell>{p?.headerImage}</TableCell>
                <TableCell>{p?.photos}</TableCell>
                <TableCell>{p?.venue}</TableCell>
                <TableCell>{p?.fromDate}</TableCell>
                <TableCell>{p?.toDate}</TableCell>
                <TableCell>{p?.status}</TableCell>
                <TableCell>{p?.speakers}</TableCell>
                <TableCell>{p?.createdBy}</TableCell>
                <TableCell>{p?.tahostgs}</TableCell>
                <TableCell>
                  {p?.isFeatured ? (
                    <Chip size={"small"} color={"primary"} label={"Yes"} />
                  ) : (
                    <Chip size={"small"} color={"secondary"} label={"No"} />
                  )}
                </TableCell>
                <TableCell style={{ width: "5rem" }}>
                  <div className="display-flex align-center justify-end">
                    <EventTableAction Event={p} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {noMatchingItems && <Alert severity="info">No matching Events</Alert>}

      <TableFooterPagination {...tableFooterProps} />
    </>
  );
};

export default EventTable;
