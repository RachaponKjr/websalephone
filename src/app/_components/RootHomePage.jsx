'use client'
import React from 'react'
import StepComponent from './StepComponent'
import EstimateComponent from './EstimateComponent'
import QAComponents from './QAComponents'
import StepPageTwo from './StepPageTwo'

const RootHomePage = () => {
  const [step, setStep] = React.useState(0)

  const nextStep = (step) => {
    setStep(step)
  }
  // debug
  console.log(step)
  return (
    <>
      <StepComponent />
      {step == 0 && <>
      <EstimateComponent nextStep={nextStep} />
      <QAComponents />
      </>
      }
      {step == 1 && <StepPageTwo />}
    </>
  )
}

export default RootHomePage