import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';

import "./ticket.css";

export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDataError, frmDt}) => {
    console.log(frmDt);

  return (
        <div className='mt-3 jumbotron add-new-ticket bg-light'>
            <h1 className='text-info text-center'>Add New Ticket</h1>
            <hr />
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    name="subject"
                    value={frmDt.subject}
                    // minLength="3"
                    maxLength="100"
                    onChange = {handleOnChange}
                    placeholder="Subject"
                    required
                    />
                    <Form.Text className="text-danger">
                        {frmDataError.subject && "Subject is required!"}
                    </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group><Form.Label></Form.Label></Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    type="date"
                    name="issueDate"
                    value={frmDt.issueDate}
                    onChange = {handleOnChange}
                    required
                    />
                    </Col>
                </Form.Group>
                <Form.Group><Form.Label></Form.Label></Form.Group>
                <Form.Group>
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                    as="textarea"
                    name="detail"
                    rows="5"
                    value={frmDt.detail}
                    onChange = {handleOnChange}
                    required
                    />
                </Form.Group>
                <Form.Group><Form.Label></Form.Label></Form.Group>
                <div className="d-grid gap-2">
                <Button type="submit" variant='info' size="lg">Submit</Button></div>
            </Form>
        </div>
  )
}

