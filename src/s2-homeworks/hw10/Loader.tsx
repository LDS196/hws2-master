import s from './Loader.module.css'
import loader from '../hw10/bll/Spinner-1s-200px.svg'
export const Loader = () => {
    return(
        <div className={s.loader}>
            <img src={loader} alt=""/>

            </div>
    )
}

