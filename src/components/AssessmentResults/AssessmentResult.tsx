import React from "react";
import {Container,Accordion,Tab,Nav,Col,Row,Card,Button, InputGroup, Form} from 'react-bootstrap';
import { PieChart, BarChart } from '@mui/x-charts';
import SecurityAccordion from "../SecurityAccordion/SecurityAccordion";
import chatPerson from "../../assets/img/chat-person.png"
import chatAdmin from "../../assets/img/chat-admin.png"
import { mobileAndDesktopOS, valueFormatter } from './value';
import "./styles/_index.scss"

const AssessmentResults: React.FC = ()=>{
    
    const uData = [4000, 3000, 2000];
    const pData = [2400, 1398, 9800];
    const xLabels = [
        'Firewall',
        'Windows',
        'O365',
    ];

    const [radius, setRadius] = React.useState(50);
    const [itemNb, setItemNb] = React.useState(5);
    const [skipAnimation, setSkipAnimation] = React.useState(false);

    const handleItemNbChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue !== 'number') {
        return;
        }
        setItemNb(newValue);
    };
    const handleRadius = (event: Event, newValue: number | number[]) => {
        if (typeof newValue !== 'number') {
        return;
        }
        setRadius(newValue);
    };

    return(
        <div className="assessment-wrapper">
            <Container>
                <Accordion defaultActiveKey="0" className="accordion-assessment">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="assesment-btn">Knowledge Asssessment Results <i className="icon icon-assessment"></i></div>
                            <ul className="list-inline accordion-btn-list">
                                <li className="list-inline-item">                                    
                                    <div className="d-flex progress-wrapper">
                                        <div className="progress-icon">
                                            <i className="icon icon-correct"></i>
                                        </div>                                    
                                        <div className="progess-count">
                                            <div className="progress-percent">65%</div>
                                            <div className="progress-text">Correct</div>
                                        </div>                                        
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="d-flex progress-wrapper">
                                        <div className="progress-icon">
                                            <i className="icon icon-incorrect"></i>
                                        </div>                                    
                                        <div className="progess-count">
                                            <div className="progress-percent">40%</div>
                                            <div className="progress-text">Incorrect</div>
                                        </div>                                        
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="d-flex progress-wrapper">
                                        <div className="progress-icon">
                                            <i className="icon icon-correct"></i>
                                        </div>                                    
                                        <div className="progess-count">
                                            <div className="progress-percent">45%</div>
                                            <div className="progress-text">Don't know</div>
                                        </div>                                        
                                    </div>
                                </li>
                            </ul>
                        </Accordion.Header>
                        <Accordion.Body className="accordion-assessment-body">
                            <Container>                            
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col xl={12}>                                    
                                        <Nav variant="pills" className="d-flex justify-content-center assessment-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first"><i className="icon icon-summary"></i> Summary</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second"><i className="icon icon-cyber"></i> CyberKarma GPT</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        </Col>
                                        <Col xl={12}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">                                                
                                                <div className="chart-grid">                                                   
                                                    <Card>
                                                        <Card.Header className="text-center">Unpatched Assets since 30 Days</Card.Header>
                                                        <Card.Body>
                                                            <PieChart
                                                                series={[
                                                                    {
                                                                    data: [
                                                                        { id: 0, value: 10, label: 'Windows'},
                                                                        { id: 1, value: 15, label: 'Linux' },
                                                                        { id: 2, value: 20, label: 'Other OS' },
                                                                    ],
                                                                    },
                                                                ]}
                                                                width={400}
                                                                height={200}
                                                            />
                                                        </Card.Body>
                                                    </Card>
                                                    <Card>
                                                        <Card.Header className="text-center">Unresolved Critical SOC Incident</Card.Header>
                                                        <Card.Body>
                                                        <BarChart
                                                            width={500}
                                                            height={200}
                                                            series={[
                                                                // { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
                                                                { data: uData, id: 'uvId', stack: 'total' },
                                                            ]}
                                                            xAxis={[{ data: xLabels, scaleType: 'band' }]}
                                                        />
                                                        </Card.Body>
                                                    </Card>
                                                    <Card>
                                                        <Card.Header className="text-center">Weak Points (EMP & Machines)</Card.Header>
                                                        <Card.Body>
                                                            <PieChart
                                                                height={200}
                                                                series={[
                                                                    {
                                                                        data: mobileAndDesktopOS.slice(0, itemNb),
                                                                        innerRadius: radius,
                                                                        arcLabel: (params) => params.label ?? '',
                                                                        arcLabelMinAngle: 20,
                                                                        valueFormatter,
                                                                    },
                                                                ]}
                                                            />
                                                        </Card.Body>
                                                    </Card>
                                                    <Card>
                                                        <Card.Header className="text-center">Weak (Apps & Softwares)</Card.Header>
                                                        <Card.Body>                                                         
                                                            <BarChart
                                                                series={[
                                                                    { data: [35, 44, 24, 34] },
                                                                    { data: [51, 6, 49, 30] },
                                                                    { data: [15, 25, 30, 50] },
                                                                    { data: [60, 50, 15, 25] },
                                                                ]}
                                                                height={200}
                                                                xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                                                                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                                                            />
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="single-chat-interface">
                                                    <div className="single-chat-msgs-list">
                                                        <div className="single-chat-box blue d-flex align-items-end">
                                                            <div className="single-img">
                                                                <img src={chatAdmin} className="img-fluid" />
                                                            </div>
                                                            <div className="single-chat-box-text">Hello! How can I assist you with your <br/> cybersecurity needs today?</div>
                                                            <div className="single-chat-box-time">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-thumbsup"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-thumbsdown"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-copy"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="single-chat-box right-chat d-flex align-items-end justify-content-end">
                                                            <div className="single-chat-box-time">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-thumbsup"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-thumbsdown"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-copy"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="single-chat-box-text">Hi there, can you help me understand our<br/> current cybersecurity posture?</div>
                                                            <div className="single-img">
                                                                <img src={chatPerson} className="img-fluid" />
                                                            </div>
                                                        </div>

                                                        <div className="single-chat-box blue d-flex align-items-end">
                                                            <div className="single-img">
                                                                <img src={chatAdmin} className="img-fluid" />
                                                            </div>
                                                            <div className="single-chat-box-text">Of course! I have a comprehensive overview of your cybersecurity<br /> framework. Would you like a summary or details on a specific area?</div>
                                                            <div className="single-chat-box-time">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-thumbsup"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-thumbsdown"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-copy"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="single-chat-box right-chat d-flex align-items-end justify-content-end">
                                                            <div className="single-chat-box-time">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-thumbsup"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-thumbsdown"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-copy"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="single-chat-box-text">Start with a summary, please.</div>
                                                            <div className="single-img">
                                                                <img src={chatPerson} className="img-fluid" />
                                                            </div>
                                                        </div>

                                                        <div className="single-chat-box blue d-flex align-items-end">
                                                            <div className="single-img">
                                                                <img src={chatAdmin} className="img-fluid" />
                                                            </div>
                                                            <div className="single-chat-box-text">
                                                                Sure! Based on the latest assessments:
                                                                <ul>
                                                                    <li>Threat Protection: 85% secure. Your systems have good protection against known threats.</li>
                                                                    <li>Access Control: 70% secure. There are some areas of improvement in user access control.</li>
                                                                    <li>Data Protection: 90% secure. Data encryption and backup procedures are well in place.</li>
                                                                    <li>Incident Response: 75% secure. There are gaps in your incident response plan. Would you like detailed feedback on any specific area?</li>
                                                                </ul>
                                                            </div>
                                                            <div className="single-chat-box-time">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-thumbsup"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-thumbsdown"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href=""><i className="icon icon-copy"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-chat-msg-input">
                                                        <InputGroup className="single-chat-msg-input-group">
                                                            <div className="">
                                                                <a href=""><i className="icon icon-chat-plus"></i></a>
                                                            </div>
                                                            <Form.Control
                                                                placeholder="Type Something..."
                                                                aria-describedby="basic-addon2"
                                                            />
                                                            <Button className="chat-btn" variant="" id="button-addon2">Send</Button>
                                                        </InputGroup>
                                                    </div>
                                                </div>

                                            </Tab.Pane>
                                        </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>                
                </Accordion>
                
                

                <SecurityAccordion/>                              
                
            </Container>             
        </div>
    )
}

export default AssessmentResults;