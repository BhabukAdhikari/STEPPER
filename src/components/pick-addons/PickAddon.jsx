import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'

import './PickAddon.css'
import { useFormValues } from '../../context/FormContext'

export const addonsData = [
    {
        id: 1,
        title: 'Online service',
        price: 1,
        checked: false
    },
    {
        id: 2,
        title: 'Larger Storage',
        price: 2,
        checked: false

    },
    {
        id: 3,
        title: 'Customizable Profile',
        price: 20,
        checked: false

    },
]

const Item = ({ item, handleFormValues, handleAddon }) => {
    const { id, title, price , checked} = item;
    return (
        <div className='text-area d-flex my-3' key={id}>
            <input type='checkbox' className='ms-4 checkbox' checked={checked}  
                          onChange={() => handleAddon(id)}
                          value={id} name="addons"></input>
            <div className=''>
                <h6 className='mt-3 ms-4 service-ons'>{title}</h6>
                <p className='ms-4 mb-5 games-info'>Access to multiplayer games</p>
            </div>
            <p className='ms-5 end-dollar'>+${price}/mo</p>
        </div>
    )
}

export const Pickaddon = ({ handleNext, handlePrev }) => {
    const { addons, handleAddons, handleFormValues } = useFormValues();
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

    useEffect(() => {
        setIsNextButtonDisabled(addons.length === 0);
    }, [addons]);

    const handleSubmit = () => {
        handleNext();
    };

    return (
        <div className='col-md-7'>
            <div className='mt-4'>
                <h1 className='section-title'>Pick-add-ons</h1>
                <p className='section-text text-muted'>Add-ons help enhance your gaming experience.</p>
                <Form>
                    {addons.map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                            handleAddon={handleAddons}
                            handleFormValues={handleFormValues}
                        />
                    ))}
                    <div className='last-section d-flex justify-content-between'>
                        <div className='go-back-pick mt-3' onClick={handlePrev}>
                            Go Back
                        </div>
                        <div className='d-flex'>
                            <button
                                className='btn-next-step-pick'
                                onClick={handleSubmit}
                                disabled={isNextButtonDisabled}
                            >
                                Next Step
                            </button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
