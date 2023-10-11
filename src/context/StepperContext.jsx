import { createContext, useContext, useState } from "react";

export const StepperContext = createContext();

export const StepperProvider = ({ children }) => {

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(prev => prev + 1)
    }
    const handlePrev = () => {
        setStep(prev => prev - 1)
    }

    return (
        <StepperContext.Provider value={{step , handleNext , handlePrev , setStep}}>
            {children}
        </StepperContext.Provider>
    )
}

export const useStepper = () => {
    return useContext(StepperContext)
}