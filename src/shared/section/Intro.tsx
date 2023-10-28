import { Typography } from '@material-tailwind/react';
import blob from '../theme/blob.svg';

export default function Intro() {
  return (
    <section className='flex flex-row justify-center items-center min-h-screen sm:w-2/3 w-11/12 -mt-20'>
      <div className='w-3/5'>
        <Typography className='text-7xl font-bold -mt-20 text-blue-gray-900'>
          Hi I'm Abtin Tabrizi
        </Typography>
        <Typography className='text-4xl font-semibold text-light-blue-600'>
          Software Engineer
        </Typography>
        <Typography className='text-2xl'>
          I'm a student currently studying computer science at the University of
          Waterloo, welcome to my portfolio. Scroll down to see more. Last
          updated October 27th, 2023.
        </Typography>
      </div>

      <img src={blob} className='w-2/5 -mt-20'></img>
    </section>
  );
}
