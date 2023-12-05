import React from 'react';
import Page, { PageProps } from './Page';

function withStack<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & PageProps> {
  return ({ onEntered, onExited, ...props }) => (
    <Page onEntered={onEntered} onExited={onExited}>
        <Component {...(props as P)} />
      {/* <Component {...(props as P)} /> */}
    </Page>
  );
}

export default withStack;