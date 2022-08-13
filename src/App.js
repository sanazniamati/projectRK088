import { useState } from "react";
import Konva from "konva";
import { Stage, Layer, Line } from "react-konva";

export default function App() {
  const [blobs, setBlobs] = useState([5]);
  const handelCreateBlob = () => {
    setBlobs((prevBlobs) => [
      ...prevBlobs,
      {
        x: (blobs.length - 1) * 150,
        color: Konva.Util.getRandomColor(),
      },
    ]);
    console.log(blobs);
  };
  return (
    <>
      <button onClick={handelCreateBlob}> CreateBlob</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {blobs.map((blob, i) => (
            <Line
              key={i}
              x={blob.x}
              y={blob.y}
              points={[50, 50, 150, 50, 100, 150]}
              tension={0.5}
              closed
              fill={blob.color}
              draggable
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
}
