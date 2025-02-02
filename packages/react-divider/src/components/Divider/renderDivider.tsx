import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { DividerSlots, DividerState } from './Divider.types';
import { dividerShorthandProps } from './useDivider';

/**
 * Function that renders the final JSX of the component
 */
export const renderDivider = (state: DividerState) => {
  const { slots, slotProps } = getSlots<DividerSlots>(state, dividerShorthandProps);
  return (
    <slots.root {...slotProps.root}>
      {slotProps.root.children !== undefined && (
        <slots.wrapper {...slotProps.wrapper}>{slotProps.root.children}</slots.wrapper>
      )}
    </slots.root>
  );
};
