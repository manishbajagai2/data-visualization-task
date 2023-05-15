import { useEffect, useState } from "react"

export interface WineDataType {
    "Alcalinity of ash": number | string
    Alcohol: number | string
    Ash: number | string
    "Color intensity": number | string
    Flavanoids: number | string
    Hue: number | string
    Magnesium: number | string
    "Malic Acid": number | string
    "Nonflavanoid phenols": number | string
    "OD280/OD315 of diluted wines": number | string
    Proanthocyanins: number | string
    "Total phenols": number | string
    Unknown: number | string
    Gamma?: number | string
}

export interface statisticsType {
    Alcohol: number
    Mean: string | number
    Median: string | number
    Mode: string | number
}

export interface statisticObj {
    count: number
    sum: number
    values: number[]
}
const useCalculations = (data: WineDataType[], prop: string) => {
    const [statistics, setStatistics] = useState<statisticsType[] | null>(null)

    useEffect(() => {
        const statisticsObj: statisticObj[] = [] // populating objects of individual Alcohol

        // Building the object for further process in finding statistics
        data.forEach((wine: any) => {
            if (statisticsObj[wine.Alcohol]) {
                statisticsObj[wine.Alcohol].sum += Number(wine[`${prop}`])
                statisticsObj[wine.Alcohol].count += 1
                statisticsObj[wine.Alcohol].values.push(Number(wine[`${prop}`]))
            } else {
                statisticsObj[wine.Alcohol] = {
                    sum: Number(wine[`${prop}`]),
                    count: 1,
                    values: [Number(wine[`${prop}`])],
                }
            }
        })

        const statisticsArr: statisticsType[] = [] // combined array of objects containing Alcohol, Mean, Median and Mode

        for (const alcohol in statisticsObj) {
            const { sum, count, values } = statisticsObj[alcohol]
            // Calculating mean
            const mean = sum / count

            // Calculating median
            values.sort((a: number, b: number) => a - b)
            const middle = Math.floor(values.length / 2)
            const median =
                values.length % 2 === 0
                    ? (values[middle - 1] + values[middle]) / 2
                    : values[middle]

            // Calculating mode
            const modeMap: number[] = [] // to find the frequency
            let maxCount = 1
            let mode = values[0]
            values.forEach((value: number) => {
                if (modeMap[value]) {
                    modeMap[value] += 1
                } else {
                    modeMap[value] = 1 // initial value
                }
                if (modeMap[value] > maxCount) {
                    mode = value
                    maxCount = modeMap[value]
                }
            })

            statisticsArr.push({
                Alcohol: parseFloat(alcohol),
                Mean: mean.toFixed(3), // rounded to three decimal places
                Median: median.toFixed(3),
                Mode: mode.toFixed(3),
            })
        }
        setStatistics(statisticsArr)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prop])

    return statistics
}

export default useCalculations
