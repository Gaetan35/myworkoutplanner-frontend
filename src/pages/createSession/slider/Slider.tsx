import { useIntl } from "react-intl";
import styles from "./Slider.module.scss";

const FILLED_COLOR = "#00185b";
const EMPTY_COLOR = "#e3e3e3";

const getSliderTrackStyle = (min: number, max: number, value: number) => {
  const proportionFilled = ((value - min) / (max - min)) * 100;

  return {
    background: `linear-gradient(to right, ${FILLED_COLOR} 0%, ${FILLED_COLOR} ${proportionFilled}%, ${EMPTY_COLOR} ${proportionFilled}%, ${EMPTY_COLOR} 100%)`,
  };
};

const getSliderValueDescriptionPos = (
  min: number,
  max: number,
  value: number
) => ({ left: `${((value - min) / (max - min)) * 100}%` });

type SliderProps = {
  value: number;
  setValue: (newValue: number) => void;
  valueLabels: string[];
  disabled?: boolean;
};

export const Slider = ({
  value,
  setValue,
  valueLabels,
  disabled = false,
}: SliderProps) => {
  const intl = useIntl();

  const maxSliderValue = disabled ? 1 : valueLabels.length - 1;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min="0"
          max={maxSliderValue}
          value={value}
          className={styles.slider}
          style={getSliderTrackStyle(0, maxSliderValue, value)}
          onChange={(e) => setValue(parseInt(e.target.value))}
          disabled={disabled}
        />
      </div>
      <div className={styles.sliderValueDescriptionContainer}>
        {!disabled && (
          <p
            className={styles.sliderValueDescription}
            style={getSliderValueDescriptionPos(0, maxSliderValue, value)}
          >
            {intl.formatMessage({
              id: valueLabels[value],
            })}
          </p>
        )}
      </div>
    </div>
  );
};
