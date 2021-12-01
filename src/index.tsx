import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PxpUiApp, configurePxpClient, Pxp, initI18n } from '@pxp-ui/core';
import LoadingScreen from '@pxp-ui/components/LoadingScreen';
import './index.scss';

import configFile from './config';
import { pages } from './modules';

const config: any = configFile;
Pxp.setConfig(config);
const i18n = initI18n(config);
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    hasRendered = true;
    ReactDOM.render(
      <PxpUiApp pages={pages} i18n={i18n} />,
      document.getElementById('root'),
    );
  }
};

// Example static menu, delete menu when used pxp-nd menu
// Check https://fonts.google.com/icons for more icons
const menu: any = [
  {
    icon: 'account_circle',
    text: 'dropDown',
    type: 'leaf',
    children: [],
    component: 'APP_MAIN',
  },
  {
    icon: 'add_shopping_cart',
    text: 'Car',
    type: 'leaf',
    children: [],
    component: 'APP_DEMO',
  },
  {
    icon: 'FormatAlignLeft',
    text: 'form',
    type: 'leaf',
    children: [],
    component: 'APP_FORM',
  },

  {
    icon: 'add_shopping_cart',
    text: 'Form',
    type: 'leaf',
    children: [],
    component: 'APP_CUSTOMER',
  },
  {
    icon: 'IconPxp',
    text: 'Table',
    type: 'leaf',
    children: [],
    component: 'APP_TABLE',
  },
];

ReactDOM.render(<LoadingScreen />, document.getElementById('root'));
// Example static menu, delete params menu when used pxp-nd menu
configurePxpClient(Pxp, renderApp, menu);
