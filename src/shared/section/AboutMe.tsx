import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from '@material-tailwind/react';
import { aboutData } from '../data/about-data';

export default function AboutMe() {
  return (
    <section
      id={aboutData.header.replace(/\s/g, '')}
      className='flex flex-col pt-20 -mt-20 pb-20 w-full justify-center items-center'
    >
      <Typography variant='h2'>{aboutData.header}</Typography>

      <div className='w-full flex flex-row'>
        {aboutData.subSections.map((subSection) => {
          return (
            <div
              key={subSection.sectionHeader}
              className='w-1/2 flex flex-col items-center px-4'
            >
              <Typography variant='h4' className='mb-4'>
                {subSection.sectionHeader}
              </Typography>

              {subSection.timelineItems?.map((item) => {
                return (
                  <Timeline key={item.title}>
                    <TimelineItem>
                      <TimelineConnector className='!w-[78px]' />
                      <TimelineHeader className='relative rounded-xl border border-light-blue-300 bg-light-blue-300/40 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
                        <TimelineIcon className='p-3' variant='filled'>
                          {item.icon}
                        </TimelineIcon>
                        <div className='flex flex-col gap-1'>
                          <Typography className='sm:text-sm text-xs font-bold'>
                            {item.title}
                          </Typography>
                          {item.date && (
                            <Typography className='sm:text-sm text-xs'>
                              {item.date}
                            </Typography>
                          )}
                          {item.period && (
                            <Typography className='sm:text-sm text-xs'>
                              {item.period.startDate} - {item.period.endDate}
                            </Typography>
                          )}
                        </div>
                      </TimelineHeader>
                      <TimelineBody className='pb-2'>
                        {/* <Typography className='sm:text-base text-sm'>
                          {item.description}
                        </Typography> */}
                      </TimelineBody>
                    </TimelineItem>
                  </Timeline>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
