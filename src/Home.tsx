import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  MobileNav,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center'>
          Pages
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center'>
          Account
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center'>
          Blocks
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center'>
          Docs
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className='bg-gradient-to-br from-white to-light-blue-100 w-screen h-screen'>
      <main className='flex flex-col justify-center items-center'>test</main>
    </div>
  );
}
