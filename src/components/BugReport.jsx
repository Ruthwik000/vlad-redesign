import { useState } from 'react';
import { Toast } from '../utils/Toast';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';

const BugReport = ({ learningUnit, taskName }) => {
  const [open, setOpen] = useState(false);
  const [bugDetails, setBugDetails] = useState('');

  const handleSubmit = async () => {
    try {
      // Simulate API call
      // const response = await submitBugReport(bugDetails);
      
      // Push to dataLayer for analytics
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "vl-bug-report",
          "bug-type": bugDetails,
          "learning-unit": learningUnit || "",
          "task-name": taskName || ""
        });
      }

      Toast.fire({
        icon: 'success',
        iconColor: "white",
        background: "#a5dc86",
        title: 'Bug Reported Successfully'
      });

      setOpen(false);
    } catch (error) {
      Toast.fire({
        icon: 'error',
        iconColor: "white",
        color: "white",
        background: "#f27474",
        timer: 5000,
        title: 'Bug Report Failed',
        text: 'Please try again later'
      });
    }
  };

  return (
    <>
      <Button 
        variant="contained" 
        startIcon={<BugReportIcon />}
        onClick={() => setOpen(true)}
        sx={{
          background: 'linear-gradient(45deg, #FF5370, #ff869a)',
          '&:hover': {
            background: 'linear-gradient(45deg, #FF4560, #ff7589)'
          }
        }}
      >
        Report Bug
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Report a Bug</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Bug Description"
            fullWidth
            multiline
            rows={4}
            value={bugDetails}
            onChange={(e) => setBugDetails(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BugReport; 