import React, {useState} from 'react';
import {Card, Button, Row, Col, Input, Empty, Form} from 'antd';
import 'antd/dist/antd.css';
import {
    AppstoreOutlined,
    CarOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import '../css/style.css'
import UpdateModel from "./updateModel";

const CardPanel = ({transfer, onDelete, onUpdate, index}) => {
    const [show, setShow] = useState(false)
    const [updateModalVisible, handleUpdateModalVisible] = useState(false);


    const Toggle = () => {
        setShow(!show)
    }

    const {Adult, Children, dropLocation, firstName, id, lastName, pickUpLocation, vechileCount, vechileType, date, time, city} = transfer;
    return (
        <Row justify="center">
            <Col key={id}>
                <Card className="infoCard">
                    <Row>
                        <Col>
                            <Card className='smallCard' bodyStyle={{padding: 0}}>
                                <p className='date'>{date.slice(0, 5)}</p>
                            </Card>
                        </Col>
                        <Col>
                            <p className="dayHead">Day {index}</p>
                        </Col>

                    </Row>
                    <Row justify="center">
                        <Card className="infoCard">
                            <Row>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <p className='head'>
                                        <AppstoreOutlined className='icon'/>
                                        <CarOutlined className='icon'/>
                                        Transfer Services
                                    </p>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Row justify="end">
                                        <Button className="btn"
                                                onClick={() => handleUpdateModalVisible(true)}><EditOutlined/></Button>
                                        <Button className="btn" onClick={() => onDelete(id)}><DeleteOutlined/></Button>
                                        <Button className="btn" onClick={Toggle}>
                                            {
                                                show ? <CaretDownOutlined/> : <CaretUpOutlined/>
                                            }
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>

                            {
                                show && (
                                    <div className="data">
                                        <Row>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p className="heads">Pickup Location</p>
                                                    </Col>

                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p>{pickUpLocation}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p className="heads">Service Type</p>
                                                    </Col>

                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p>Airport Transfer</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p className="heads">Drop Location</p>
                                                    </Col>

                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p>{dropLocation}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p className="heads">Vechile Type</p>
                                                    </Col>

                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p>{vechileType} * {vechileCount}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p className="heads">City</p>
                                                    </Col>

                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p>{city}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p className="heads">Passengers Count</p>
                                                    </Col>

                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p>{`${Adult} adults, ${Children} children`}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p className="heads">Start Date Time</p>
                                                    </Col>

                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <p>{date} | {time}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            }
                        </Card>
                    </Row>
                </Card>
            </Col>

            <UpdateModel
                onSubmit={transfer => onUpdate(transfer)}
                onCancel={() => {
                    handleUpdateModalVisible(false);
                }}
                updateModalVisible={updateModalVisible}
                values={transfer}
                handleUpdateModalVisible={handleUpdateModalVisible}/>
        </Row>
    )
}

export default CardPanel;