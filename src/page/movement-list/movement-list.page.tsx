import { AppLayout } from "@/layouts";
import React from "react";
import { useParams } from "react-router-dom";
import { getMovements, getMovementsById, MovementListApiModel } from "./api";
import { MovementListTableComponent } from "./components/movement-list-table.componet";
import classes from './movement-list.page.module.css'
import { useAccountContext } from "@/shared/account";


export const MovementListPage: React.FC = () => {
  const {id} = useParams<{id:string}>()
  const [movements, setMovements] = React.useState<MovementListApiModel[]>([])
  const {account} = useAccountContext()

  React.useEffect(()=>{
    if(id){    
      if(id != 'all') {
        getMovementsById(id).then((result)=> setMovements(result))      
        return
      }
      getMovements().then((result)=>setMovements(result))
    } 
  },[])

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos Movimientos</h1>
          <div>
            {id != "all" && (
              <>
                <p>SALDO DISPONIBLE</p>
                <p className={classes.balance}>{movements[0]?.balance} €</p>
              </>
            )}
          </div>
        </div>
        <div className={classes.info}>
          {
            id != 'all' 
            ? 
            <>
              <span>Alias: {account.name} </span> 
              <span>IBAN: {account.iban} </span> 
            </> 
            :
            <span>MOVIMIENTOS DE TODAS LAS CUENTAS</span>
          }
        </div>
        <MovementListTableComponent movements={movements}/>
      </div>
    </AppLayout>
  );
};
