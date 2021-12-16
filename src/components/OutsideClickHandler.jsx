import React, { useEffect, useRef } from "react";

function OutsideClickHandler({ children, onClickOutside }) {
  const wrapperRef = useRef(null);

  useOutsideClickHandler(wrapperRef, onClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
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
