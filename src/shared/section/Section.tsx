import { Typography } from '@material-tailwind/react';
import { SectionInfo } from '../data';
import AccordionItem from './AccordionItem';

export default function Section({ data }: { data: SectionInfo }) {
  return (
    <section
      id={data.header}
      className='flex flex-col pt-20 w-full justify-center items-center'
    >
      <Typography variant='h2'>{data.header}</Typography>

      <div className='w-full'>
        {data.subSections?.map((subSection) => {
          return (
            <AccordionItem
              data={subSection}
              className='w-full'
              key={subSection.itemHeader}
            ></AccordionItem>
          );
        })}

        {data.listItems && (
          <div className='flex items-center justify-center'>
            <ul className='list-disc'>
              {data.listItems?.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
