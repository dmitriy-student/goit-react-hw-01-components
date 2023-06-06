import css from './TransactionHistory.module.css'

export const TransactionHistory = ({transactions}) => {
    return(
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                <th className={css.table_head}>Type</th>
                <th className={css.table_head}>Amount</th>
                <th className={css.table_head}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({id, type, amount, currency}) => {
                    return(
                        <tr className={css.tableTr} key={id}>
                        <td className={css.tableTd}>{type}</td>
                        <td className={css.tableTd}>{amount}</td>
                        <td className={css.tableTd}>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}