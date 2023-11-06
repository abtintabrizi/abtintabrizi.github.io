import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';

export type AboutSection = {
  header: string;
  subSections: AboutSectionInfo[];
};

export type AboutSectionInfo = {
  sectionHeader: string;
  timelineItems?: TimelineItem[];
  skillSections?: SkillSection[];
};

export type SkillSection = {
  type: string;
  skills: string[];
};

export type TimelineItem = {
  date?: string;
  period?: {
    startDate: string;
    endDate: string;
  };
  icon: ReactNode;
  title: string;
  description?: string;
};

export const aboutData: AboutSection = {
  header: 'About Me',
  subSections: [
    {
      sectionHeader: 'My Journey So Far',
      timelineItems: [
        {
          date: 'September 2020',
          icon: <AcademicCapIcon className='h-5 w-5' />,
          title: 'Begin @ University of Waterloo',
        },
        {
          period: {
            startDate: 'May 2021',
            endDate: 'August 2021',
          },
          icon: <BriefcaseIcon className='h-5 w-5' />,
          title: 'Project Team Member @ WE Accelerate',
        },
        {
          period: {
            startDate: 'May 2022',
            endDate: 'August 2022',
          },
          icon: <BriefcaseIcon className='h-5 w-5' />,
          title: 'Full Stack Engineer @ Thomson Reuters',
        },
        {
          period: {
            startDate: 'January 2023',
            endDate: 'April 2023',
          },
          icon: <BriefcaseIcon className='h-5 w-5' />,
          title: 'Frontend Software Engineer @ SS&C Technologies',
        },
        {
          period: {
            startDate: 'September 2023',
            endDate: 'Present',
          },
          icon: <BriefcaseIcon className='h-5 w-5' />,
          title: 'Full Stack Software Engineer @ Arctic AI',
        },
        // {
        //   date: 'May 2025',
        //   icon: <AcademicCapIcon className='h-5 w-5' />,
        //   title: 'Graduate @ University of Waterloo',
        // },
      ],
    },
    {
      sectionHeader: 'Skills',
      skillSections: [
        {
          type: 'Frontend',
          skills: [
            'React',
            'Vue',
            'Angular',
            'Bootstrap',
            'Tailwind',
            'HTML',
            'CSS',
            'SASS',
          ],
        },
        {
          type: 'Backend',
          skills: [
            'Node',
            'Express',
            'Python',
            'C++',
            'C#',
            'C',
            'R',
            'MySQL',
            'MongoDB',
          ],
        },
        {
          type: 'Tools',
          skills: [
            'Git',
            'Jira',
            'Postman',
            'Visual Studio',
            'Azure DevOps',
            'Figma',
            'Trello',
            'Unity',
          ],
        },
        {
          type: 'Interpersonal',
          skills: [
            'Problem Solving',
            'Communication',
            'Teamwork',
            'Responsibility',
            'Initiative',
            'Leadership',
          ],
        },
      ],
    },
  ],
};
