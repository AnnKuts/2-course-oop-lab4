import { ShapeEditor } from './ShapeEditor.ts';
import { LineShape } from '../shapes/LineShape.ts';

export class LineEditor extends ShapeEditor {
  onLBUp(x: number, y: number): void {
    super.onLBUp(x, y);
    const line = new LineShape();
    line.set(this.startX, this.startY, x, y);
    this.addShape(line);
  }

  drawRubberBand(ctx: CanvasRenderingContext2D): void {
    if (!this.isDrawing) return;
    
    super.drawRubberBand(ctx);
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.currentX, this.currentY);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}
