import Button from './Button.tsx';
import Tooltip from './ToolTip.tsx';

interface ToolbarProps {
  onPointSelect: () => void;
  onLineSelect: () => void;
  onRectSelect: () => void;
  onEllipseSelect: () => void;
  onClear: () => void;
  onAbout: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
                                           onPointSelect,
                                           onLineSelect,
                                           onRectSelect,
                                           onEllipseSelect,
                                         }) => {
  return (
    <div className="toolbar">
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
    </div>
  );
};

export default Toolbar;