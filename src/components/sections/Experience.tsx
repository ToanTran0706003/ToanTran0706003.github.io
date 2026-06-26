import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { Header } from '../atoms/Header';
import type { Language, TExperience } from '../../types';
import { config } from '../../constants/config';

const ExperienceCard: React.FC<TExperience & { language: Language }> = ({
  language,
  ...experience
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName[language]}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
      date={experience.date[language]}
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title[language]}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.companyName[language]}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points[language].map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

type ExperienceProps = {
  language: Language;
};

const Experience = ({ language }: ExperienceProps) => {
  return (
    <>
      <Header
        useMotion={true}
        p={config.sections.experience.p[language]}
        h2={config.sections.experience.h2[language]}
      />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} language={language} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
