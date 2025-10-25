import { useRef, useState, useCallback } from 'react';
import { Shape } from '../shapes/Shape.ts';
import { ShapeEditor } from '../editors/ShapeEditor.ts';
import { PointEditor } from '../editors/PointEditor.ts';
import { LineEditor } from '../editors/LineEditor.ts';
import { RectEditor } from '../editors/RectEditor.ts';
import { EllipseEditor } from '../editors/EllipseEditor.ts';
import Toolbar from './ToolBar.tsx';
import MenuBar from './MenuBar.tsx';
import Canvas from './Canvas.tsx';
import ModalWindow from './ModalWindow.tsx';

const GraphicEditor: React.FC = () => {
  const N = 111;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shapesRef = useRef<Shape[]>([]);
  const [currentEditor, setCurrentEditor] = useState<ShapeEditor | null>(null);
  const [currentTool, setCurrentTool] = useState<string>('Point');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const updateTitle = (shapeName: string) => {
    document.title = shapeName ? `${shapeName}` : 'GraphicEditor';
    setCurrentTool(shapeName || 'GraphicEditor');
  };

  const getMouseCoordinates = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const redraw = useCallback(() => {
    if (!canvasRef.current || !currentEditor) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    currentEditor.onPaint(ctx);
    currentEditor.drawRubberBand(ctx);
  }, [currentEditor]);

  const handleClear = () => {
    shapesRef.current = [];
    setCurrentEditor(null);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  };

  const addShape = useCallback(
    (shape: Shape) => {
      if (shapesRef.current.length < N) {
        shapesRef.current.push(shape);
      }
    },
    [N]
  );

  const handleMouseEvent = (
    e: React.MouseEvent<HTMLCanvasElement>,
    action: (editor: ShapeEditor, x: number, y: number) => void
  ) => {
    if (!currentEditor || !canvasRef.current) return;
    const { x, y } = getMouseCoordinates(e);
    action(currentEditor, x, y);
    redraw();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) =>
    handleMouseEvent(e, (editor, x, y) => editor.onLBDown(x, y));

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) =>
    handleMouseEvent(e, (editor, x, y) => editor.onLBUp(x, y));

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) =>
    handleMouseEvent(e, (editor, x, y) => editor.onMouseMove(x, y));

  const handleToolSelect = useCallback(
    (
      EditorClass: new (
        shapes: Shape[],
        addShape: (shape: Shape) => void
      ) => ShapeEditor,
      name: string
    ) => {
      const newEditor = new EditorClass(shapesRef.current, addShape);
      setCurrentEditor(newEditor);
      updateTitle(name);
    },
    [addShape]
  );

  const handlePointSelect = () => handleToolSelect(PointEditor, 'Point');
  const handleLineSelect = () => handleToolSelect(LineEditor, 'Line');
  const handleRectSelect = () => handleToolSelect(RectEditor, 'Rectangle');
  const handleEllipseSelect = () => handleToolSelect(EllipseEditor, 'Ellipse');

  const handleAbout = () => {
    const aboutContent = (
      <>
        <h4>Масив</h4>
        <p>динамічний з обмеженням кількості елементів N = {N}</p>
        <h4>Гумовий слід</h4>
        <p>суцільна лінія чорного кольору</p>
        <h4>Прямокутник</h4>
        <p>
          Увід: по двом протилежним кутам<br />
          Відображення: чорний контур з кольоровим заповненням<br />
          Кольори заповнення: жовтий<br />
        </p>
        <h4>Еліпс</h4>
        <p>
          Увід: від центру до одного з кутів охоплюючого прямокутника<br />
          Відображення: чорний контур еліпсу без заповнення<br />
        </p>
        <h4>Позначка поточного типу об'єкту</h4>
        <p>в меню</p>
      </>
    );
    setModalContent(aboutContent);
    setIsModalOpen(true);
  };

  return (
    <div className="editor-container">
      <div className="top-bar">
        <MenuBar
          currentTool={currentTool}
          onPointSelect={handlePointSelect}
          onLineSelect={handleLineSelect}
          onRectSelect={handleRectSelect}
          onEllipseSelect={handleEllipseSelect}
          onClear={handleClear}
          onAbout={handleAbout}
        />

        <Toolbar
          onPointSelect={handlePointSelect}
          onLineSelect={handleLineSelect}
          onRectSelect={handleRectSelect}
          onEllipseSelect={handleEllipseSelect}
          onClear={handleClear}
          onAbout={handleAbout}
        />
      </div>

      <Canvas
        width={900}
        height={700}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        canvasRef={canvasRef}
      />

      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Варіант 11"
      >
        {modalContent}
      </ModalWindow>
    </div>
  );
};

export default GraphicEditor;