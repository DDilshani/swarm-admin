import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button, Row, Col, Table } from 'reactstrap';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss'

class Sensor extends Component {
    state = {
        displayColorPicker: false,
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb })
    };

    render() {
        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

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
                                <CardTitle tag="h5">Robot</CardTitle>
                                <Table striped responsive>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Accel</th>
                                            <td>x: 0.00</td>
                                            <td>y: 0.00</td>
                                            <td>z: 0.00</td>
                                            <td>&nbsp;</td>
                                            <td><Button color="primary">Read</Button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Compass</th>
                                            <td>x: 0.00</td>
                                            <td>y: 0.00</td>
                                            <td>z: 0.00</td>
                                            <td>0</td>
                                            <td><Button color="primary">Read</Button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Distance</th>
                                            <td>Raw: 0</td>
                                            <td>Filtered: 0</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td><Button color="primary">Read</Button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Color</th>
                                            <td>R: 0</td>
                                            <td>G: 0</td>
                                            <td>B: 0</td>
                                            <td>
                                                <div style={styles.swatch} /*onClick={this.handleClick}*/>
                                                    <div style={styles.color} />
                                                </div>
                                                {this.state.displayColorPicker ? <div style={styles.popover}>
                                                    <div style={styles.cover} /*onClick={this.handleClose}*/ />
                                                    <SketchPicker color={this.state.color} onChange={this.handleChange} />
                                                </div> : null}
                                            </td>
                                            <td><Button color="primary">Read</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            
            </div>
        );
    }
}

export default Sensor;