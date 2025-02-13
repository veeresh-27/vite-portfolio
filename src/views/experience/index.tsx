import { ReactNode, FC } from "react";

interface ExperienceObject {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
}

interface ExperienceProps {
  experience: ExperienceObject[];
}

export const Experience: FC<ExperienceProps> = (props: any) => {
  return <></>;
};
