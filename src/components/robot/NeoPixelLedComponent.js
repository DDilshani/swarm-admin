import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Button,
    Form,
    FormGroup,
    Col,
    Row
} from 'reactstrap';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss'
import RangeSlider from 'react-bootstrap-range-slider';
var sliderValue = 0;

const VolumeSlider = () => {
    const [value, setValue] = React.useState(sliderValue);
    return (
        <RangeSlider
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                sliderValue = e.target.value;
            }}
            min={0}
            max={180}
            size={'lg'}
            step={0.5}
        />
    );
};


class Sensor extends Component {
    state = {
        displayColorPicker: false,
        color: {
            r: '0',
            g: '0',
            b: '0',
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
                    width: '55px',
                    height: '25px',
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
                    <Col md={8}>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Color</CardTitle>
                                <Row>
                                    <Col>
                                        <Form >
                                            <FormGroup row>
                                                <Col md={3}>R:</Col>
                                                <VolumeSlider />
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col md={3}>G:</Col>
                                                <VolumeSlider />
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col md={3}>B:</Col>
                                                <VolumeSlider />
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                    <Col>
                                        <div style={styles.swatch} /*onClick={this.handleClick}*/>
                                            <div style={styles.color} />
                                        </div>
                                        {this.state.displayColorPicker ? <div style={styles.popover}>
                                            <div style={styles.cover} /*onClick={this.handleClose}*/ />
                                            <SketchPicker color={this.state.color} onChange={this.handleChange} />
                                        </div> : null}
                                        <br></br><br></br>
                                        <Button color="primary">Write</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Sensor;