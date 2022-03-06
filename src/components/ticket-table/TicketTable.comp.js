import React from 'react'
import { Table } from 'react-bootstrap'

export const TicketTable = ({tickets}) => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            {tickets.length && tickets.map((row)=> (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.subject}</td>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
                    </tr>    
                ))}

            <tr>
                <td>1</td>
                <td>ssl issue</td>
                <td>client response pending</td>
                <td>2020-10-12</td>
            </tr>
        </tbody>
    </Table>
  );
};
