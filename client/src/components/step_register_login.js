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
          <Step.Description>Input Parent Information</Step.Description>
        </Step.Content>
      </Step>

      <Step completed>
        <Step.Content>
          <Step.Title>Register Child(ren)</Step.Title>
          <Step.Description>Input Child(rens) Information</Step.Description>
        </Step.Content>
      </Step>

      <Step active>
        <Step.Content>
          <Step.Title>Login</Step.Title>
          <Step.Description>Begin Family Time</Step.Description>
        </Step.Content>
      </Step>

    </Step.Group>
  </div>
)

export default StepRegisterChildren;