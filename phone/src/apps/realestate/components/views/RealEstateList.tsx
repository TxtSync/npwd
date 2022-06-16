import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import { Button, ListItemAvatar, Avatar as MuiAvatar, List, ListItem } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useHistory } from 'react-router-dom';
import LogDebugEvent from '../../../../os/debug/LogDebugEvents';
import ListSubheader from '@mui/material/ListSubheader';
import { useCall } from '@os/call/hooks/useCall';

export const RealEstateList: React.FC = () => {
  const history = useHistory();
  const { initializeCall } = useCall();

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
    <>
      <ListSubheader component="div" id="nested-list-subheader">
        28 Properties nearby
      </ListSubheader>
      <List>
        <ListItem divider>
          <ListItemText
            primary="123 Budding  Way"
            secondary="New House - Available"
            primaryTypographyProps={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            secondaryTypographyProps={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          />
          <Button onClick={() => startCall('1233')}>
            <LocationOnIcon />
          </Button>
          <Button style={{ margin: -15 }} onClick={() => startCall('1233')}>
            <MoreVertIcon />
          </Button>
        </ListItem>
        <ListItem divider>
          <ListItemText
            primary="123 Budding  Way"
            secondary="New House - Available"
            primaryTypographyProps={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            secondaryTypographyProps={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          />
          <Button onClick={() => startCall('1233')}>
            <LocationOnIcon />
          </Button>
          <Button style={{ margin: -15 }} onClick={() => startCall('1233')}>
            <MoreVertIcon />
          </Button>
        </ListItem>
        <ListItem divider>
          <ListItemText
            primary="123 Budding  Way"
            secondary="New House - Available"
            primaryTypographyProps={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            secondaryTypographyProps={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          />
          <Button onClick={() => startCall('1233')}>
            <LocationOnIcon />
          </Button>
          <Button style={{ margin: -15 }} onClick={() => startCall('1233')}>
            <MoreVertIcon />
          </Button>
        </ListItem>
      </List>
    </>
  );
};
