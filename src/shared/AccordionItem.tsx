import { useState } from "react";
import { SubSectionInfo } from "./data";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from "@material-tailwind/react";
import classNames from "classnames";

function Icon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={classNames("h-5 w-5 transition-transform", {
        "rotate-180": open,
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

export default function AccordionItem({ data }: { data: SubSectionInfo }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = (open: boolean) => setOpen(!open);

  return (
    <div>
      {data.subSections || data.listItems ? (
        <Accordion
          open={open}
          icon={<Icon open={open} />}
          animate={CUSTOM_ANIMATION}
        >
          <AccordionHeader
            onClick={() => toggleOpen(open)}
            className='border-b-blue-gray-300 px-4'
          >
            <Typography variant='h4'>{data.itemHeader}</Typography>
          </AccordionHeader>
          <AccordionBody>
            <ul className='list-disc px-4'>
              {data.listItems?.map((item) => {
                return (
                  <Typography>
                    <li key={item} className='ml-4'>
                      {item}
                    </li>
                  </Typography>
                );
              })}
            </ul>
          </AccordionBody>
        </Accordion>
      ) : (
        <Accordion open={false}>
          <AccordionHeader className='cursor-default border-b-blue-gray-300 px-4'>
            <Typography variant='h4'>{data.itemHeader}</Typography>
          </AccordionHeader>
        </Accordion>
      )}
    </div>
  );
}
