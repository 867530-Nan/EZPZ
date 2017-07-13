import React from 'react'
import { Step } from 'semantic-ui-react'

// const steps = [
//   { completed: false, title: 'Register Parent', description: 'Input Parent Information' },
//   { completed: false, title: 'Register Child(ren)', description: 'Input Children Information' },
//   { active: false, title: 'Login', description: 'Begin Family Time' },
// ]

const StepRegisterChildren = () => (
  <div>
    <Step.Group ordered>
      <Step completed>
        <Step.Content>
          <Step.Title>Register Parent</Step.Title>
          <Step.Description>Enter Basic Parent Information</Step.Description>
        </Step.Content>
      </Step>

      <Step active>
        <Step.Content>
          <Step.Title>Child Information</Step.Title>
          <Step.Description>Simply Enter Age and Interests</Step.Description>
        </Step.Content>
      </Step>

      <Step title='User Login' description='Begin Family Time' />
    </Step.Group>
  </div>
)

export default StepRegisterChildren;