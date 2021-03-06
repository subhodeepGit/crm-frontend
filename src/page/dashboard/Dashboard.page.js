// import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import { Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'

import tickets from '../../assets/data/dummy-tickets.json'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Dashboard" />
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-5 mb-2">
            <Button variant="info" style={{fontSize:'2rem',padding: "10px 30px"}}>Add New Ticket</Button>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mb-2">
            <div>Total tickets: 50</div>
            <div>Pending tickets: 50</div>
            </Col>
        </Row>
        <Row>
            <Col className="mt-2">
            Recently Add Ticket
            </Col>
        </Row>
        <hr />
        <Row>
            <Col className="recent-ticket">
            <TicketTable tickets={tickets} />
            </Col>
        </Row>
    </Container>
  )
}
