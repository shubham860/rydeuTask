import React,{useState} from "react";
import CardPanel from './Card';
import '../css/style.css'
import { Modal, Button, Row, Form, Col, Input, Select, InputNumber,} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {createTransfer} from "../Redux/Actions";
const { Option } = Select;



const Main = (props) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setVisible(true)
    };

    const handleOk = async () => {
        const fieldsValue = await form.validateFields();
        props.onAddTransfer(fieldsValue)
        form.resetFields();
        setVisible(false);
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    };


    return(
        <div className="main">
            <Row justify="center" align="middle">
                <Button type="primary" onClick={showModal}>
                    <PlusOutlined/>Create Transfer
                </Button>

                <Modal
                    title={<Row justify="center">Transfer Services</Row>}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Form form={form}>
                        <Row>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item
                                    labelCol={{
                                        span: 9,
                                    }}
                                    wrapperCol={{
                                        span: 12,
                                    }}
                                    label="First Name"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter the area name',
                                            min: 4,
                                        },
                                    ]}
                                >
                                    <Input placeholder="first name" />
                                </Form.Item>

                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item
                                    labelCol={{
                                        span: 9,
                                    }}
                                    wrapperCol={{
                                        span: 12,
                                    }}
                                    label="Last Name"
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter the last name',
                                            min: 4,
                                        },
                                    ]}
                                >
                                    <Input placeholder="last name" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Item label="Vechile Type: "
                                           name="vechileType"
                                           rules={[{ required: true, message: 'Please select your country!' }]}
                                           labelCol={{
                                               span: 9,
                                           }}
                                           wrapperCol={{
                                               span: 12,
                                           }}>
                                    <Select placeholder="Please select a vechile" >
                                        <Option value="Standard">Standard</Option>
                                        <Option value="Premium">Premium</Option>
                                        <Option value="Luxury Coaches">Luxury Coaches</Option>
                                        <Option value="Van">Van</Option>
                                        <Option value="Mini Bus">Mini Bus</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item name="vechileCount" label="" rules={[{ type: 'number', min: 0, max: 5 }]}>
                                    <InputNumber placeholder='count' />
                                </Form.Item>
                            </Col>
                        </Row>


                        <Row>
                            <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                                <Row align="middle">
                                    <p className='labels'>Passenger Count </p>
                                </Row>
                            </Col>
                            <Col xs={17} sm={17} md={17} lg={17} xl={17}>
                                <Row>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <Form.Item name="Adult" label="Adult" rules={[{ type: 'number', min: 0, max: 5 }]}>
                                            <InputNumber placeholder='count' />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <Form.Item name="Children" label="Children" rules={[{ type: 'number', min: 0, max: 5 }]}>
                                            <InputNumber placeholder='count' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <Form.Item label="Pickup Location: "
                                           name="pickUpLocation"
                                           rules={[{ required: true, message: 'please fill pickup location' }]}
                                           labelCol={{
                                               span: 10,
                                           }}
                                           wrapperCol={{
                                               span: 12,
                                           }}>
                                    <Input placeholder="Pickup location" />
                                </Form.Item>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <Form.Item label="Drop Location: "
                                           name="dropLocation"
                                           rules={[{ required: true, message: 'please fill drop location' }]}
                                           labelCol={{
                                               span: 10,
                                           }}
                                           wrapperCol={{
                                               span: 12,
                                           }}>
                                    <Input placeholder="Drop location"  />
                                </Form.Item>
                            </Col>
                        </Row>

                    </Form>
                </Modal>
            </Row>

            <Row justify="center" style={{margin:"50px 0"}}>
                {
                    Object.keys(props).map(item => <CardPanel data={props[item]}/>)
                }
            </Row>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTransfer: post => {
            dispatch(createTransfer(post));
        }
    };
};


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps , mapDispatchToProps)(Main);