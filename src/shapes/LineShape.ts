import { Shape } from './Shape.ts';
import type { Line } from '../interfaces/Line.ts';

export class LineShape extends Shape implements Line {
  drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number): void {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  show(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = this.strokeColor || 'black';
    ctx.lineWidth = 1;
    this.drawLine(ctx, this.xs1, this.ys1, this.xs2, this.ys2);
  }

  getName(): string {
    return 'Line';
  }
}
