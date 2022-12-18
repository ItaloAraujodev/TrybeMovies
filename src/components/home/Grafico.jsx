import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Grafico = (props) => {
  return (
    <>
      <CircularProgressbar
        value={props.item}
        text={`${props.item}`}
        maxValue='10'
        styles={{
          path: {
            // Path color
            stroke: '#0018f4'
          },
          text: {
            fill: '#ffffff',
            fontSize: '35px'
          },
        }}
      />
    </>
  )
}

export default Grafico