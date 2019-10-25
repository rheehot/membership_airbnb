import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { sliderStyle, fieldStyle } from '../../styles/slider';

const AirbnbSlider = withStyles(sliderStyle)(Slider);
const AirbnbField = withStyles(fieldStyle)(TextField);

const AirbnbThumbComponent = (props) => (
  <span {...props}>
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
  </span>
);

const S = {
  bnbSlider: styled.div`
    padding: 30px 50px;
  `,
  Input: styled.div`
    display: flex;
    align-items: center;
    margin: 0 50px 30px 50px;
  `,
};

const PriceSlider = ({
 minPrice, maxPrice, setMin, setMax 
}) => {
  const sliderHandler = (e, value) => {
    setMin(value[0]);
    setMax(value[1]);
  };

  return (
    <>
      <S.bnbSlider>
        <AirbnbSlider
          ThumbComponent={AirbnbThumbComponent}
          defaultValue={[minPrice, maxPrice]}
          onChange={sliderHandler}
          min={0}
          max={1000000}
        />
      </S.bnbSlider>
      <S.Input>
        <AirbnbField
          style={{ width: 160 }}
          id="min-text"
          variant="outlined"
          label="최저요금"
          value={minPrice}
          onChange={(e) => setMin(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">₩</InputAdornment>,
          }}
        />
        <div>&nbsp;&nbsp;-&nbsp;&nbsp;</div>
        <AirbnbField
          style={{ width: 160 }}
          id="max-text"
          variant="outlined"
          label="최대요금"
          value={maxPrice}
          onChange={(e) => setMax(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">₩</InputAdornment>,
          }}
        />
      </S.Input>
    </>
  );
};
PriceSlider.propTypes = {
  maxPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
  setMin: PropTypes.func.isRequired,
  setMax: PropTypes.func.isRequired,
};

export default PriceSlider;
