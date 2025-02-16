import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const IframeContainer = ({ src, title }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        const height = iframeRef.current.contentWindow.document.body.scrollHeight;
        iframeRef.current.style.height = `${height}px`;
      }
    };

    // Set up message listener for iframe height updates
    const handleMessage = (event) => {
      if (event.data.frameHeight) {
        iframeRef.current.style.height = `${event.data.frameHeight}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        width="100%"
        frameBorder="0"
        scrolling="no"
        style={{ transition: 'height 0.3s ease' }}
      />
    </Box>
  );
};

export default IframeContainer; 