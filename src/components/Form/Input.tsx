import { StandardTextFieldProps } from '@mui/material/TextField/TextField'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { Control } from 'react-hook-form/dist/types'

import { FormTextField } from './Styled'

interface Props extends StandardTextFieldProps {
  name: string
  control: Control<any>
  multiline?: boolean
  maxLength?: number
}

const FormInput: FC<Props> = (props) => {
  const {
    name,
    control,
    size = 'small',
    fullWidth = true,
    color = 'warning',
    multiline = false,
    maxLength = 512,
  } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState, formState }) => {
        return (
          <FormTextField
            {...field}
            {...props}
            color={color}
            error={!!fieldState.error}
            fullWidth={fullWidth}
            helperText={fieldState.error?.message}
            inputProps={{ maxLength }}
            maxRows={20}
            multiline={multiline}
            size={size}
          />
        )
      }}
    />
  )
}

export default FormInput
