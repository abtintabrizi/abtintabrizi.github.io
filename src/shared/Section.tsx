import { Typography } from '@material-tailwind/react';
import { SectionInfo } from './data';
import AccordionItem from './AccordionItem';

export default function Section({ data }: { data: SectionInfo }) {
  return (
    <section
      id={data.header}
      className='flex flex-col pt-20 w-2/3 justify-center items-center'
    >
      <Typography variant='h2'>{data.header}</Typography>
      <div className='w-full'>
        {data.subSections?.map((subSection) => {
          return <AccordionItem data={subSection}></AccordionItem>;
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
