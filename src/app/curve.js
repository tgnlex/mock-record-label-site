import ReactCurvedText from 'react-curved-text';

export const Curve = ({width, height, text}) => {
  return (
    <>
  <ReactCurvedText
      width={width}
      height={height}
      cx={150}
      cy={150}
      rx={100}
      ry={100}
      startOffset={65}
      reversed={true}
      text={text}
      textPathProps={null}
      tspanProps={null}
      ellipseProps={null}
      svgProps={null}
  />
  </>
  )
}

