import Stepper from "./components/Stepper";

import { StepperProvider } from "./context/StepperContext";
import { FormProvider } from "./context/FormContext";

//bootstrap css
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'

const App = () => {
    return (
        <StepperProvider>
            <FormProvider>
                <Stepper />
            </FormProvider>
        </StepperProvider>
    )
}
export default App