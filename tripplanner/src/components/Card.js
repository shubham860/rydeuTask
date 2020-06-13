import React,{useState} from 'react';
import { Card, Button, Row, Col, Input,Collapse} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

import 'antd/dist/antd.css';

const Card = (props) => {
  return (
      <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className="site-collapse-custom-collapse"
      >
          <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
              <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
              <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
              <p>{text}</p>
          </Panel>
      </Collapse>,
  )
}