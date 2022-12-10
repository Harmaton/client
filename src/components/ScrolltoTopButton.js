import React, { useState, useRef, useEffect } from 'react';
import { Button, SplitButton, ToggleButton } from 'react-bootstrap';
import { ChevronBarUp } from 'react-bootstrap-icons';

const ScrolltoTopButton = () => {
  // Use the useState hook to track the button visibility
  const [visible, setVisible] = useState(false);

  // Use the useRef hook to create a reference to the button element
  const buttonRef = useRef();

  // Use the useEffect hook to handle window scroll events
  useEffect(() => {
    // Define a function that checks if the button should be visible
    const checkVisibility = () => {
      // If the user has scrolled down more than the button's height,
      // show the button
      if (window.pageYOffset > buttonRef.current.offsetHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Add a scroll event listener to the window
    window.addEventListener('scroll', checkVisibility);

    // Return a cleanup function that removes the event listener
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  // Define a function that scrolls the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Return the scroll to top button
  return (
    <Button 
      ref={buttonRef}
      className= 'btn-scroll'
      onClick={scrollToTop}
    >
      <ChevronBarUp color='red' />

    </Button>
  );
};

export default ScrolltoTopButton;
