import React,{useState, Suspense} from 'react';
import { Card, Button, Row, Col, Input} from 'antd';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import { AppstoreOutlined, CarOutlined, CaretUpOutlined, CaretDownOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import '../css/style.css'
import {deleteTransfer} from "../Redux/Actions";

const CardPanel = (props) => {
    console.log('data',props)
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }

    const { data } = props
  return (
      <Row justify="center">
          {
              props.data.id  && <Col>
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
                                          <Button className="btn"><EditOutlined/></Button>
                                          <Button className="btn"
                                                  onClick={() => props.onDelete(data.id)}><DeleteOutlined/></Button>
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
                                                          <p>{data?.pickUpLocation}</p>
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
                                                          <p>{data?.dropLocation}</p>
                                                      </Col>
                                                  </Row>
                                              </Col>
                                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                  <Row>
                                                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                          <p className="heads">Vechile Type</p>
                                                      </Col>

                                                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                          <p>{data?.vechileType} {data?.vechileCount}</p>
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
                                                          <p>Paris</p>
                                                      </Col>
                                                  </Row>
                                              </Col>
                                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                  <Row>
                                                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                          <p className="heads">Passengers Count</p>
                                                      </Col>

                                                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                          <p>{`${data?.Adult} adults, ${data?.Children} children`}</p>
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
                                                          <p>Paris</p>
                                                      </Col>
                                                  </Row>
                                              </Col>
                                          </Row>
                                      </div>
                                  )
                              }

                          </Card>
                      </Row>
                  </Col>
          }
      </Row>
  )
}



export default CardPanel;