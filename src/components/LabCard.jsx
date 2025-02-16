import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,
  Chip,
  IconButton,
  Paper
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types';

const LabCard = ({ title, description, image, category, onClick }) => {
  return (
    <Paper
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        position: 'relative',
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.05)',
          '& .media-overlay': {
            opacity: 0.3,
          },
          '& .arrow-icon': {
            transform: 'translateX(4px)',
            opacity: 1,
          }
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{
            objectFit: 'cover',
          }}
        />
        <Box
          className="media-overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
            opacity: 0.5,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      </Box>

      <CardContent
        sx={{
          p: 3,
          '&:last-child': { pb: 3 },
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 2,
            fontSize: '0.875rem',
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <Typography
                sx={{
                  color: '#2196F3',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                }}
              >
                Explore Lab
              </Typography>
              <ArrowForwardIcon 
                className="arrow-icon"
                sx={{
                  ml: 1,
                  color: '#2196F3',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  opacity: 0.7,
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </CardContent>
    </Paper>
  );
};

LabCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LabCard;
