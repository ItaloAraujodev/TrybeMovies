import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Grafico = (props) => {
  return (
    <>
      <CircularProgressbar
        value={props.item}
        text={`${props.item.toFixed() * 10 }`}
        maxValue='10'
        styles={{
          
          path: {
            // Path color
            stroke: '#ffffff'
          },

          trail: {
            stroke: '#151718',
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