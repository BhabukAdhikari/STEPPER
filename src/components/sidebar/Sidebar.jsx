import React from 'react'
import './Sidebar.css'

export const Sidebar = ({ step, setStep }) => {

  return (
    <div className='col-md-4  sidebar-image d-flex d-md-block'>
      <div className='aside-bar d-flex'>
        <div className='side-bar-steps'>
          <div className='d-flex' onClick={() => setStep(1)}>
            <p className={`${step === 1 ? 'circle-dark' : 'circle-light'} ms-5`}>1</p>
            <p className='ms-4 personal-step'>STEP 1</p>
            <div className='mt-3'>
              <p className='info-yours text-white'>YOUR INFO</p>
            </div>
          </div>
          <div className='d-flex mt-1' onClick={() => setStep(2)}>
            <p className={`${step === 2 ? 'circle-dark' : 'circle-light'} ms-5`}>2</p>
            <p className='ms-4 personal-step'>STEP 2</p>
            <div className='mt-3'>
              <p className='info-yours text-white'>SELECT PLAN</p>
            </div>
          </div>
          <div className='d-flex mt-1' onClick={() => setStep(3)}>
            <p className={`${step === 3 ? 'circle-dark' : 'circle-light'} ms-5`}>3</p>
            <p className='ms-4 personal-step'>STEP 3</p>
            <div className='mt-3'>
              <p className='info-yours text-white'>ADD-ONS</p>
            </div>
          </div>
          <div className='d-flex mt-1' onClick={() => setStep(4)}>
            <p className={`${step === 4 ? 'circle-dark' : 'circle-light'} ms-5`}>4</p>
            <p className='ms-4 personal-step'>STEP 4</p>
            <div className='mt-3'>
              <p className='info-yours text-white'>SUMMARY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
