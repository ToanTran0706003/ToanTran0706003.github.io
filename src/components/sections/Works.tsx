import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import type { Language, TProject } from '../../types';

const ProjectCard: React.FC<{ index: number; language: Language } & TProject> = ({
  index,
  language,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div className="flex h-full" variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        className="flex h-full"
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary flex h-full min-h-[535px] w-full flex-col rounded-2xl p-5 sm:w-[300px]">
          <div className="relative h-[230px] w-full shrink-0">
            <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, '_blank')}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-1 flex-col">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 flex-1 text-[14px] leading-[22px]">
              {description[language]}
            </p>
          </div>
          <div className="mt-4 flex min-h-[52px] flex-wrap content-start gap-2">
            {tags.map(tag => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

type WorksProps = {
  language: Language;
};

const Works = ({ language }: WorksProps) => {
  return (
    <>
      <Header
        useMotion={true}
        p={config.sections.works.p[language]}
        h2={config.sections.works.h2[language]}
      />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content[language]}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap items-stretch gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} language={language} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
