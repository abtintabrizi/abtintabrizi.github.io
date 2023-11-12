import { Timeline, Typography } from '@material-tailwind/react';
import { aboutData } from '../data/about-data';
import SkillAccordion from './SkillAccordion';
import TimelineElement from './TimelineElement';

export default function AboutMe() {
  return (
    <section
      id={aboutData.header.replace(/\s/g, '')}
      className='flex flex-col pt-20 -mt-20 pb-20 w-full justify-center items-center'
    >
      <Typography variant='h2'>{aboutData.header}</Typography>

      <div className='w-full md:grid md:grid-cols-2 gap-4 flex flex-col'>
        {aboutData.subSections.map((subSection) => {
          return (
            <div
              key={subSection.sectionHeader}
              className='flex flex-col items-center'
            >
              <Typography className='mb-4 self-center font-bold md:text-2xl'>
                {subSection.sectionHeader}
              </Typography>

              {subSection.timelineEntries && (
                <Timeline>
                  {subSection.timelineEntries.map((entry) => {
                    return <TimelineElement entry={entry} />;
                  })}
                </Timeline>
              )}

              {subSection.skillSections && (
                <div className='grid grid-cols-2 gap-4 w-full'>
                  {subSection.skillSections.map((section) => {
                    return <SkillAccordion section={section} />;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
