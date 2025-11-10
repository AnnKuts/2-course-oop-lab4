import { Shape } from './Shape.ts';
import type { Rectangle } from '../interfaces/Rectangle.ts';
import { RectangleImpl } from '../interfaces/Rectangle.ts';

export class RectangleShape extends Shape implements Rectangle {
  protected xs1: number;
  protected ys1: number;
  protected xs2: number;
  protected ys2: number;

  constructor(xs1: number, ys1: number, xs2: number, ys2: number) {
    super();
    this.xs1 = xs1;
    this.ys1 = ys1;
    this.xs2 = xs2;
    this.ys2 = ys2;
  }

  drawRect(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number): void {
    RectangleImpl.drawRect(ctx, x1, y1, x2, y2);
  }

  show(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = this.strokeColor || 'black';
    this.drawRect(ctx, this.xs1, this.ys1, this.xs2, this.ys2);
  }

  getName(): string {
    return 'Rectangle';
  }
}