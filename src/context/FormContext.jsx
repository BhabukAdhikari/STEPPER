import { createContext, useContext, useState } from "react";
import { addonsData } from "../components/pick-addons";

export const FormContext = createContext();

const intialValues =
    { name: '', email: '', number: '' }

export const FormProvider = ({ children }) => {

    const [formValues, setFormValues] = useState(intialValues);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [addons, setAddons] = useState(addonsData);

    const handleTotalPrice = () => {
        const addonPrice = addons.reduce((total, addon) => {
          if (addon.checked) {
            return total + addon.price;
          }
          return total;
        }, 0);
        const totalPrice = addonPrice + (selectedPlan ? selectedPlan.price : 0);
      
        return totalPrice;
      };
      
    const hanndlePlan = plan => {
        setSelectedPlan(plan)
    }

    const handleAddons = (id) => {
        const updatedOptions = addons.map((option) =>
          option.id === id ? { ...option, checked: !option.checked } : option
        );
        setAddons(updatedOptions);
      };

    const handleFormValues = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    console.log({ formValues });

    return (
        <FormContext.Provider value={{ formValues, handleTotalPrice, handleFormValues, selectedPlan, hanndlePlan, addons, handleAddons }}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormValues = () => {
    return useContext(FormContext)
}