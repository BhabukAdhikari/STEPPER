import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import { Sidebar } from './sidebar';
import { Personal } from './personal';
import { Plan } from './plan';
import { Pickaddon } from './pick-addons';
import { Finishing } from './finishing';
import { useStepper } from '../context/StepperContext';


const Stepper = () => {
    const {handleNext , handlePrev , step , setStep}  = useStepper();

    return (
        <div className='outer-cell flex'>
            <div className='box'>
                <Container>
                    <Row>
                        <Sidebar setStep={setStep} step={step}/>
                        <Col md={1}></Col>
                        {step === 1 && <Personal handleNext={handleNext} />}
                        {step === 2 && <Plan handlePrev={handlePrev} handleNext={handleNext} />}
                        {step === 3 && <Pickaddon handlePrev={handlePrev} handleNext={handleNext} />}
                        {step === 4 && <Finishing handlePrev={handlePrev} handleNext={handleNext} />}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Stepper