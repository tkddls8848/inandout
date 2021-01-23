import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from './SimpleCard'

const useStyles = makeStyles({
  root: {
    margin:10,
  },
});

export default function CardDiv() {
  const classes = useStyles();

  return (
    <div className="card-group" style={{width:"85%", display:"flex", flexDirection:"row"}}>
      <SimpleCard></SimpleCard>
      <SimpleCard></SimpleCard>
    </div>
  );
}
