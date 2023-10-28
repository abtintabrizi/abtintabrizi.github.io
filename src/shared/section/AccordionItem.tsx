import { useState } from 'react';
import { SubSectionInfo } from '../data';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from '@material-tailwind/react';
import classNames from 'classnames';
import parse from 'html-react-parser';

function Icon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={classNames('h-5 w-5 transition-transform', {
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

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const accordionHeaderContent = (data: SubSectionInfo) => {
  return (
    <div className='flex flex-row items-center justify-between w-full'>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center gap-2 flex-wrap'>
          <Typography className='sm:text-xl text-base font-bold'>
            {data.itemHeader}
          </Typography>
          {data.description && (
            <Typography className='sm:text-xl text-base'>
              | <i>{data.description}</i>
            </Typography>
          )}
        </div>

        {data.location && (
          <Typography className='sm:text-sm text-xs'>
            {data.location}
          </Typography>
        )}
      </div>

      {data.startDate && data.endDate && (
        <Typography className='sm:text-base text-xs font-bold'>
          {data.startDate} - {data.endDate}
        </Typography>
      )}

      {data.date && (
        <Typography className='sm:text-base text-xs font-bold'>
          {data.date}
        </Typography>
      )}
    </div>
  );
};

export default function AccordionItem({
  data,
  className,
}: {
  data: SubSectionInfo;
  className: string;
}) {
  const [open, setOpen] = useState(false);
  const toggleOpen = (open: boolean) => setOpen(!open);

  return (
    <div className={className}>
      {data.subSections || data.listItems ? (
        /* Collapsible items */
        <Accordion
          open={open}
          icon={<Icon open={open} />}
          animate={CUSTOM_ANIMATION}
        >
          <AccordionHeader
            onClick={() => toggleOpen(open)}
            className='border-b-blue-gray-300 px-4 items-center'
          >
            {accordionHeaderContent(data)}
          </AccordionHeader>

          <AccordionBody>
            <div className='flex flex-col'>
              <ul className='list-disc px-4'>
                {data.listItems?.map((item) => {
                  return (
                    <Typography key={item}>
                      <li className='ml-4 sm:text-base text-sm'>
                        {parse(item)}
                      </li>
                    </Typography>
                  );
                })}
              </ul>

              {data.subSections?.map((subSection) => {
                return (
                  <AccordionItem
                    key={subSection.itemHeader}
                    data={subSection}
                    className='w-11/12 self-center'
                  />
                );
              })}
            </div>
          </AccordionBody>
        </Accordion>
      ) : (
        /* Non-collapsible items */
        <Accordion open={false}>
          <AccordionHeader className='cursor-default border-b-blue-gray-300 px-4'>
            {accordionHeaderContent(data)}
          </AccordionHeader>
        </Accordion>
      )}
    </div>
  );
}
