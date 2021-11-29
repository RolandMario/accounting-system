import React from 'react'
import { createTheme } from '@mui/material/styles';


const Theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1280,
      },
    },
  });

export default Theme
