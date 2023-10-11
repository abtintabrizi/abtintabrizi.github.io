import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { data } from "./shared/data";
import { useState } from "react";
import icon from "./shared/icon.png";
import Section from "./shared/Section";
import ScrollToTop from "./shared/ScrollToTop";

export default function Home() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className='bg-gradient-to-br from-white to-light-blue-100 w-full h-full'>
      <Navbar
        blurred
        className='sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4'
      >
        <div className='flex items-center justify-between text-blue-gray-900'>
          <a href='/#'>
            <div className='flex flex-row justify-center items-center gap-2'>
              <img src={icon} className='w-10 h-10' alt='logo' />
              <Typography className='mr-4 cursor-pointer py-1.5 font-medium text-blue-gray-900'>
                Abtin Tabrizi
              </Typography>
            </div>
          </a>

          <div className='flex items-center gap-4'>
            <div className='mr-4 hidden lg:block space-x-4'>
              {data.map((section) => {
                return (
                  <a
                    key={section.header}
                    href={section.header}
                    className='font-bold p-4 border border-blue-gray-400 rounded-3xl text-blue-gray-900 hover:shadow-md hover:bg-blue-gray-200/10 ease-in-out duration-300'
                  >
                    {section.header}
                  </a>
                );
              })}
            </div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{"hello"}</Collapse>
      </Navbar>
      <main className='w-full mt-5'>
        <div className='flex flex-col justify-center items-center'>
          {data.map((section) => {
            return <Section data={section}></Section>;
          })}
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
}
