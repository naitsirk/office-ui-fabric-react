import * as React from 'react';
import { OverflowSet } from './OverflowSet';
import { IRenderFunction } from '../../Utilities';
import { IFocusZoneProps } from '../../FocusZone';

export interface IOverflowSet {
  /**
 * Sets focus to the button.
 */
  focus: () => void;
}

export interface IOverflowSetProps extends React.Props<OverflowSet> {
  /**
   * Gets the component ref.
   */
  componentRef?: (ref?: IOverflowSet | null) => void;

  /**
   * Class name
   */
  className?: string;

  /**
   * An array of items to be rendered by your onRenderItem function in the primary content area
  */
  items?: IOverflowSetItemProps[];

  /**
   * Change item layout direction to vertical/stacked
   * @default false
  */
  vertical?: boolean;

  /**
   * An array of items to be passed to overflow contextual menu
  */
  overflowItems?: IOverflowSetItemProps[];

  /**
   * Method to call when trying to render an item.
  */
  onRenderItem: (item: IOverflowSetItemProps) => any;

  /**
   * Rendering method for overflow button and contextual menu. The argument to the function is
   * the overflowItems passed in as props to this function.
  */
  onRenderOverflowButton: IRenderFunction<any[]>;

  /**
   * Custom properties for OverflowSet's FocusZone.
   */
  focusZoneProps?: IFocusZoneProps;

  /**
   * The role for the OverflowSet.
   * @default 'menubar'
   */
  role?: string;
}

export interface IOverflowSetItemProps {
  /**
   * Unique id to identify the item
   */
  key: string;

  /**
   * Any additional properties to use when custom rendering menu items.
   */
  [propertyName: string]: any;
}