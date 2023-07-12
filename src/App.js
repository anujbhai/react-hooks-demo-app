import {useRef} from 'react';

import "./styles.css";

export default function App() {
  const count = useRef(0);

  return (
    <button onClick={() => {
      count.current++;
      console.log(count.current)
    }}>
      {count.current}
    </button>
  );
}
