import { ShapeEditor } from './ShapeEditor.ts';
import { PointShape } from '../shapes/PointShape.ts';

export class PointEditor extends ShapeEditor {
  onLBDown(x: number, y: number): void {
    const point = new PointShape();
    point.set(x, y, x, y);
    this.addShape(point);
  }

  onLBUp(x: number, y: number): void {}
  onMouseMove(x: number, y: number): void {}
  drawRubberBand(ctx: CanvasRenderingContext2D): void {}
}
