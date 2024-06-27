import * as React from 'react';
import "../css/Banner.css";
import { 
  images, 
  ImageButton,
  ImageBackdrop,
  Image,
  ImageMarked 
} from './buttomImports';


import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function ButtonBaseDemo() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/sobre');
  }
  handleClick();
  return (   
   <div className='Buttom'>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
            <ImageButton
            focusRipple
            key={image.title}
            style={{
                width: image.width,
            }}
            onClick={handleClick}
            >
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
                >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
                </Typography>
            </Image>
            </ImageButton>
        ))}
        </Box>
    </div>
  );
}
