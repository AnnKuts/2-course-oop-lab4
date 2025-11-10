export interface Point {
  drawPoint(ctx: CanvasRenderingContext2D, x: number, y: number): void;
}

export const PointImpl: Point = {
  drawPoint(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.fillStyle = ctx.strokeStyle;
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
};
