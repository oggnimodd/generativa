import React, { useEffect } from 'react';

const useOnClickOutside = (ref, handler, open, touchEvent = true) => {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };

      if(open) {
        document.addEventListener('mousedown', listener);
        touchEvent && document.addEventListener('touchstart', listener);
      }else{
        document.removeEventListener('mousedown', listener);
        touchEvent && document.removeEventListener('touchstart', listener);
      }

      return () => {
        document.removeEventListener('mousedown', listener);
        touchEvent && document.removeEventListener('touchstart', listener);
      };
    },

    [ref, handler, open],
  );
};

export default useOnClickOutside;
