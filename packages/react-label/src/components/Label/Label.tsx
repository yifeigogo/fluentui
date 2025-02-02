import * as React from 'react';
import { useLabel } from './useLabel';
import { renderLabel } from './renderLabel';
import { useLabelStyles } from './useLabelStyles';
import type { LabelProps } from './Label.types';

/**
 * A label component provides a title or name to a component.
 */
export const Label = React.forwardRef<HTMLElement, LabelProps>((props, ref) => {
  const state = useLabel(props, ref);

  useLabelStyles(state);
  return renderLabel(state);
});

Label.displayName = 'Label';
