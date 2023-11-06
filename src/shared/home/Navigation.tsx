import {
  Collapse,
  IconButton,
  List,
  ListItem,
  Navbar,
} from '@material-tailwind/react';
import HomeIcon from './HomeIcon';
import { useEffect, useState } from 'react';
import { data } from '../data/data';
import { aboutData } from '../data/about-data';

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  const scrollAndClose = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setTimeout(function () {
      setOpenNav(false);
    }, 500);
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // @ts-ignore
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }, []);

  return (
    <Navbar
      blurred
      className='sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4'
    >
      <div className='flex items-center lg:justify-center justify-between text-blue-gray-900 sm:gap-x-36'>
        <HomeIcon />

        <div className='flex items-center gap-4'>
          <div className='mr-4 hidden lg:block space-x-2'>
            {[aboutData, ...data].map((section) => {
              return (
                <a
                  key={section.header}
                  href={`#${section.header.replace(/\s/g, '')}`}
                  className='font-bold p-4 border-blue-gray-400 rounded-3xl hover:text-blue-700 hover:shadow-md hover:bg-blue-gray-200/10 ease-in-out duration-300'
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

      <Collapse open={openNav}>
        <List>
          {data.map((section) => {
            return (
              <ListItem className='p-0' key={section.header}>
                <button
                  className='p-3 font-bold w-full h-full'
                  onClick={() => scrollAndClose(section.header)}
                >
                  {section.header}
                </button>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </Navbar>
  );
}
