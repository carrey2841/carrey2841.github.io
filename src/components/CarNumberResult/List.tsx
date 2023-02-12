import { List, ListItem } from '@mui/material'
import { CarNumberResult } from '~/models/CarNumberResult'

export interface Props {
  carNumbers: CarNumberResult[]
}

const CarNumberResultList = ({ carNumbers }: Props) => {
  console.log(carNumbers)
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {carNumbers.map((carNumber, index) => (
        <ListItem>{carNumber.value}</ListItem>
      ))}
    </List>
  )
}

export default CarNumberResultList
