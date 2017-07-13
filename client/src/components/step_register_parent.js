import React from 'react'
import { Step } from 'semantic-ui-react'

// const steps = [
//   { completed: false, title: 'Register Parent', description: 'Input Parent Information' },
//   { completed: false, title: 'Register Child(ren)', description: 'Input Children Information' },
//   { active: false, title: 'Login', description: 'Begin Family Time' },
// ]

const StepRegisterParent = () => (
  <div>
    <Step.Group ordered>
      <Step active>
        <Step.Content>
          <Step.Title>Register Parent</Step.Title>
          <Step.Description>Enter Basic Parent Information</Step.Description>
        </Step.Content>
      </Step>

      <Step title='Child Information' description='Simply Enter Age and Interests' />

      <Step title='User Login' description='Begin Family Time' />
    </Step.Group>
  </div>
)

export default StepRegisterParent;