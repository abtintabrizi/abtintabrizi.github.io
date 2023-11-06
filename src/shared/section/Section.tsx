import { Chip, Typography } from '@material-tailwind/react';
import { SectionInfo } from '../data/data';
import AccordionItem from './AccordionItem';

export default function Section({ data }: { data: SectionInfo }) {
  return (
    <section
      id={data.header}
      className='flex flex-col pt-20 -mt-20 pb-20 w-full justify-center items-center'
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
          <div className='flex flex-wrap items-center justify-center gap-2 mt-2'>
            {data.listItems?.map((item) => {
              return <Chip variant='gradient' value={item} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
}
