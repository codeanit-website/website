import { Link } from 'gatsby';
import React from 'react';
import { HeaderContext } from './Context';

export interface HeaderLogoProps {
  ['aria-label']: string;
  alt: string;
  style?: Record<string, string>;
}

export const Logo: React.FC<HeaderLogoProps> = (props) => {
  const { collapsed, sticky } = React.useContext(HeaderContext);

  const child = props.children
    ? React.cloneElement(props.children as React.ReactElement<any>, {
        ...props,
        ['data-testid']: 'header-logo',
        ['aria-label']: props['aria-label'],
        alt: props.alt,
        size: sticky && collapsed ? 30 : 45,
      })
    : null;

  return (
    <Link
      to="/"
      aria-label="Go back to homepage"
      title="Go back to homepage"
    >
      {child}
    </Link>
  );
};
