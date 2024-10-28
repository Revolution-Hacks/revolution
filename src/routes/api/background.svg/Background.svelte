<svelte:options namespace="svg" />

<script lang="ts">
  export let width: number;
  export let height: number;
  export let seed: number;

  let boxWidth = Math.ceil(width / 32);
  let boxHeight = Math.ceil(height / 32) / 2;
  let svgWidth = boxWidth * 32;
  let svgHeight = boxHeight * 16;

  // Perlin code derived from https://github.com/joeiddon/perlin/blob/master/perlin.js

  // Generate a somewhat random vector with the SplitMix32 algorithm
  function random() {
    seed |= 0;
    seed = (seed + 0x9e3779b9) | 0;
    let t = seed ^ (seed >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15);
    t = Math.imul(t, 0x735a2d97);
    let value = (((t = t ^ (t >>> 15)) >>> 0) / 4294967296) * 2 * Math.PI;
    return { x: Math.cos(value), y: Math.sin(value) };
  }

  function dotProductGrid(x: number, y: number, vx: number, vy: number) {
    let gVector = random();
    let dVector = { x: x - vx, y: y - vy };
    return dVector.x * gVector.x + dVector.y * gVector.y;
  }

  function interpolate(x: number, a: number, b: number) {
    return a + (6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3) * (b - a);
  }

  // This function assumes it will be called once per pair.
  // As such, it does no memoization at all.
  function evaluateAt(x: number, y: number) {
    let xf = Math.floor(x);
    let yf = Math.floor(y);
    let tl = dotProductGrid(x, y, xf, yf);
    let tr = dotProductGrid(x, y, xf + 1, yf);
    let bl = dotProductGrid(x, y, xf, yf + 1);
    let br = dotProductGrid(x, y, xf + 1, yf + 1);
    let xt = interpolate(x - xf, tl, tr);
    let xb = interpolate(x - xf, bl, br);
    let v = interpolate(y - yf, xt, xb);

    return v;
  }
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox="0 0 {svgWidth} {svgHeight}">
  <metadata>
    <seed>{seed}</seed>
    <width>{width}</width>
    <height>{height}</height>
  </metadata>
  <defs>
    <rect id="r" fill="black" width="31" height="15" />
  </defs>
  {#each Array(boxHeight) as _, y}
    {#each Array(boxWidth) as _, x}
      {@const opacity = evaluateAt(x / 64, y / 32) / 4 - 0.01}
      {#if opacity > 0}
        <use href="#r" y={y * 16} x={x * 32 - (y % 2) * 16} fill-opacity={opacity} />
      {/if}
    {/each}
  {/each}
</svg>
