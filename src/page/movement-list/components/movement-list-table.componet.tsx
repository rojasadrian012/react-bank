import React from "react";
import { MovementListApiModel } from "../api";
import classes from "./movement-list-table.componet.module.css";
import { MovementListItemComponent } from "./movement-list-item.componet";

interface Props {
  movements: MovementListApiModel[];
}

export const MovementListTableComponent: React.FC<Props> = ({ movements }) => {
  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>FECHA</span>
            <span className={classes.headerCell}>FECHA VALOR</span>
            <span className={classes.headerCell}>DESCRIPCIÓN</span>
            <span className={classes.headerCell}>IMPORTE</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          </div>
          {movements.map((movement) => (
            <MovementListItemComponent key={movement.id} movement={movement} />
          ))}
        </div>
      </div>
    </>
  );
};
