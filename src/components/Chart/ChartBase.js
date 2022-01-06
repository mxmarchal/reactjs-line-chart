import React, { useRef, useEffect } from "react";
import Chart from "./Chart";

function ChartBase({
  data,
  strokeWidth,
  strokeColor,
  showDots,
  width,
  height,
}) {
  const canvasRef = useRef(null);

  console.log(data);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const dpi = window.devicePixelRatio;

    canvas.width = width * dpi;
    canvas.height = height * dpi;

    const coorXIncremental = canvas.width / data.length;

    const maxValue = Math.max(...data);

    data.forEach((value, index) => {
      if (index - 1 === data.length) {
        return;
      }
      const coorX = index * coorXIncremental;
      const coorY = canvas.height - (value / maxValue) * canvas.height;
      const nextCoorX = (index + 1) * coorXIncremental;
      const nextCoorY =
        canvas.height - (data[index + 1] / maxValue) * canvas.height;

      context.beginPath();
      context.moveTo(coorX, coorY);
      context.lineTo(nextCoorX, nextCoorY);
      context.strokeStyle = strokeColor;
      context.lineWidth = strokeWidth * dpi;
      context.stroke();
      if (showDots) {
        context.fillStyle = "#000";
        context.fillRect(coorX - 5, coorY - 5, 1, 1);
      }
      context.fill();
    });
  }, [data, showDots, strokeColor, strokeWidth, width, height]);

  return <Chart canvasRef={canvasRef} width={width} height={height} />;
}

export default ChartBase;
