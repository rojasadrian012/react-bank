import classes from './page-header.module.css';
interface Props {
    children: React.ReactNode
}
export const PageHeader: React.FC<Props> = ({children}) =>{
    return(
        <div className={classes.headerContainer}>
          {children}
        </div>
    )
}