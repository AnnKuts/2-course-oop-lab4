import { Shape } from './Shape.ts';

export class EllipseShape extends Shape {
  show(ctx: CanvasRenderingContext2D): void {
    const centerX = this.xs1;
    const centerY = this.ys1;
    const cornerX = this.xs2;
    const cornerY = this.ys2;
    
    const width = Math.abs(cornerX - centerX) * 2;
    const height = Math.abs(cornerY - centerY) * 2;
    const x = centerX - width / 2;
    const y = centerY - height / 2;

    ctx.beginPath();
    ctx.ellipse(
      x + width / 2,
      y + height / 2,
      width / 2,
      height / 2,
      0,
      0,
      Math.PI * 2
    );
    
    ctx.strokeStyle = this.strokeColor || 'black';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  getName(): string {
    return 'Ellipse';
  }
}
