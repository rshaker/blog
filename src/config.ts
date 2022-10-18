import type { SocialsObject } from "./types";

export const SITE = {
  website: "https://rshaker.github.io",
  base: "blog",
  author: "Ron Shaker",
  desc: "A mix of unforseen things",
  title: "my blog",
  ogImage: "default-og.png",
  lightAndDarkMode: true,
  postPerPage: 4,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialsObject = [
  {
    name: "Github",
    href: "https://github.com/rshaker/blog",
    active: true,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ron-shaker",
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/boodlefish",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:rshaker@gmail.com",
    active: true,
  },
];
