import { Shape } from '../shapes/Shape.ts';
import { Editor } from './Editor.ts';

export abstract class ShapeEditor extends Editor {
  protected shapes: Shape[];
  protected addShape: (shape: Shape) => void;
  protected startX: number = 0;
  protected startY: number = 0;
  protected currentX: number = 0;
  protected currentY: number = 0;
  protected isDrawing: boolean = false;

    constructor(shapes: Shape[], addShape: (shape: Shape) => void) {
    super();
    this.shapes = shapes;
    this.addShape = addShape;
  }

  // updateShapes(shapes: Shape[]): void {
  //   this.shapes = shapes;
  // }

  onLBDown(x: number, y: number): void {
    this.startX = x;
    this.startY = y;
    this.currentX = x;
    this.currentY = y;
    this.isDrawing = true;
  }

  onLBUp(x: number, y: number): void {
    this.isDrawing = false;
  }

  onMouseMove(x: number, y: number): void {
    if (this.isDrawing) {
      this.currentX = x;
      this.currentY = y;
    }
  }

  onPaint(ctx: CanvasRenderingContext2D): void {
    for (const shape of this.shapes) {
      shape.show(ctx);
    }
  }


  drawRubberBand(ctx: CanvasRenderingContext2D): void {
    if (!this.isDrawing) return;
    
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
  }
}
