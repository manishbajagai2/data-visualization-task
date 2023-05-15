import { WineDataType } from "./useCalculations"

function useModifiedData(data : WineDataType[]) {
  const dataWithGamma = data.map((d : any) => ({
      ...d,
      Gamma: ((d.Ash * d.Hue) / d.Magnesium).toFixed(3), // adding Gamma as property
  }))
  return dataWithGamma
}
export default useModifiedData