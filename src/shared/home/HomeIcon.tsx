import { Typography } from '@material-tailwind/react';
import icon from '../theme/icon.png';

export default function HomeIcon() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button onClick={() => scrollToTop()}>
      <div className='flex flex-row justify-center items-center gap-2'>
        <img src={icon} className='w-10 h-10' alt='logo' />
        <Typography className='mr-4 cursor-pointer py-1.5 font-medium text-blue-gray-900'>
          Abtin Tabrizi
        </Typography>
      </div>
    </button>
  );
}
