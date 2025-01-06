import React, { useEffect } from "react";
import {
  AccountVm,
  createEmptyTransfer,
  TransferError,
  TransferVm,
  createEmptyTransferError,
} from "../transfer.vm";
import { validateForm } from "../validation";
import classes from "./transfer-form.component.module.css";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferData: TransferVm) => void;
  defaultAccountId?: string;
}

export const TransferFormComponent: React.FC<Props> = ({
  accountList,
  onTransfer,
  defaultAccountId,
}) => {
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransfer()
  );

  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  useEffect(() => {
    setTransfer({
      ...transfer,
      accountId: defaultAccountId ?? "",
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidated = validateForm(transfer);
    setErrors(formValidated.errors);
    if (formValidated.succeeded) onTransfer(transfer);
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({
      ...transfer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Seleccione la cuenta de origen</label>
            <select
              name="accountId"
              onChange={handleFieldChange}
              value={transfer.accountId}
              className={classes.large}
            >
              <option value="">Selecione una cuenta</option>
              {accountList.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>
          <div>
            <label>Ingrese el IBAN de destino</label>
            <input
              name="iban"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.iban}</p>
          </div>
          <div>
            <label>Beneficiario</label>
            <input
              name="name"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
          <div>
            <label>Importe</label>
            <input
              type="number"
              name="amount"
              onChange={handleFieldChange}
              className={classes.small}
            />
            <p className={classes.error}>{errors.amount}</p>
          </div>
          <div>
            <label>Concepto</label>
            <input name="concept" onChange={handleFieldChange} />
            <p className={classes.error}>{errors.concept}</p>
          </div>
          <div>
            <label>Observaciones</label>
            <input name="notes" onChange={handleFieldChange} />
            <p className={classes.error}>{errors.notes}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>
              Para que la transferencia se realize en otra fecha diferente a la
              de hoy, por favor, indiquenos la fecha de ejecución
            </p>
            <div>
              <label>Fecha de ejecución</label>
              <input
                name="realDateTransfer"
                type="date"
                onChange={handleFieldChange}
              />
            </div>
            <p className={classes.error}>{errors.realDateTransfer}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>Escriba una dirección de email para dar aviso al beneficiaro:</p>
            <div>
              <label>Email del beneficiario:</label>
              <input
                name="email"
                type="text"
                onChange={handleFieldChange}
                className={classes.large}
              />
            </div>
            <p className={classes.error}>{errors.email}</p>
          </div>
        </div>
        <button type="submit" className={classes.button}>
          Realizar la transferencia
        </button>
      </form>
    </>
  );
};
