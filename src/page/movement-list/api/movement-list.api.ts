
import Axios  from "axios";
import { MovementListApiModel } from "./movement-list.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/movements`

export const getMovementsById = (accountId: string):Promise<MovementListApiModel[]>=>
    Axios.get<MovementListApiModel[]>(url, {params: {accountId}}).then(({data})=>data)

export const getMovements = ():Promise<MovementListApiModel[]>=>
    Axios.get<MovementListApiModel[]>(url).then(({data})=>data)