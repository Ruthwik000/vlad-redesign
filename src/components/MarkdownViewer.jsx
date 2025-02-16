import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const MarkdownViewer = ({ markdown, src }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load web components polyfill
    const script = document.createElement('script');
    script.src = '/js/webcomponents-loader.min.js';
    document.head.appendChild(script);

    // Load zero-md after polyfill
    script.onload = () => {
      const zeroMdScript = document.createElement('script');
      zeroMdScript.src = '/js/zero-md.min.js';
      document.head.appendChild(zeroMdScript);
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Box ref={containerRef}>
      <zero-md src={src}>
        {markdown && (
          <template>
            <xmp>{markdown}</xmp>
          </template>
        )}
      </zero-md>
    </Box>
  );
};

export default MarkdownViewer; 