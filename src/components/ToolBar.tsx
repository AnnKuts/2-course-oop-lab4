import Button from './Button.tsx';
import Tooltip from './ToolTip.tsx';

interface ToolbarProps {
  onPointSelect: () => void;
  onLineSelect: () => void;
  onRectSelect: () => void;
  onEllipseSelect: () => void;
  onClear: () => void;
  onAbout: () => void;
  onCubeSelect: () => void;
  onLineOOSelect: () => void;
  color?: string;
  onColorChange?: (color: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
                                           onPointSelect,
                                           onLineSelect,
                                           onRectSelect,
                                           onEllipseSelect, onCubeSelect, onLineOOSelect, color, onColorChange
                                         }) => {
  return (
    <div className="toolbar">
      {onColorChange && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingRight: 8 }}>
          <input
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            aria-label="Color picker"
          />
        </div>
      )}
      <Tooltip text="Point">
        <Button onClick={onPointSelect}>
          <img src="/point.png" alt="Point" />
        </Button>
      </Tooltip>
      <Tooltip text="Line">
        <Button onClick={onLineSelect}>
          <img src="/line.png" alt="Line" />
        </Button>
      </Tooltip>
      <Tooltip text="Rectangle">
        <Button onClick={onRectSelect}>
          <img src="/rect.png" alt="Rectangle" />
        </Button>
      </Tooltip>
      <Tooltip text="Ellipse">
        <Button onClick={onEllipseSelect}>
          <img src="/ellipse.png" alt="Ellipse" />
        </Button>
      </Tooltip>
      <Tooltip text="Cube">
        <Button onClick={onCubeSelect}>
          <img src="/cube.png" alt="Cube" />
        </Button>
      </Tooltip>
      <Tooltip text="LineOO">
        <Button onClick={onLineOOSelect}>
          <img src="/lineOO.png" alt="LineOO" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default Toolbar;