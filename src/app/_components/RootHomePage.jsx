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
  const [stepNum, setStep] = React.useState(0)
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
  // console.log(stepNum)
  return (
    <>
      <StepComponent numStep={stepNum} />
      {
        stepNum === 0 ? (
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
                    {stepNum === 1 && <StepPageTwo nextStep={nextStep} />}
                    {stepNum === 2 && <StepPageThree nextStep={nextStep}/>}
                    {stepNum === 3 && <FinishComponent/>}
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