import { appRoutes } from "@/core/router";
import { AccountItemVM } from "../account-item.vm";
import classes from "./account-list-item.component.module.css";
import { generatePath, Link, useNavigate } from "react-router-dom";

interface Props {
  accountItem: AccountItemVM;
}

const ACTION_NONE = "";
const ACTION_TRANSFER = "1";
const ACTION_MOVEMENTS = "2";

export const AccountListItemComponent: React.FC<Props> = ({ accountItem }) => {
  const navigate = useNavigate();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case ACTION_TRANSFER:
        navigate(
          generatePath(appRoutes.transferFromAccount, { id: accountItem.id })
        );
        break;
      case ACTION_MOVEMENTS:
        navigate(generatePath(appRoutes.movements, { id: accountItem.id }));
        break;
    }
  };

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        <Link to={generatePath(appRoutes.movements, { id: accountItem.id })}>
          {accountItem.iban}
        </Link>
      </span>
      <span className={classes.dataCell}>{accountItem.name}</span>
      <span className={`${classes.dataCell} ${classes.alingRight}`}>
        {accountItem.balance}
      </span>
      <span className={`${classes.dataCell} ${classes.alingRight}`}>
        {accountItem.lastTransaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.selectContainer}`}>
        <select className={classes.select} onChange={handleSelect}>
          <option value={ACTION_NONE}>Seleccionar</option>
          <option value={ACTION_TRANSFER}>Transferir</option>
          <option value={ACTION_MOVEMENTS}>Movimientos</option>
        </select>
      </span>
    </div>
  );
};
