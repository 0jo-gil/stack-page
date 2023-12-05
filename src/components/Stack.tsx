import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface PageStackProps {
  swipable?: boolean;
  appRoute: React.ElementType;
}

const PageStack = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const [historyStack, setHistoryStack] = useState([location]);

  useEffect(() => {
    setHistoryStack(prevStack => [...prevStack, location]);
  }, [location]);

  return (
    <TransitionGroup>
      {historyStack.map((location, i) => (
        <CSSTransition key={location.key} classNames="slide" timeout={500}>
          <div style={{ zIndex: i }}>
            {/* <AppRoute location={location} /> */}
            {children}
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default PageStack;