import { List, ListItem, ListItemText } from '@mui/material'
import { Fragment } from 'react'
import { CarNumberResult } from '~/models/CarNumberResult'

export interface Props {
  carNumbers: CarNumberResult[]
}

const getColor = (gilhung: string) => {
  if (gilhung === '대길') {
    return 'green'
  } else if (gilhung == '대흉') {
    return 'red'
  } else {
    return 'black'
  }
}

const CarNumberResultList = ({ carNumbers }: Props) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {carNumbers.map((carNumber, index) => (
        <ListItem>
          <ListItemText
            primary={carNumber.carNumber}
            secondary={
              <Fragment>
                <ul>
                  <li>
                    <b style={{ color: getColor(carNumber.result1.gilhung) }}>{carNumber.result1.gilhung}</b>:{' '}
                    {carNumber.result1.description}
                  </li>
                  <li>
                    <b style={{ color: getColor(carNumber.result2.gilhung) }}>{carNumber.result2.gilhung}</b>:{' '}
                    {carNumber.result2.description}
                  </li>
                  <li>
                    <b style={{ color: getColor(carNumber.result3.gilhung) }}>{carNumber.result3.gilhung}</b>:{' '}
                    {carNumber.result3.description}
                  </li>
                  <li>
                    <b style={{ color: getColor(carNumber.result4.gilhung) }}>{carNumber.result4.gilhung}</b>:{' '}
                    {carNumber.result4.description}
                  </li>
                </ul>
              </Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  )
}

export default CarNumberResultList
