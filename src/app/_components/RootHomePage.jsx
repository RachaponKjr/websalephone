'use client'
import React from 'react'
import StepComponent from './StepComponent'
import EstimateComponent from './EstimateComponent'
import QAComponents from './QAComponents'
import StepPageTwo from './StepPageTwo'
import LoadingComponent from './_components_root/LoadingComponent'
import StepPageThree from './StepPageThree'

const RootHomePage = () => {
  const [step, setStep] = React.useState(0)
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
      <StepComponent />
      {
        step === 0 ? <EstimateComponent nextStep={nextStep} /> :
          (
            <>
              {
                loading === true ? (
                  <LoadingComponent />
                ) : (
                  <>
                    {step === 1 && <StepPageTwo nextStep={nextStep} />}
                    {step === 2 && <StepPageThree/>}
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