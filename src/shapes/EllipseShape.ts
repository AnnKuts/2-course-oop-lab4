import { Shape } from './Shape.ts';
import type { Ellipse } from '../interfaces/Ellipse.ts';

export class EllipseShape extends Shape implements Ellipse {
  drawEllipse(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void {
    ctx.beginPath();
    ctx.ellipse(x, y, width / 2, height / 2, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  show(ctx: CanvasRenderingContext2D): void {
    const centerX = this.xs1;
    const centerY = this.ys1;
    const cornerX = this.xs2;
    const cornerY = this.ys2;

    const width = Math.abs(cornerX - centerX) * 2;
    const height = Math.abs(cornerY - centerY) * 2;
    const x = centerX - width / 2;
    const y = centerY - height / 2;

    ctx.strokeStyle = this.strokeColor || 'black';
    ctx.lineWidth = 1.5;
    this.drawEllipse(ctx, x + width / 2, y + height / 2, width, height);
  }

  getName(): string {
    return 'Ellipse';
  }
}