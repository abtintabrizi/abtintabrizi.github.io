import { Button } from '@material-tailwind/react';
import { useRef } from 'react';

export default function ScrollToTop() {
  const buttonRef = useRef<HTMLDivElement>(null);

  window.onscroll = () => scrollFunction();
  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      if (buttonRef.current) buttonRef.current.style.display = 'block';
    } else {
      if (buttonRef.current) buttonRef.current.style.display = 'none';
    }
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div
      ref={buttonRef}
      className='fixed bottom-8 right-8 hover:shadow-xl ease-out duration-300'
    >
      <Button
        variant='filled'
        className='p-4 hover:bg-black ease-in-out duration-300'
        onClick={() => scrollToTop()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75'
          />
        </svg>
      </Button>
    </div>
  );
}
