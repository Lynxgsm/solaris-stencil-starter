import { SolarisButton, SolarisThemeProvider } from 'solaris-react';

export default function App() {
  return (
    <SolarisThemeProvider>
      <SolarisButton color='comet' styling='mx-4'>
        Hello
      </SolarisButton>
      <section className='row'>
        <div className='col l12 s12 m6 bg-black hide-on-med-and-down'>
          <div className='text-comet' style={{ width: '100%', height: 30 }}>
            Lorem ipsum
          </div>
        </div>
      </section>
    </SolarisThemeProvider>
  );
}
