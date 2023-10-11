import { Container, Row } from "react-bootstrap"
import { useState } from "react"
import Sidebar from "./Sidebar"
import './Sidebar.css'

export const Layout = ({children}) => {
    const [step , setStep] = useState(1);
    return (
        <>
            <div className='outer-cell d-flex align-items-center justify-content-center'>
                <div className='box'>
                    <Container>
                        <Row>
                            <Sidebar step={step} setStep={setStep} />
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}