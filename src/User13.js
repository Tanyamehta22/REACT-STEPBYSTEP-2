import React, { useEffect, useRef } from "react";
function User(props) {
  const lastVal = useRef();
  useEffect(() => {
    lastVal.current = props.count;
  });
  const previousProps = lastVal.current;
  return (
    <div>
      {/* <h1>CURRENT VAL{props.count}</h1>
            <h1>PREVIOUS VAL{previousProps}</h1> */}

      {/* FINDING DIFFERENCE OF CURRENT VALUE AND PREVIOUS VALUE- */}
      <h1>Diff {props.count - previousProps}</h1>
    </div>
  );
}

export default User;
