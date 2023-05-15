import { statisticsType } from "../../hooks/useCalculations"
import styles from "./TableData.module.css"

interface TableDataProps {
    allMetrics: statisticsType[] | null
    prop : string
}

const TableData = ({ allMetrics, prop }: TableDataProps) => {
    return (
        <div>
            {allMetrics ? (
                <table>
                    <thead>
                        <tr>
                            <th>Measure</th>
                            {allMetrics.map((data) => (
                                <th
                                    className={styles.centerText}
                                    key={data.Alcohol}
                                >
                                    Class {data.Alcohol}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(allMetrics[0])
                            .filter((metric) => metric !== "Alcohol")
                            .map((metric) => (
                                <tr key={metric}>
                                    <td>
                                        {prop} &nbsp;
                                        {metric}
                                    </td>
                                    {allMetrics.map((data: any, index) => (
                                        <td
                                            className={styles.centerText}
                                            key={index}
                                        >
                                            {data[metric]}
                                        </td>
                                    ))}
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
