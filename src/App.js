import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';
import './App.css';

const StepOne = ({
  goToNext,
}) => (
  <>
    <h1>Step 1</h1>
    <button
      onClick={() => goToNext({ name: 'John Due' })}
    >
      Next
    </button>
  </>
);
const StepTwo = ({
  goToNext,
}) => (
  <>
    <h1>Step 2</h1>
    <button
      onClick={() => goToNext({ age: 25 })}
    >
      Next
    </button>
  </>
);
const StepThree = ({
  goToNext,
}) => (
  <>
    <h1>Step 3</h1>
    <button
      onClick={() => goToNext({ hairColor: 'brown' })}
    >
      Next
    </button>
  </>
);

function App() {
  return (
    <>
      <UncontrolledOnboardingFlow
        onFinish={data => console.log(data)}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  );
}

export default App;
