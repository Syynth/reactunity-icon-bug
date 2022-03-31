import { Renderer } from '@reactunity/renderer';
import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);
  return <scroll>
    <icon onPointerClick={() => setCount(count + 1)}>house</icon>
  </scroll>;
}

Renderer.render(<App />);
