let Module = {};

Module.array = [];

Module.chart = function (canvas, data, width, height, color) {

   if (typeof canvas == "string") canvas = document.getElementById(canvas);

   let context = canvas.getContext("2d");
   canvas.width = width;
   canvas.height = height;

   let max = Number.NEGATIVE_INFINITY;
   for (let i = 0; i < data.length; i++) {
      if (max < data[i]) max = data[i];
   }

   let scale = height / max;
   let barWidth = Math.floor(width / data.length);

   for (let i = 0; i < data.length; i++) {

      let barHeight = data[i] * scale,
         x = barWidth * i,
         y = height - barHeight;

      context.fillStyle = color;
      context.fillRect(x, y, barWidth - 2, barHeight);
   }
}

window.addEventListener("load", function () {
   Module.chart("chart",
      [4, 65, 23, 7, 12, 32, 58, 16],
      500,
      300,
      "lightgreen");
})