import { useEffect, useRef, useState } from "react";
import { isEqual } from "lodash";
import usePrevious from "./usePrevious";

const App = () => {
  const [currentState, setCurrentState] = useState({ name: "Alice" });
  // const previousStateRef = useRef();

  // useEffect(() => {
  //   previousStateRef.current = currentState;
  // }, [currentState]);

  // const previousState = previousStateRef.current;

  const previousState = usePrevious(currentState);

  useEffect(() => {
    if (!isEqual(currentState, previousState)) {
      setCurrentState({ name: "Bob" });
    }
  }, [currentState, previousState]);

  return (
    <div>
      <h1>Current State: {JSON.stringify(currentState)}</h1>
      <h2>Previous State: {JSON.stringify(previousState)}</h2>
    </div>
  );
};

export default App;
