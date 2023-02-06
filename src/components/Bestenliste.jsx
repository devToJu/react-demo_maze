import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function Bestenliste(props) {
  const { bestenliste } = props;

  return (
    <div style={{margin: '10px'}}>
      <Typography variant="h5" gutterBottom>Bestenliste</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Platz</TableCell>
              <TableCell>Spielername</TableCell>
              <TableCell>Bewegungen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              bestenliste.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.moves}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
