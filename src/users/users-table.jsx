import TableContainer from "@mui/material/TableContainer";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material/";

const UsersTable = ({users}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead
          style={{
            backgroundColor: "aqua",
          }}
        >
          <TableRow>
            <TableCell
              style={{
                fontWeight: "bolder",
              }}
              align="center"
            >
              Id
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bolder",
              }}
              align="center"
            >
              Name
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bolder",
              }}
              align="center"
            >
              Username
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bolder",
              }}
              align="center"
            >
              Email
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bolder",
              }}
              align="center"
            >
              Phone
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bolder",
              }}
              align="center"
            >
              City
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow hover>
              <TableCell align="center">
                <Link to={`/users/${user.id}`}>{user.id}</Link>
              </TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.username}</TableCell>
              <TableCell align="center">{user.address.city}</TableCell>
              <TableCell
                style={{
                  // backgroundColor: '#f5f5f5'
                  fontWeight: "bolder",
                }}
                align="center"
              >
                +1-541-754-3010
              </TableCell>
              <TableCell align="center">New York</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
