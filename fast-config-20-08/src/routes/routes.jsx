import React from 'react';
import exit from '../assets/exit.svg';
import email from '../assets/email.svg';
import disk from '../assets/disk.svg';
import fold from '../assets/fold.svg';
import install from '../assets/install.svg';
import verify from '../assets/verify.svg';
import engine from '../assets/engine.svg';
import link from '../assets/link.svg';
import Home from '../pages/Home/index';
import CreatDirectories from '../pages/CreatDirectories/index';
import TestSoftware from '../pages/TestSoftware/testSoftware';
import SetupCheck from '../pages/SetupCheck/setupCheck';
import InstallGenerator from '../pages/InstallGenerator/installGenerator';
import ExitSoftware from '../pages/ExitSoftware/exitSoftware';
import EmailSoftware from '../pages/CompleteEmail/completedEmail';
import LinkGenerator from '../pages/LinkGenerator/linkGenerator';
import RepositionEngine from '../pages/RepositionEngine/repositionEngines';



export const routesList = [
  {
    id: 0,
    description: 'Inicio',
    path: '/',
    component: <Home /> 
  },
  {
    id: 1,
    description: 'Criação de Diretório',
    icon: fold,
    alt: 'Criação de Diretório',
    path: 'CreateDirectories',
    isMenu: true,
    component: <CreatDirectories />
  },
  {
    id: 2,
    description: 'Teste do Software',
    icon: install,
    alt: 'Teste do Software',
    path: "TesteSoftware",
    isMenu: true,
    component: <TestSoftware />
  },
  {
    id: 3,
    description: 'Verificador de Configuração',
    icon: verify,
    alt: 'Verificador de Configuração',
    path: 'SetupCheck',
    isMenu: true,
    component: <SetupCheck />
  },
  {
    id: 4,
    description: 'Gerador de Instalação',
    icon: disk,
    alt: 'Gerador de Instalação',
    path: 'InstallGenerator',
    isMenu: true,
    component: <InstallGenerator />
  },
  {
    id: 5,
    description: 'Reposicionador de Motores',
    icon: engine,
    alt: 'Reposicionador de Motores',
    path: 'RepositionEngine',
    isMenu: true,
    component: <RepositionEngine />
  },
  {
    id: 6,
    description: 'Gerador de Link',
    icon: link,
    alt: 'Gerador de Link',
    path: 'LinkGenerator',
    isMenu: true,
    component: <LinkGenerator />
  },
  {
    id: 7,
    description: 'Envio de e-mail de Software',
    icon: email,
    alt: 'Envio de e-mail de Software',
    path: 'EmailSoftware',
    isMenu: true,
    component: <EmailSoftware />
  },
  {  
    id: 8,
    description: 'Sair',
    icon: exit,
    alt: 'Sair',
    path: 'Exit',
    isMenu: true,
    component: <ExitSoftware />
  },  
];
