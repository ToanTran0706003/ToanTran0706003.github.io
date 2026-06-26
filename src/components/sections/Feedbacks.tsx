import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
import { fadeIn } from '../../utils/motion';
import { testimonials } from '../../constants';
import { Header } from '../atoms/Header';
import type { Language, TTestimonial } from '../../types';
import { config } from '../../constants/config';

const FeedbackCard: React.FC<
  {
    index: number;
    language: Language;
  } & TTestimonial
> = ({ index, language, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#2CE3C8]">
      {language === 'en' ? 'Signal' : 'Tín hiệu'}
    </p>

    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white">{testimonial[language]}</p>

      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {name[language]}
          </p>
          <p className="text-secondary mt-1 text-[12px]">
            {designation[language]} / {company[language]}
          </p>
        </div>

        <img
          src={image}
          alt={name[language]}
          className="h-10 w-10 rounded-full bg-tertiary object-contain p-2"
        />
      </div>
    </div>
  </motion.div>
);

type FeedbacksProps = {
  language: Language;
};

const Feedbacks = ({ language }: FeedbacksProps) => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}>
        <Header
          useMotion={true}
          p={config.sections.feedbacks.p[language]}
          h2={config.sections.feedbacks.h2[language]}
        />
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name.en}
            index={index}
            language={language}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
