export type Language = 'en' | 'vi';

export type LocalizedText<T = string> = Record<Language, T>;

export type TCommonProps = {
  title?: LocalizedText;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: LocalizedText;
  iconBg: string;
  date: LocalizedText;
  points: LocalizedText<string[]>;
} & Required<Omit<TCommonProps, 'name'>>;

export type TTestimonial = {
  testimonial: LocalizedText;
  designation: LocalizedText;
  company: LocalizedText;
  image: string;
  name: LocalizedText;
};

export type TProject = {
  description: LocalizedText;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
} & Required<Pick<TCommonProps, 'name'>>;

export type TTechnology = Required<Omit<TCommonProps, 'title'>>;

export type TNavLink = {
  id: string;
  title: LocalizedText;
};

export type TService = Required<Omit<TCommonProps, 'name'>>;

export type TMotion = {
  direction: 'up' | 'down' | 'left' | 'right' | '';
  type: 'tween' | 'spring' | 'just' | '';
  delay: number;
  duration: number;
};
