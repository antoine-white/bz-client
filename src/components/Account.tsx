import { FC } from "react";


export type account = {
    name ?: string;
    money ?: number;
}

const Account : FC<account> = ({name , money})=>(
    <article>
        <p><strong>{name}</strong></p>
        <p>{money} $</p>
    </article>
);

export default Account;