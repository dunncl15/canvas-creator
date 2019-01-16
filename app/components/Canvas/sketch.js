import React, { Component } from 'react';
import canvasSketch from 'canvas-sketch';
import { lerp } from 'canvas-sketch-util/math';
import random from 'canvas-sketch-util/random';
import palettes from 'nice-color-palettes';

class Canvas extends Component {
  constructor() {
    super();
    this.state = {};
    this.sketch = this.sketch.bind(this);
  }

  componentDidMount() {
    canvasSketch(this.sketch, this.props.settings);
  }

  createGrid() {
    const palette = random.shuffle(random.pick(palettes));
    console.log(palette);
    const points = [];
    const count = 98;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        const radius = Math.abs(random.noise2D(u, v)) * 0.075;
        points.push({
          color: random.pick(palette),
          position: [u, v],
          radius,
          rotation: random.noise2D(u, v),
        });
      }
    }
    return points;
  }

  sketch() {
    // random.setSeed(512)
    const points = this.createGrid().filter(() => random.value() > 0.5);
    const margin = 200;

    return ({ context, width, height }) => {
      context.fillStyle = '#fafafa';
      context.fillRect(0, 0, width, height);

      points.forEach(({ position, radius, color, rotation }) => {
        const [u, v] = position;
        const x = lerp(margin, width - margin, u);
        const y = lerp(margin, height - margin, v);

        context.save();
        context.fillStyle = color;
        context.font = `${radius * width}px Open Sans`;
        context.translate(x, y);
        context.rotate(rotation);
        context.fillText('=', 0, 0);

        context.restore();
      });
    };
  }

  render() {
    return null;
  }
}

export default Canvas;
