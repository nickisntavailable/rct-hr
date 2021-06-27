import scratch from './assets/Logo/Scratch.svg';
import comp_gr from './assets/Logo/comp_gr.svg';
import cpp from './assets/Logo/cpp.svg';
import figma from './assets/Logo/figma.svg';
import front from './assets/Logo/front.svg';
import python from './assets/Logo/python.svg';
import unity from './assets/Logo/unity.svg';
import roblox from './assets/Logo/Roblox.svg';
import logo from "./assets/Logo/HWS Logo, Symbol.svg";
import vk from './assets/Logo/vk.svg';
import inst from './assets/Logo/instagramm.svg';
import fb from './assets/Logo/facebook.svg';
import gr from './assets/Logo/Group.svg';
import gr1 from './assets/Logo/Group-1.svg';
import gr2 from './assets/Logo/Group-2.svg';
import title from './assets/Logo/title.svg';
import footerIcon from './assets/Logo/footer_titlesvg.svg';

let state = {
    logo: logo,
    icons: {
      vk: vk, 
      inst: inst,
      fb:fb
    },
    about: {
      gr: gr,
      gr1: gr1,
      gr2: gr2,
      title: title
    },
    footer: {
      icon: footerIcon
    },
    courses: [
      {
        id: 0,
        age: "7-11 лет",
        title: "Программирование на языке Scratch", 
        img: scratch
      },
      {
        id: 1,
        age: "8-16 лет",
        title: "Компьютерная грамотность", 
        img: comp_gr
      },
      {
        id: 2,
        age: "8-16 лет",
        title: "Графический дизайн в редакторе Figma", 
        img: figma
      },
      {
        id: 3,
        age: "9-16 лет",
        title: "Создание 3D игр в Roblox", 
        img: roblox
      },
      {
        id: 4,
        age: "12-16 лет",
        title: "Создание сайтов Front-end разработка", 
        img: front
      },
      {
        id: 5,
        age: "12-16 лет",
        title: "Программирование на языке Python", 
        img: python
      },
      {
        id: 6,
        age: "12-16 лет",
        title: "Программирование на языке С++", 
        img: cpp
      },
      {
        id: 7,
        age: "12-17 лет",
        title: "Создание игр в Unity", 
        img: unity
      },
    ],
    course_page: [
      {
        id: 0,
        body: [
          {
            id: 0,
            title: "Введение в язык программирования Scratch",
            descr: "Узнаем, почему хорошо начинать изучать программирование именно со Scratch. Посмотрим какие программы можно на нем создавать. Познакомимся с редактором Scratch, узнаем полезные команды и создадим свою первую программу."
          },
          {
            id: 1,
            title: "Введение в язык программирования Scratch",
            descr: "Узнаем, почему хорошо начинать изучать программирование именно со Scratch. Посмотрим какие программы можно на нем создавать. Познакомимся с редактором Scratch, узнаем полезные команды и создадим свою первую программу."
          },
          {
            id: 2,
            title: "Введение в язык программирования Scratch",
            descr: "Узнаем, почему хорошо начинать изучать программирование именно со Scratch. Посмотрим какие программы можно на нем создавать. Познакомимся с редактором Scratch, узнаем полезные команды и создадим свою первую программу."
          },
        ]
      }, 
      {
        id: 1,
        body: [
          {
            id: 0,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 1,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
        ]
      },
      {
        id: 2,
        body: [
          {
            id: 0,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 1,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
        ]
      },
      {
        id: 3,
        body: [
          {
            id: 0,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 1,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
        ]
      },
      {
        id: 4,
        body: [
          {
            id: 0,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 1,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
        ]
      },
      {
        id: 5,
        body: [
          {
            id: 0,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 1,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
        ]
      },
      {
        id: 6,
        body: [
          {
            id: 0,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 1,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
        ]
      },
      {
        id: 7,
        body: [
          {
            id: 0,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 1,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
        ]
      },
      {
        id: 8,
        body: [
          {
            id: 0,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 1,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
          {
            id: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          },
        ]
      },
    ]
  };
  export default state;
