import {
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from '@material-tailwind/react';
import { TimelineEntry } from '../data/about-data';

export default function TimelineElement({ entry }: { entry: TimelineEntry }) {
  return (
    <TimelineItem key={entry.title}>
      <TimelineConnector className='md:!w-[78px] !w-[68px]' />
      <TimelineHeader className='relative rounded-xl border border-light-blue-300 bg-light-blue-300/40 md:py-3 py-1 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
        <TimelineIcon className='p-3' variant='filled'>
          {entry.icon}
        </TimelineIcon>
        <div className='flex flex-col gap-1'>
          <Typography className='sm:text-sm text-xs font-bold'>
            {entry.title}
          </Typography>
          {entry.date && (
            <Typography className='sm:text-sm text-xs'>{entry.date}</Typography>
          )}
          {entry.period && (
            <Typography className='sm:text-sm text-xs'>
              {entry.period.startDate} - {entry.period.endDate}
            </Typography>
          )}
        </div>
      </TimelineHeader>
      <TimelineBody className='pb-2'>
        {/* <Typography className='sm:text-base text-sm'>
            {entry.description}
          </Typography> */}
      </TimelineBody>
    </TimelineItem>
  );
}
