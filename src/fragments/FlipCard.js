import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const cardStyle = {
  width: '300px',
  height: '400px',
  position: 'relative',
  perspective: 1000,
  cursor: 'pointer',
};

const innerStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
};

const faceStyle = {
  backfaceVisibility: 'hidden',
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

const backStyle = {
  ...faceStyle,
  transform: 'rotateY(180deg)',
};

function FlipCard({frontTitle, frontText, backTitle, backText, imageUrl}){

    const [flipped, setFlipped] = useState(false);

    return (
    <div style={cardStyle} onClick={() => setFlipped(!flipped)}>
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={innerStyle}
      >
        {/* Front */}
        <Card style={faceStyle}>
          <CardMedia
            component="img"
            height="200"
            image={imageUrl}
            alt={frontTitle}
          />
          <CardContent style={{ overflowY: 'auto' }}>
            <Typography variant="h6">{frontTitle}</Typography>
            <Typography variant="body2">{frontText}</Typography>
          </CardContent>
        </Card>

        {/* Back */}
        <Card style={backStyle}>
          <CardContent style={{ overflowY: 'auto' }}>
            <Typography variant="h6">{backTitle}</Typography>
            <Typography variant="body2">{backText}</Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default FlipCard;