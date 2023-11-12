import { Typography } from '@material-tailwind/react';
import self from '../theme/self-min.png';
// @ts-ignore
import resume from '../theme/website_resume.pdf';

export default function Intro() {
  return (
    <section className='flex flex-row justify-center items-center mt-32 mb-14 md:min-h-screen md:-mt-20 md:mb-0'>
      <div className='w-3/5'>
        <div>
          <Typography className='md:text-6xl text-3xl font-bold -mt-20 text-blue-gray-900'>
            Hi I'm Abtin Tabrizi
          </Typography>

          <Typography className='md:text-3xl text-xl font-semibold text-light-blue-600'>
            Software Engineer
          </Typography>

          <Typography className='md:text-xl text-base'>
            I'm a student currently studying computer science at the University
            of Waterloo, welcome to my portfolio. Scroll down to see more. Last
            updated November 5th, 2023.
          </Typography>
        </div>

        <div className='flex flex-row mt-2 gap-3'>
          <a
            href='https://github.com/abtintabrizi'
            target='_blank'
            rel='noreferrer'
            className='flex flex-row justify-center items-center gap-1 bg-light-blue-300 sm:p-3 p-2 hover:opacity-[0.85] rounded-lg font-semibold ease-in-out duration-300 hover:shadow-lg'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            Github
          </a>

          <a
            href='https://www.linkedin.com/in/abtin-a-tabrizi/'
            target='_blank'
            rel='noreferrer'
            className='flex flex-row justify-center items-center gap-1 bg-light-blue-300 sm:p-3 p-2 hover:opacity-[0.85] rounded-lg font-semibold ease-in-out duration-300 hover:shadow-lg'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='24'
              height='24'
              viewBox='0 0 50 50'
            >
              <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
            </svg>
            LinkedIn
          </a>

          <a
            href={resume}
            target='_blank'
            rel='noreferrer'
            className='flex flex-row justify-center items-center gap-1 bg-light-blue-300 sm:p-3 p-2 hover:opacity-[0.85] rounded-lg font-semibold ease-in-out duration-300 hover:shadow-lg'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 64 64'
            >
              <path
                d='m55.707 11.293-10-10A1.115 1.115 0 0 0 45 1H9a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1V12a1.092 1.092 0 0 0-.293-.707zM52.586 11H46V4.414zM10 61V3h34v9a1 1 0 0 0 1 1h9v48z'
                fill='#28282b'
              />
              <path
                d='M34 8h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM34 13h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM50 16H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 21H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 26H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 31H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 36H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 41H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 46H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 51H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 56H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM22 19a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3z'
                fill='#28282b'
              />
              <path
                d='M14 28h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H14a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1zm1.473-2a7.325 7.325 0 0 1 13.054 0zM29 8v15.164a9.325 9.325 0 0 0-14 0V8z'
                fill='#28282b'
              />
            </svg>
            Resume
          </a>
        </div>
      </div>

      <svg
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
        className='w-2/5 -mt-20 fill-white'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <mask id='mask0' type='alpha'>
          <path
            d='M50,-24.8C64.1,-4.5,74.3,22.1,65.3,42.8C56.3,63.4,28.2,78,2.7,76.5C-22.8,75,-45.6,57.2,-59.7,33.7C-73.7,10.2,-78.9,-19.2,-67.5,-37.9C-56.1,-56.7,-28,-64.8,-5,-61.9C18,-59,35.9,-45,50,-24.8Z'
            transform='translate(100 100)'
          />
        </mask>
        <g mask='url(#mask0)'>
          <path
            d='M50,-24.8C64.1,-4.5,74.3,22.1,65.3,42.8C56.3,63.4,28.2,78,2.7,76.5C-22.8,75,-45.6,57.2,-59.7,33.7C-73.7,10.2,-78.9,-19.2,-67.5,-37.9C-56.1,-56.7,-28,-64.8,-5,-61.9C18,-59,35.9,-45,50,-24.8Z'
            transform='translate(100 100)'
            className=' fill-light-blue-500 opacity-80'
          />
          <image xlinkHref={self} className='w-4/5' x={16} y={20} />
        </g>
      </svg>
    </section>
  );
}
