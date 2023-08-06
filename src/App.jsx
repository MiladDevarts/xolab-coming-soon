
import './App.css'
import './index.css'

import Lottie from 'react-lottie';
import animationData from './lotties/laboratory-research.json';

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <section className='flex flex-col gap-y-2 items-center justify-center  w-full h-screen bg-slate-900 text-white'>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      <h1 className='text-3xl font-light'> - Coming Soon | <span className='font-bold'>XOLab.io</span></h1>
    </section>
  );
}
