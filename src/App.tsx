import useCalculations from "./hooks/useCalculations"
import useModifiedData from "./hooks/useModifiedData"
import WineData from "./utils/WineData.json"

function App() {
    let calculatedValues1 = useCalculations(WineData, "Flavanoids")

    let modifiedData = useModifiedData(WineData)
    let calculatedValues2 = useCalculations(modifiedData, "Gamma")

    console.log(calculatedValues1)
    console.log(calculatedValues2)

    return (
        <div className="App">
            <h1>Hello from TypeScript</h1>
        </div>
    )
}

export default App
