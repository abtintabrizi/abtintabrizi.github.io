import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Chip,
} from '@material-tailwind/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { SkillSection } from '../data/about-data';

function Icon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={classNames('md:h-5 md:w-5 w-3 h-3 transition-transform', {
        'rotate-180': open,
      })}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
}

export default function SkillAccordion({ section }: { section: SkillSection }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = (open: boolean) => setOpen(!open);

  // Open frontend by default
  useEffect(() => {
    if (section.type === 'Frontend') {
      toggleOpen(open);
    }
  }, []);

  return (
    <div>
      <Accordion
        open={open}
        className=' border-light-blue-300 bg-light-blue-300/40 border-2 rounded-xl'
        icon={<Icon open={open} />}
      >
        <AccordionHeader
          onClick={() => toggleOpen(open)}
          className='px-4 py-2 md:py-4 items-center border-0 md:text-base text-xs font-bold text-black'
        >
          {section.type}
        </AccordionHeader>

        <AccordionBody>
          <div className='flex flex-col md:gap-2 gap-1 md:px-4 px-1'>
            {section.skills.map((skill) => {
              return (
                <Chip
                  variant='gradient'
                  size='sm'
                  value={skill}
                  className='md:text-sm text-[0.6rem] font-normal truncate'
                />
              );
            })}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
}
