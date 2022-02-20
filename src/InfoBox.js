import React from 'react';
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import { buildTimeValue } from '@testing-library/user-event/dist/utils';

function InfoBox({ title, cases, total,active,isRed, ...props  }) {
  return (
    <Card onClick={props.onClick} className="infoBox">
        <CardContent>
            
          <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
           
          <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>

           <Typography className="infoBox__total" color="textSecondary">
          {total}
        </Typography>
        </CardContent>

    </Card>
  )
}

export default InfoBox;

