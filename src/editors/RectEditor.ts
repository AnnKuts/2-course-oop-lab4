import { ShapeEditor } from './ShapeEditor.ts';
import { RectShape } from '../shapes/RectShape.ts';

export class RectEditor extends ShapeEditor {
  onLBUp(x: number, y: number): void {
    super.onLBUp(x, y);
    const rect = new RectShape();
    rect.set(this.startX, this.startY, x, y);
    this.addShape(rect);
  }

  drawRubberBand(ctx: CanvasRenderingContext2D): void {
    if (!this.isDrawing) return;
    
    super.drawRubberBand(ctx);
    
    const x = Math.min(this.startX, this.currentX);
    const y = Math.min(this.startY, this.currentY);
    const width = Math.abs(this.currentX - this.startX);
    const height = Math.abs(this.currentY - this.startY);
    
    ctx.strokeRect(x, y, width, height);
    ctx.setLineDash([]);
  }
}
