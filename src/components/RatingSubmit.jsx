import { useState } from 'react';
import { Toast } from '../utils/Toast';
import { Box, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const RatingSubmit = ({ learningUnit, taskName }) => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  const handleRatingSubmit = (newValue) => {
    setValue(newValue);

    if (window.dataLayer) {
      window.dataLayer.push({
        event: "vl-rating-submit",
        "rating": newValue,
        "rating-value": newValue,
        "learning-unit": learningUnit || "",
        "task-name": taskName || ""
      });
    }

    Toast.fire({
      icon: 'success',
      iconColor: "white",
      background: "#a5dc86",
      title: 'Rating Submitted Successfully'
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        p: 2
      }}
    >
      <Typography component="legend" sx={{ mb: 1 }}>Rate your experience</Typography>
      <Rating
        value={value}
        precision={0.5}
        onChange={(event, newValue) => handleRatingSubmit(newValue)}
        onChangeActive={(event, newHover) => setHover(newHover)}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
};

export default RatingSubmit; 