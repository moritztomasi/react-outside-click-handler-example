import React, { useEffect, useRef } from "react";

function OutsideAlerter({ children, onClickOutside }) {
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, onClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
}

function useOutsideAlerter(ref, onClickOutside) {
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

export default OutsideAlerter;
