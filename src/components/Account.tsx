import { FC } from "react";

interface money { money : number}

const MoneyDisplayer : FC<money> = ({money}) => {
    const badgeType = money === 0 ? "alert-warning" : money > 0 ? "alert-success": "alert-danger";
    console.log(money);
    
    return (
        <span style={{fontSize:"2em"}} className={`badge ${badgeType}`}>{money}$</span>
    )
}

export type account = {
    name ?: string;
    money ?: number;
}

const Account : FC<account> = ({name , money})=>(
    <article className="rounded border border-primary my-4 row">
        <h3 style={{fontSize:"3em"}}>{name}</h3>
        {
        money !== undefined ? 
        <MoneyDisplayer {...{money : money}}/>
        :<p></p>
        }
    </article>
);

export default Account;