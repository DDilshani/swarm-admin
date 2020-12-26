import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Row,
    Col,
    Input,
    Form,
    FormGroup,
    Button
} from 'reactstrap';

class Log extends Component {
    constructor() {
        super();
        this.state = {
            log: ""
        };
    }
    handleInputChange = (e) => {
        this.setState({ log: e.target.value });
    }

    cancelCourse = () => {
        this.setState({
            log: ""
        });
    }
    render() {
        return (
            <div>
                <p>
                    Information about sensor readings: read accel sensor,
                    compass sensor, distance sensor and color sensor
                    (R,G,B) readings of a particular robot.
                </p>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Form >
                                    <FormGroup row>
                                        <div className="col-12">
                                            <Input type="textarea" id="log" name="log" rows="10" width="100%"
                                                value={this.state.log} onChange={this.handleInputChange} >
                                            </Input>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button color="primary" name="clear" onClick={this.cancelCourse}>Clear</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
      
      );
    }
}

export default Log;