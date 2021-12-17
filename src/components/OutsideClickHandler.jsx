import React, { useEffect, useRef } from "react";

function OutsideClickHandler({ children, onClickOutside }) {
  const ref = useRef(null);

  useOutsideClickHandler(ref, onClickOutside);

  return <div ref={ref}>{children}</div>;
}

function useOutsideClickHandler(ref, onClickOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current != null && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside, ref]);
}

export default OutsideClickHandler;
