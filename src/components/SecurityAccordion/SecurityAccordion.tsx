import React from "react";
import {Container,Accordion,Tab,Nav,Col,Row,Card,Button} from 'react-bootstrap';
import './styles/_index.scss';

const SecurityAccordion = () => {

    return(
        <div className="security-wrapper">

            <div className="security-tabs-wrapper">            
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col xl={12}>
                        <Nav variant="pills" className="d-flex justify-content-end">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    <div className="navlink-tabs-div">
                                        <div className="security-tabs-text d-block">All Questions</div>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <div className="navlink-tabs-div d-flex align-items-center">
                                        <i className="icon icon-vulnerability icon-size"></i>
                                        <div className="security-tabs-text">Vulnerability</div>
                                    </div>
                                </Nav.Link>                        
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    <div className="navlink-tabs-div d-flex align-items-center">
                                        <i className="icon icon-soc icon-size"></i>
                                        <div className="security-tabs-text">SOC</div>
                                    </div>
                                </Nav.Link>                        
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="four">
                                    <div className="navlink-tabs-div d-flex align-items-center">
                                        <i className="icon icon-hardening custom-icon icon-size"></i>
                                        <div className="security-tabs-text">Hardening</div>
                                    </div>
                                </Nav.Link>                        
                            </Nav.Item>
                            
                        </Nav>
                        </Col>                        
                    </Row>
                </Tab.Container>
            </div>

            <Accordion className="security-accordion">
            <Accordion.Item eventKey="0">
                <Accordion.Header>                                        
                    <div className="security-accordion-list d-flex justify-content-between align-items-center">
                        <div className="accordion-header-title">Human Layer</div>
                        <div className="">
                            <ul className="list-inline security-accordion-ul d-flex align-items-center">
                                <li className="list-inline-item vulnerability">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-vulnerability"></i>
                                        <div className="security-accordion-title">Vulnerability</div>    
                                    </div>     
                                </li>
                                <li className="list-inline-item soc">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-soc"></i>
                                        <div className="security-accordion-title">SOC</div>    
                                    </div> 
                                </li>
                                <li className="list-inline-item hardening">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-hardening"></i>
                                        <div className="security-accordion-title">Hardening</div>    
                                    </div> 
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first"> 
                    <Row>
                        <Col xl={12}>
                        <Nav variant="pills" className="flex-row accordion-nav-wrapper">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="d-flex justify-content-evenly">
                                    <i className="icon icon-star"></i>
                                    <div className="tab-title">Top 5</div>                                    
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="d-flex justify-content-evenly">
                                    <i className="icon icon-star"></i>
                                    <div className="tab-title">Enabler</div>                                    
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">First Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.</Tab.Pane>
                            <Tab.Pane eventKey="second">Second Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.</Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>    
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>                                        
                    <div className="security-accordion-list d-flex justify-content-between align-items-center">
                        <div className="accordion-header-title">Perimeter Security</div>
                        <div className="">
                            <ul className="list-inline security-accordion-ul d-flex align-items-center">
                                <li className="list-inline-item vulnerability">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-vulnerability"></i>
                                        <div className="security-accordion-title">Vulnerability</div>    
                                    </div>     
                                </li>
                                <li className="list-inline-item soc">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-soc"></i>
                                        <div className="security-accordion-title">SOC</div>    
                                    </div> 
                                </li>
                                <li className="list-inline-item hardening">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-hardening"></i>
                                        <div className="security-accordion-title">Hardening</div>    
                                    </div> 
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first"> 
                    <Row>
                        <Col xl={12}>
                        <Nav variant="pills" className="flex-row accordion-nav-wrapper">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="d-flex justify-content-evenly">
                                    <i className="icon icon-star"></i>
                                    <div className="tab-title">Top 5</div>                                    
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="d-flex justify-content-evenly">
                                    <i className="icon icon-star"></i>
                                    <div className="tab-title">Enabler</div>                                    
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">First Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.</Tab.Pane>
                            <Tab.Pane eventKey="second">Second Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.</Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>  
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>                                        
                    <div className="security-accordion-list d-flex justify-content-between align-items-center">
                        <div className="accordion-header-title">Network Security</div>
                        <div className="">
                            <ul className="list-inline security-accordion-ul d-flex align-items-center">
                                <li className="list-inline-item vulnerability">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-vulnerability"></i>
                                        <div className="security-accordion-title">Vulnerability</div>    
                                    </div>     
                                </li>
                                <li className="list-inline-item soc">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-soc"></i>
                                        <div className="security-accordion-title">SOC</div>    
                                    </div> 
                                </li>
                                <li className="list-inline-item hardening">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-hardening"></i>
                                        <div className="security-accordion-title">Hardening</div>    
                                    </div> 
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first"> 
                    <Row>
                        <Col xl={12}>
                        <Nav variant="pills" className="flex-row accordion-nav-wrapper">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="d-flex justify-content-evenly">
                                    <i className="icon icon-star"></i>
                                    <div className="tab-title">Top 5</div>                                    
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="d-flex justify-content-evenly">
                                    <i className="icon icon-star"></i>
                                    <div className="tab-title">Enabler</div>                                    
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">First Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.</Tab.Pane>
                            <Tab.Pane eventKey="second">Second Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.</Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>   
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>                                        
                    <div className="security-accordion-list d-flex justify-content-between align-items-center">
                        <div className="accordion-header-title">Endpoint Security</div>
                        <div className="">
                            <ul className="list-inline security-accordion-ul d-flex align-items-center">
                                <li className="list-inline-item vulnerability">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-vulnerability"></i>
                                        <div className="security-accordion-title">Vulnerability</div>    
                                    </div>     
                                </li>
                                <li className="list-inline-item soc">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-soc"></i>
                                        <div className="security-accordion-title">SOC</div>    
                                    </div> 
                                </li>
                                <li className="list-inline-item hardening">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-hardening"></i>
                                        <div className="security-accordion-title">Hardening</div>    
                                    </div> 
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first"> 
                    <Row>
                        <Col xl={12}>
                        <Nav variant="pills" className="flex-row accordion-nav-wrapper">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="d-flex justify-content-evenly">
                                    <i className="icon icon-star"></i>
                                    <div className="tab-title">Top 5</div>                                    
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="d-flex justify-content-evenly">
                                    <i className="icon icon-star"></i>
                                    <div className="tab-title">Enabler</div>                                    
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">First Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.</Tab.Pane>
                            <Tab.Pane eventKey="second">Second Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.</Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container> 
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>                                        
                    <div className="security-accordion-list d-flex justify-content-between align-items-center">
                        <div className="accordion-header-title">Application Security</div>
                        <div className="">
                            <ul className="list-inline security-accordion-ul d-flex align-items-center">
                                <li className="list-inline-item vulnerability">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-vulnerability"></i>
                                        <div className="security-accordion-title">Vulnerability</div>    
                                    </div>     
                                </li>
                                <li className="list-inline-item soc">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-soc"></i>
                                        <div className="security-accordion-title">SOC</div>    
                                    </div> 
                                </li>
                                <li className="list-inline-item hardening">
                                    <div className="security-inner-btn d-flex justify-content-center align-items-center">
                                        <i className="icon icon-hardening"></i>
                                        <div className="security-accordion-title">Hardening</div>    
                                    </div> 
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first"> 
                    <Row>
                        <Col xl={12}>
                        <Nav variant="pills" className="flex-row accordion-nav-wrapper">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="d-flex justify-content-evenly">
                                    <i className="icon icon-star"></i>
                                    <div className="tab-title">Top 5</div>                                    
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="d-flex justify-content-evenly">
                                    <i className="icon icon-star"></i>
                                    <div className="tab-title">Enabler</div>                                    
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">First Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.</Tab.Pane>
                            <Tab.Pane eventKey="second">Second Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.</Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container> 
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default SecurityAccordion;