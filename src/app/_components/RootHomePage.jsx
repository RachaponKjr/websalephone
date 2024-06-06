'use client'
import React from 'react'
import StepComponent from './StepComponent'
import EstimateComponent from './EstimateComponent'
import QAComponents from './QAComponents'
import StepPageTwo from './StepPageTwo'
import LoadingComponent from './_components_root/LoadingComponent'
import StepPageThree from './StepPageThree'
import FinishComponent from './FinishComponent'

const RootHomePage = () => {
  const [step, setStep] = React.useState(1)
  const [loading, setLoading] = React.useState(false)

  const nextStep = (step) => {
    // set loading
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    setStep(step)
  }
  // debug
  // console.log(step)
  return (
    <>
      <StepComponent step={step} />
      {
        step === 0 ? (
          <>
            <EstimateComponent nextStep={nextStep} />
            <QAComponents />
          </>) :
          (
            <>
              {
                loading === true ? (
                  <LoadingComponent />
                ) : (
                  <> 
                    {step === 1 && <StepPageTwo nextStep={nextStep} />}
                    {step === 2 && <StepPageThree nextStep={nextStep}/>}
                    {step === 3 && <FinishComponent/>}
                  </>
                )
              }
            </>
          )
      }
    </>
  )
}

export default RootHomePage