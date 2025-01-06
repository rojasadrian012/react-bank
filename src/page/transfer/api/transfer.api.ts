import Axios from "axios";
import { AccountApiModel, TransferApiModel } from './transfer.api-model';

const urlAccountList = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountApiModel[]> =>
  Axios.get<AccountApiModel[]>(urlAccountList).then(({ data }) => data);

const urlTransfer = `${import.meta.env.VITE_BASE_API_URL}/transfer`

export const saveTransfer = (transfer: TransferApiModel): Promise<boolean>=>
    Axios.post<boolean>(urlTransfer, transfer).then(({data})=>data)