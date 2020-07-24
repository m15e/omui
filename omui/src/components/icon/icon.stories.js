import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { FaBeer } from 'react-icons/fa';

import { Icon } from './';

import { themeAllPossibleColors } from '../../helpers/get-theme';

export default { title: 'Components/Icon', decorators: [withKnobs] };

export const Default = () => (
  <Icon
    as={FaBeer}
    color={select('Color', themeAllPossibleColors, 'red.500')}
  />
);
