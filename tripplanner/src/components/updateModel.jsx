import React, {useState} from "react";
import CardPanel from './CardPanel';
import '../css/style.css'
import {Modal, Button, Row, Form, Col, Input, Select, InputNumber, DatePicker, TimePicker} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import moment from 'moment';

const {Option} = Select;


const UpdateModel = (props) => {
    const {onSubmit: onUpdate, updateModalVisible, onCancel, values, handleUpdateModalVisible} = props;
    const [form] = Form.useForm();


    const handleOk = async () => {
        const fieldsValue = await form.validateFields();
        const data = {
            ...fieldsValue,
            id: values.id,
            date: fieldsValue['date'].format('YYYY-MM-DD'),
            time: fieldsValue['time'].format('HH:mm:ss')
        }
        form.resetFields();
        onUpdate(data)
        handleUpdateModalVisible(false)
    };

    const handleCancel = e => {
        console.log(e);
        handleUpdateModalVisible(false)
    };

    const config = {
        rules: [{type: 'object', required: true, message: 'Please select time!'}],
    };

    console.log(values)

    const {Adult, Children, dropLocation, firstName, lastName, pickUpLocation, vechileCount, vechileType, date, time, city} = values;

    return (
        <Modal
            title={<Row justify="center">Update Transfer Services</Row>}
            visible={updateModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width='700px'
        >
            <Form
                form={form}
                initialValues={{
                    Adult,
                    Children,
                    dropLocation,
                    firstName,
                    lastName,
                    pickUpLocation,
                    vechileCount,
                    vechileType,
                    city
                }}
                hideRequiredMark={true}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item
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
                            <Input placeholder="first name"/>
                        </Form.Item>

                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item
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
                            <Input placeholder="last name"/>
                        </Form.Item>
                    </Col>
                </Row>


                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item name="date" label="DatePicker" {...config}>
                            <DatePicker defaultValue={moment(date, 'DD/MM/YYYY')}/>
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item name="time" label="TimePicker" {...config}>
                            <TimePicker defaultValue={moment(time, 'HH:mm:ss')}/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={15} lg={15} xl={15}>
                        <Form.Item
                            label="Vechile Type"
                            name="vechileType"
                            rules={[{required: true, message: 'Please select your country!'}]}
                        >
                            <Select placeholder="Please select a vechile">
                                <Option value="Standard">Standard</Option>
                                <Option value="Premium">Premium</Option>
                                <Option value="Luxury Coaches">Luxury Coaches</Option>
                                <Option value="Van">Van</Option>
                                <Option value="Mini Bus">Mini Bus</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={9} lg={9} xl={9}>
                        <Form.Item
                            name="vechileCount"
                            label=""
                            rules={[{type: 'number', min: 0, max: 5}]}>
                            <InputNumber placeholder='count'/>
                        </Form.Item>
                    </Col>
                </Row>


                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Row align="middle">
                            <p className='labels'>Passenger Count:</p>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item name="Adult" label="Adult"
                                           rules={[{type: 'number', min: 0, max: 5}]}>
                                    <InputNumber placeholder='count'/>
                                </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item name="Children" label="Children"
                                           rules={[{type: 'number', min: 0, max: 5}]}>
                                    <InputNumber placeholder='count'/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Col>
                        <Form.Item label="City"
                                   name="city"
                                   rules={[{required: true, message: 'please fill pickup city'}]}
                        >
                            <Input placeholder="city"/>
                        </Form.Item>
                    </Col>

                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item label="Pickup Location"
                                   name="pickUpLocation"
                                   rules={[{required: true, message: 'please fill pickup location'}]}
                        >
                            <Input placeholder="Pickup location"/>
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item label="Drop Location"
                                   name="dropLocation"
                                   rules={[{required: true, message: 'please fill drop location'}]}
                        >
                            <Input placeholder="Drop location"/>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </Modal>
    )
};


export default UpdateModel;