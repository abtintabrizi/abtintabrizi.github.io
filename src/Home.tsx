import { data } from './shared/data/data';
import Section from './shared/section/Section';
import ScrollToTop from './shared/home/ScrollToTop';
import Navigation from './shared/home/Navigation';
import Intro from './shared/intro/Intro';
import AboutMe from './shared/about-me/AboutMe';

export default function Home() {
  return (
    <div className='bg-gradient-to-br from-white to-light-blue-200 w-full h-full'>
      <Navigation />

      <main className='relative w-full just flex flex-col items-center'>
        <div className='flex flex-col justify-center items-center sm:w-2/3 w-11/12'>
          <Intro />
          <AboutMe />
          {data.map((section) => {
            return <Section data={section} key={section.header}></Section>;
          })}
        </div>
      </main>

      <ScrollToTop />
    </div>
  );
}
