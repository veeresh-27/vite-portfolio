import {
  InstagramIcon,
  GithubIcon,
  HashNodeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/icons";

export type Icon = {
  id: number;
  displayName: string;
  title: string;
  position: string;
  link: string;
  comp: string;
  width: number | string;
};

export const icons: Icon[] = [
  {
    id: 1,
    displayName: "Instagram",
    title: "InstagramIcon",
    comp: InstagramIcon,
    position: "right",
    link: "https://www.instagram.com/_veeresh_27",
    width: 30,
  },
  {
    id: 2,
    displayName: "Github",
    title: "GithubIcon",
    comp: GithubIcon,
    position: "left",
    link: "https://github.com/veeresh-27",
    width: 30,
  },
  {
    id: 4,
    displayName: "LinkedIn",
    title: "LinkedInIcon",
    comp: LinkedInIcon,
    position: "left",
    link: "https://www.linkedin.com/in/veeresh-r-m",
    width: 30,
  },
  {
    id: 5,
    displayName: "Twitter",
    title: "TwitterIcon",
    comp: TwitterIcon,
    position: "right",
    link: "https://twitter.com/veereshrm_27",
    width: 30,
  },
];
