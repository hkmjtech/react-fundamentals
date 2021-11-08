// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const Box = ({className, style, children}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

function App() {
  return (
    <Box className="box">
      <Box className="box--small"  style={{fontStyle: 'italic', backgroundColor: 'lightBlue', border: '1px solid #333', display: 'flex', flexDirection: "column", justifyContent: "center", textAlign: 'center'}}>
        small box
      </Box>
      <Box className="box--medium"  style={{fontStyle: 'italic', backgroundColor: 'pink', border: '1px solid #333', display: 'flex', flexDirection: "column", justifyContent: "center", textAlign: 'center'}}>
        medium box
      </Box>
      <Box className="box--large"  style={{fontStyle: 'italic', backgroundColor: 'orange', border: '1px solid #333', display: 'flex', flexDirection: "column", justifyContent: "center", textAlign: 'center'}}>
        large box
      </Box>
    </Box>
  )
}

export default App
