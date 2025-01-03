import React from "react";
import { AccountVm, createEmptyTransfer, TransferVm } from "../transfer.vm";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferData: TransferVm) => void;
}

export const TransferFormComponent: React.FC<Props> = ({
  accountList,
  onTransfer,
}) => {
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransfer()
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTransfer(transfer);
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
        <div>
          <label>Seleccione la cuenta de origen</label>
          <select
            name="accountId"
            onChange={handleFieldChange}
            value={transfer.accountId}>
            <option value="">Selecione una cuenta</option>
            {accountList.map((account) => (
              <option key={account.id} value={account.id}>
                {account.alias}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Ingrese el IBAN de destino</label>
          <input name="iban" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Beneficiario</label>
          <input name="name" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Importe</label>
          <input type="number" name="amount" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Concepto</label>
          <input name="concept" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Observaciones</label>
          <input name="notes" onChange={handleFieldChange} />
        </div>
        <div>
          <p>
            Para que la transferencia se realize en otra fecha diferente a la de
            hoy, por favor, indiquenos la fecha de ejecución
          </p>
          <div>
            <label>Fecha de ejecución</label>
            <input
              name="realDateTransfer"
              type="date"
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div>
          <p>Escriba una dirección de email para dar aviso al beneficiaro:</p>
          <div>
            <label>Email del beneficiario:</label>
            <input name="email" type="email" onChange={handleFieldChange} />
          </div>
        </div>
        <button type="submit">Realizar la transferencia</button>
      </form>
    </>
  );
};
