import React, {useState} from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import CenterView from '../CenterView';
import { DropdownDateAndHour } from '../';

export default {
  title: 'DropdownDateAndHour',
  component: DropdownDateAndHour,
  decorators: [withKnobs],
};
export const dropdownDateAndHour = () => {
  const [fields, setFields] = useState({dateFrom: '', timeFrom: '', dateTo: '', timeTo: ''});

  return(
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <DropdownDateAndHour
      dateFrom={fields.dateFrom}
      timeFrom={fields.timeFrom}
      dateTo={fields.dateTo}
      timeTo={fields.timeTo}
      onChange={(e, from) => {setFields({...fields, [from]: e.target.value})}}
      >
    </DropdownDateAndHour>
  </CenterView>
)};
