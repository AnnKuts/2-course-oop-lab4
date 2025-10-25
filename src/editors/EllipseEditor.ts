import { ShapeEditor } from './ShapeEditor.ts';
import { EllipseShape } from '../shapes/EllipseShape.ts';

export class EllipseEditor extends ShapeEditor {
  onLBUp(x: number, y: number): void {
    super.onLBUp(x, y);
    const ellipse = new EllipseShape();
    ellipse.set(this.startX, this.startY, x, y);
    this.addShape(ellipse);
  }

  drawRubberBand(ctx: CanvasRenderingContext2D): void {
    if (!this.isDrawing) return;
    
    super.drawRubberBand(ctx);
    
    const centerX = this.startX;
    const centerY = this.startY;
    const cornerX = this.currentX;
    const cornerY = this.currentY;
    
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
    ctx.stroke();
    ctx.setLineDash([]);
  }
}
