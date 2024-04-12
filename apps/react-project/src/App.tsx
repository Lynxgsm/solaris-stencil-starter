import { useState } from 'react';
import { SolarisButton } from 'solaris-react';

export default function App() {
  const [loading, setloading] = useState(true);
  return (
    <div className='mx-4 my-4'>
      <button
        onClick={() => setloading(!loading)}
        className='lp-btn-default lp-btn-myrtille lp-loading'
      >
        Hello World
      </button>
      <SolarisButton
        iconPosition='right'
        color='supernova'
        type='link'
        size='lg'
        loading={loading}
      >
        Button
      </SolarisButton>
      {loading ? 'true' : 'false'}
    </div>
  );
}
