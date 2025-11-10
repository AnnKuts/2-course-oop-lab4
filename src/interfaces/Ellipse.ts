export interface Ellipse {
  drawEllipse(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number): void;
}

export const EllipseImpl: Ellipse = {
  drawEllipse(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number): void {
    const radiusX = Math.abs(x2 - x1);
    const radiusY = Math.abs(y2 - y1);
    const cx = x1;
    const cy = y1;

    ctx.beginPath();
    ctx.ellipse(cx, cy, radiusX, radiusY, 0, 0, 2 * Math.PI);
    ctx.stroke();
  }
};
