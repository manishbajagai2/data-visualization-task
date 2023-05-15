import TableData from "./components/TableData/TableData"
import useCalculations from "./hooks/useCalculations"
import useModifiedData from "./hooks/useModifiedData"
import WineData from "./utils/WineData.json"

function App() {
    let calculatedValues1 = useCalculations(WineData, "Flavanoids")

    let modifiedData = useModifiedData(WineData)
    let calculatedValues2 = useCalculations(modifiedData, "Gamma")

    // console.log(calculatedValues1)
    // console.log(calculatedValues2)

    return (
        <div className="App">
            {calculatedValues1 && calculatedValues2 ? (
                <>
                    <h1 className="heading">
                        {" "}
                        Class-wise mean, median, mode of Flavanoids{" "}
                    </h1>
                    <TableData
                        allMetrics={calculatedValues1}
                        prop="Flavanoids"
                    />
                    <h1 className="heading">
                        {" "}
                        Class-wise mean, median, mode of Gamma{" "}
                    </h1>
                    <TableData allMetrics={calculatedValues2} prop="Gamma" />
                </>
            ) : (
                <p className="load">Loading...</p>
            )}
        </div>
    )
}

export default App
