import * as React from 'react';
import { DocumentCard } from './DocumentCard';
import { DocumentCardTitle } from './DocumentCardTitle';
import { DocumentCardPreview } from './DocumentCardPreview';
import { DocumentCardLocation } from './DocumentCardLocation';
import { DocumentCardActivity } from './DocumentCardActivity';
import { DocumentCardActions } from './DocumentCardActions';
import { DocumentCardLogo } from './DocumentCardLogo';
import { DocumentCardStatus } from './DocumentCardStatus';
import { PersonaInitialsColor } from '../../Persona';
import { ImageFit } from '../../Image';
import { IButtonProps } from '../../Button';
import { IIconProps } from '../../Icon';

export interface IDocumentCard {

}

export interface IDocumentCardProps extends React.Props<DocumentCard> {
  /**
   * Optional callback to access the IDocumentCard interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: IDocumentCard | null) => void;

  /**
  * The type of DocumentCard to display.
  * @default DocumentCardType.normal
  */
  type?: DocumentCardType;

  /**
   * Function to call when the card is clicked or keyboard Enter/Space is pushed.
   */
  onClick?: (ev?: React.SyntheticEvent<HTMLElement>) => void;

  /**
   * A URL to navigate to when the card is clicked. If a function has also been provided,
   * it will be used instead of the URL.
   */
  onClickHref?: string;

  /**
   * Optional class for document card.
   */
  className?: string;

  /**
   * Hex color value of the line below the card, which should correspond to the document type.
   * This should only be supplied when using the 'compact' card layout.
   *
   * Deprecated at v4.17.1, to be removed at >= v5.0.0.
   * @deprecated
   */
  accentColor?: string;
}

export enum DocumentCardType {
  /**
   * Standard DocumentCard.
   */
  normal = 0,
  /**
   * Compact layout. Displays the preview beside the details, rather than above.
   */
  compact = 1
}

export interface IDocumentCardPreviewProps extends React.Props<DocumentCardPreview> {
  /**
   * Gets the component ref.
   */
  componentRef?: () => void;

  /**
   * One or more preview images to display.
   */
  previewImages: IDocumentCardPreviewImage[];

  /**
   * The function return string that will describe the number of overflow documents.
   * such as  (overflowCount: number) => `+${ overflowCount } more`,
   */
  getOverflowDocumentCountText?: (overflowCount: number) => string;
}

export interface IDocumentCardPreviewImage {
  /**
   * Gets the component ref.
   */
  componentRef?: () => void;

  /**
   * File name for the document this preview represents.
   */
  name?: string;

  /**
   * URL to view the file.
   */
  url?: string;

  /**
   * Path to the preview image.
   */
  previewImageSrc?: string;

  /**
   * Deprecated at v1.3.6, to be removed at >= v2.0.0.
   * @deprecated
   */
  errorImageSrc?: string;

  /**
   * Path to the icon associated with this document type.
   *
   */
  iconSrc?: string;

  /**
   * If provided, forces the preview image to be this width.
   */
  width?: number;

  /**
   * If provided, forces the preview image to be this height.
   */
  height?: number;

  /**
   * Used to determine how to size the image to fit the dimensions of the component.
   * If both dimensions are provided, then the image is fit using ImageFit.scale, otherwise ImageFit.none is used.
   */
  imageFit?: ImageFit;

  /**
   * Hex color value of the line below the preview, which should correspond to the document type.
   *
   * Deprecated at v4.17.1, to be removed at >= v5.0.0.
   * @deprecated
   */
  accentColor?: string;

  /**
   * The props for the preview icon.
   * If provided, icon will be rendered instead of image.
   */
  previewIconProps?: IIconProps;

  /**
   * The props for the preview icon container classname.
   * If provided, icon container classname will be used..
   */
  previewIconContainerClass?: string;
}

export interface IDocumentCardTitleProps extends React.Props<DocumentCardTitle> {
  /**
   * Gets the component ref.
   */
  componentRef?: () => void;

  /**
   * Title text. If the card represents more than one document, this should be the title of one document and a "+X" string. For example, a collection of four documents would have a string of "Document.docx +3".
   */
  title: string;

  /**
   * Whether we truncate the title to fit within the box. May have a performance impact.
   * @defaultvalue true
   */
  shouldTruncate?: boolean;

  /**
   * Whether show as title as secondary title style such as smaller font and lighter color.
   * @defaultvalue false
   */
  showAsSecondaryTitle?: boolean;
}

export interface IDocumentCardLocationProps extends React.Props<DocumentCardLocation> {
  /**
   * Gets the component ref.
   */
  componentRef?: () => void;

  /**
   * Text for the location of the document.
   */
  location: string;

  /**
   * URL to navigate to for this location.
   */
  locationHref?: string;

  /**
   * Function to call when the location is clicked.
   */
  onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;

  /**
   * Aria label for the link to the document location.
   */
  ariaLabel?: string;
}

export interface IDocumentCardActivityProps extends React.Props<DocumentCardActivity> {
  /**
   * Gets the component ref.
   */
  componentRef?: () => void;

  /**
   * Describes the activity that has taken place, such as "Created Feb 23, 2016".
   */
  activity: string;

  /**
   * One or more people who are involved in this activity.
   */
  people: IDocumentCardActivityPerson[];
}

export interface IDocumentCardActivityPerson {
  /**
   * The name of the person.
   */
  name: string;

  /**
   * Path to the profile photo of the person.
   */
  profileImageSrc: string;

  /**
   * The user's initials to display in the profile photo area when there is no image.
   */
  initials?: string;

  /**
   * Whether initials are calculated for phone numbers.
   * @defaultvalue false
   */
  calculateInitialsForPhoneNumber?: boolean;

  /**
   * The background color when the user's initials are displayed.
   * @defaultvalue PersonaInitialsColor.blue
   */
  initialsColor?: PersonaInitialsColor;
}

export interface IDocumentCardActionsProps extends React.Props<DocumentCardActions> {
  /**
   * Gets the component ref.
   */
  componentRef?: () => void;

  /**
   * The actions available for this document.
   */
  actions: IButtonProps[];

  /**
   * The number of views this document has received.
   */
  views?: Number;
}

export interface IDocumentCardLogoProps extends React.Props<DocumentCardLogo> {
  /**
   * Gets the component ref.
   */
  componentRef?: () => void;
  /**
   * Describes DocumentCard Logo badge.
   */
  logoIcon: string;

  /**
   * Describe Logo name, optional.
   */
  logoName?: string;
}

export interface IDocumentCardStatusProps extends React.Props<DocumentCardStatus> {
  /**
   * Gets the component ref.
   */
  componentRef?: () => void;
  /**
   * Describes DocumentCard status icon.
   */
  statusIcon?: string;

  /**
   * Describe status information. Required field.
   */
  status: string;
}
