import { CarNumberResult } from '~/models/CarNumberResult'
import { getGilhung } from '~/models/CarNumberResult/Gilhung81'

export const analyzeCarNumber = (carNumber: string): CarNumberResult => {
  const carNumber1 = parseInt(carNumber.charAt(0))
  const carNumber2 = parseInt(carNumber.charAt(1))
  const carNumber3 = parseInt(carNumber.charAt(2))
  const carNumber4 = parseInt(carNumber.charAt(3))

  const result1 = carNumber1 + carNumber2
  const result2 = carNumber2 + carNumber3
  const result3 = carNumber3 + carNumber4
  const result4 = carNumber1 + carNumber2 + carNumber3 + carNumber4

  return {
    carNumber: carNumber,
    result1: {
      number: result1,
      description: getGilhung(result1).description,
      gilhung: getGilhung(result1).gilhung,
    },
    result2: {
      number: result2,
      description: getGilhung(result2).description,
      gilhung: getGilhung(result2).gilhung,
    },
    result3: {
      number: result3,
      description: getGilhung(result3).description,
      gilhung: getGilhung(result3).gilhung,
    },
    result4: {
      number: result4,
      description: getGilhung(result4).description,
      gilhung: getGilhung(result4).gilhung,
    },
  }
}
