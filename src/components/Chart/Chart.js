import React from "react";

function Chart({ canvasRef, width, height }) {
  return (
    <canvas
      ref={canvasRef}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}

export default Chart;
