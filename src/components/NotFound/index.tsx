import { Typography } from '@mui/material'
import { FC } from 'react'
import { NotFoundContainer } from '~/components/NotFound/Styled'

const NotFound: FC = () => {
  return (
    <NotFoundContainer alignItems="center" container direction="column" justifyContent="center">
      <Typography variant="subtitle1">페이지를 찾을 수 없습니다.</Typography>
    </NotFoundContainer>
  )
}

export default NotFound
