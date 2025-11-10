import { Shape } from './Shape.ts';
import type { Point } from '../interfaces/Point.ts';
import { PointImpl } from '../interfaces/Point.ts';

export class PointShape extends Shape implements Point {
  drawPoint = PointImpl.drawPoint;

  constructor(xs1: number, ys1: number) {
    super();
    this.set(xs1, ys1, xs1, ys1);
  }

  show(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.fillColor || '#000000';
    ctx.strokeStyle = this.strokeColor || '#000000';
    this.drawPoint(ctx, this.xs1, this.ys1);
  }

  getName(): string {
    return 'Point';
  }
}