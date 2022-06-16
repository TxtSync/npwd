import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useExampleStringValue } from '../hooks/state';
import { useApp } from '@os/apps/hooks/useApps';
import { RealEstateList } from './views/RealEstateList';
import { LoadingSpinner } from '@ui/components/LoadingSpinner';
import { Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import Fab from '@mui/material/Fab';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { RealEstateAddProperty } from './views/RealEstateAddProperty';

const useStyles = makeStyles((theme: Theme) => ({
  absolute: {
    position: 'absolute',
    right: theme.spacing(3),
    bottom: theme.spacing(2),
  },
}));

export const RealEstateApp: React.FC = () => {
  const exampleString = useExampleStringValue();
  const { pathname } = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const pathTemplate = /realestate\/newproperty/;

  const example = useApp('REALESTATE');

  return (
    <>
      <React.Suspense fallback={<LoadingSpinner />}>
        <Route path="/realestate/" exact component={RealEstateList} />
        <Route path="/realestate/newproperty" exact component={RealEstateAddProperty} />
      </React.Suspense>
      {!pathname.match(pathTemplate) && (
        <Fab
          color="secondary"
          onClick={() => history.push('/realestate/newproperty')}
          className={classes.absolute}
        >
          <AddLocationIcon />
        </Fab>
      )}
    </>
  );
};
