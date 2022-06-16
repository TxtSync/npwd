import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import { Button, ListItemAvatar, Avatar as MuiAvatar, List, ListItem } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import LogDebugEvent from '../../../../os/debug/LogDebugEvents';
import ListSubheader from '@mui/material/ListSubheader';
import { useCall } from '@os/call/hooks/useCall';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export const RealEstateAddProperty: React.FC = () => {
  const history = useHistory();
  const theme = useTheme();
  const { initializeCall } = useCall();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 5;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const openContactInfo = (contactId: number) => {
    history.push(`/contacts/${contactId}`);
  };

  const startCall = (number: string) => {
    LogDebugEvent({
      action: 'Emitting `Start Call` to Scripts',
      level: 2,
      data: true,
    });
    initializeCall(number);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>Testign</Typography>
      </Paper>

      <Box
        sx={{
          display: 'flex',
          minHeight: 550,
          width: '100%',
          p: 2,
        }}
      >
        Testign 121121
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
};
