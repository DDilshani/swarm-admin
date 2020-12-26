import React from 'react';
import { Card, CardBody, CardTitle, Button, Row, Col, Table, Input } from 'reactstrap';

function Settings() {
    return (
        <div className="container">
            <br></br>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12">
                        <h1>Settings</h1>
                        <Row>
                            <Col md={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">Motors</CardTitle>
                                        <Table striped responsive>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Left speed correct</th>
                                                    <td>
                                                        <Input type="textarea" id="log" name="log" rows="1" width="100%" >
                                                        </Input>
                                                    </td>
                                                    <td><Button color="primary">Update</Button></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Right speed correct</th>
                                                    <td>
                                                        <Input type="textarea" id="log" name="log" rows="1" width="100%" >
                                                        </Input>
                                                    </td>
                                                    <td><Button color="primary">Update</Button></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Robot ID</th>
                                                    <td>
                                                        <Input type="textarea" id="log" name="log" rows="1" width="100%" >
                                                        </Input>
                                                    </td>
                                                    <td><Button color="primary">Update</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br></br><br></br><br></br>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
