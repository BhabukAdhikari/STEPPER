import React, { useState } from 'react'
import img1 from '../../../src/assets/arcade.svg'
import img2 from '../../../src/assets/advanced.svg'
import img3 from '../../../src/assets/icon-pro.svg'
import './Plan.css'
import { Col } from 'react-bootstrap'
import { useFormValues } from '../../context/FormContext'

const plans = [{
  name: 'Arcade',
  price: 9,
  id: 1,
  icon: img1
}, {
  name: 'Advanced',
  price: 12,
  id: 2,
  icon: img2
}
  , {
  name: 'Pro',
  price: 15,
  id: 3,
  icon: img3
}
]

export const Item = ({ plan, hanndlePlan, selectedPlan }) => {
  return (
    <div className={`plan-item ${selectedPlan?.id === plan.id ? 'active-plan' : ''}`} onClick={() => hanndlePlan(plan)}>
      <div className='p-2'>
        <div className=''>
          <img src={plan.icon} alt='das' />
        </div>
        <div className='icon-text'>
          <p>{plan.name}</p>
          <p className='amount'>${plan.price}/mo</p>
        </div>
      </div>
    </div>
  )
}

export const Plan = ({ handlePrev, handleNext }) => {

  const {selectedPlan , hanndlePlan} = useFormValues();

  return (
    <div className='col-md-6 mt-4'>
      <h1 className='section-title'>Select Your plan</h1>
      <p className='section-text  text-muted'>You have the option of monthly of yearly billing.</p>
      <div className='row mt-5'>
        {
          plans.map((plan) => (
            <Col md={4}>
              <Item plan={plan} key={plan.id} hanndlePlan={hanndlePlan} selectedPlan={selectedPlan} />
            </Col>
          ))
        }
      </div>
      <div className='col-lg-12 col-md-12 col-sm-12'>
        <div className='date-info mt-5 d-flex'>
          <p className='monthly'>Monthly</p>
          <div className='switch'>
            <label>
              <input type="checkbox" className='checkbox-month-year'></input>
            </label>
            <label>
              <input type="checkbox"></input>
              <span class="slider round"></span>
            </label>
          </div>
          <p className='yearly text-disabled'>Yearly</p>
        </div>
      </div>
      <div className='last-section d-flex justify-content-between'>
        <div className='go-back mt-3' onClick={handlePrev}>Go Back
        </div>
        <div className='d-flex'>
          <button className='btn-next-step-plan' onClick={handleNext} disabled={!selectedPlan}>Next Step</button>
        </div>
      </div>
    </div>
  )
}