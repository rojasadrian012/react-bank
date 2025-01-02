import React from "react";
import classes from './movement-list-item.componet.module.css'
import { MovementListApiModel } from '../api/movement-list.api-model';

interface Props {
    movement: MovementListApiModel
}

export const MovementListItemComponent: React.FC<Props> = ({ movement }) => {
    const transactionDate = new Date(movement.transaction);
    const realTransactionDate = new Date(movement.realTransaction);
  
    return (
      <div className={classes.row}>
        <span className={classes.dataCell}>
          {transactionDate.toLocaleDateString()}
        </span>
        <span className={classes.dataCell}>
          {realTransactionDate.toLocaleDateString()}
        </span>
        <span className={classes.dataCell}>
          {movement.description}
        </span>
        <span className={
            `${classes.dataCell} ${classes.alingRight} 
            ${
                movement.amount < 0
                ? classes.red
                : '' 
            }`
        }>
          {movement.amount} €
        </span>
        <span className={`${classes.dataCell} ${classes.alingRight}`}>
          {movement.balance} €
        </span>
      </div>
    );
  };