import React, { useRef, useEffect } from 'react';
import { useNavigationType } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export interface PageProps {
  children?: React.ReactNode;
  timeout?: number;
  classNames?: string;
  onEntered?: () => void;
  onExited?: () => void;
}

const Page: React.FC<PageProps> = ({
  children,
  timeout = 500,
  classNames = 'slide',
  onEntered,
  onExited,
}) => {
  const nodeRef = useRef(null);
  const navigationType = useNavigationType();

  useEffect(() => {
    console.log('navigationType', navigationType)
  }, [navigationType])

  useEffect(() => {
    if (onEntered) {
      onEntered();
    }
  }, [onEntered]);

  useEffect(() => {
    if (onExited) {
      onExited();
    }
  }, [onExited]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      timeout={timeout}
      classNames={classNames}
      onEntered={onEntered}
      onExited={onExited}
    >
        {children}
      {/* <div ref={nodeRef}>{children}</div> */}
    </CSSTransition>
  );
};

export default Page;