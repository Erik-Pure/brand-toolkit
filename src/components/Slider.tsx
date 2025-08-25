import ReactSlider from "react-slider";
    
interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value = 50, onChange }) => {
  return (
    <ReactSlider 
      className="customSlider"
      trackClassName="customSlider-track"
      thumbClassName="customSlider-thumb"
      value={value}
      onChange={onChange}
      min={0}
      max={100}
    />
  );
};

export default Slider;