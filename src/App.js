import { useState } from 'react';
import { CrontrolledModal } from './ControlledModal';
import './App.css';

function App() {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <CrontrolledModal
        shouldShow={shouldShow}
        onRequestClose={() => setShouldShow(false)}
      >
        <h1>Hello Controlled Modal</h1>
      </CrontrolledModal>
      <button onClick={() => setShouldShow(!shouldShow)}>
        {shouldShow ? 'Hide modal' : 'Show modal'}
      </button>
    </>
  );
}

export default App;
