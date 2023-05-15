import { statisticsType } from "../../hooks/useCalculations"
import styles from "./TableData.module.css"

interface TableDataProps {
    allMetrics: statisticsType[] | null
    prop : string
}

const TableData = ({ allMetrics, prop }: TableDataProps) => {
    let text = ["Mean", "Median", "Mode"] // to show as header in the table
    return (
        <div>
            {allMetrics ? (
                <table>
                    <thead>
                        <tr>
                            <th>Measure</th>
                            {allMetrics.map((stat) => (
                                <th
                                    key={stat.Alcohol}
                                    className={styles.centerText}
                                >
                                    Class {stat.Alcohol}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {allMetrics.map((stat, idx) => (
                            <tr key={stat.Alcohol}>
                                <td>
                                    {prop} &nbsp;
                                    {text[idx]}
                                </td>
                                <td className={styles.centerText}>
                                    {stat.Mean}
                                </td>
                                <td className={styles.centerText}>
                                    {stat.Median}
                                </td>
                                <td className={styles.centerText}>
                                    {stat.Mode}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className={styles.load}>Loading...</p>
            )}
        </div>
    )
}
export default TableData
