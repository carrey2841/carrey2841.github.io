import { TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FormRadioLabel = styled(Typography)({
  color: 'text.secondary',
  fontSize: '16px',
  fontWeight: '400',
  marginLeft: '-5px',
  marginBottom: '3px',
})

export const FormSectionTitle = styled(Typography)({
  fontWeight: '500',
  paddingBottom: '12px',
  fontSize: '18px',
  variant: 'h2',
})

export const FormTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#2ac1bc',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#2ac1bc',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#2ac1bc',
    },
  },
  '& .MuiInputBase-input': {
    fontSize: 18,
    fontWeight: 500,
  },
})
