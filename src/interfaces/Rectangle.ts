export interface Rectangle {
  drawRect(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number): void;
}

export const RectangleImpl: Rectangle = {
  drawRect(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number): void {
    const x = Math.min(x1, x2);
    const y = Math.min(y1, y2);
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);
    ctx.strokeRect(x, y, width, height);
  }
};
