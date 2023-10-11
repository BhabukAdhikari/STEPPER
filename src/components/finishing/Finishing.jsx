import { useFormValues } from '../../context/FormContext'
import './Finishing.css'

export const Finishing = ({ handlePrev }) => {
    const { formValues: { name, email }, selectedPlan, addons, handleTotalPrice } = useFormValues();
    const price = handleTotalPrice()

    return (
        <div className='col-md-7'>
            <div className='mt-4'>
                <h1 className='section-title'>Finishing up</h1>
                <p className='section-text text-gray'>Double-check everything looks ok before conforming.</p>
                <div className="monthly-box">
                    <div className='arcade-section with-border d-flex justify-content-between'>
                        <div className="arcade-monthly">{selectedPlan.name}(monthly)
                            <p className='arcade-text'>Change</p>
                        </div>
                        <div className="amount-usd-mo mt-2">${selectedPlan.price}/mo</div>
                    </div>
                    {
                        addons.map((addon) => (
                            addon.checked === true && (
                                <div className='service-storage-section d-flex justify-content-between'>
                                    <div className="service-storage mt-3">{addon.title}
                                    </div>
                                    <div className="amount-usd mt-3">+${addon.price}/mo
                                    </div>
                                </div>
                            )
                        ))
                    }
                </div>
                <div className="total-section d-flex justify-content-between mt-4">
                    <div className='total ms-3'>
                        Total(per month):
                    </div>
                    <div className='final-amount'>+${price}/mo
                    </div>
                </div>
                <div className='last-section d-flex justify-content-between'>
                    <div className='go-back-text' onClick={handlePrev}>Go Back
                    </div>
                    <div className='confirm-btn'>
                        <button className='btn-confirm'>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
