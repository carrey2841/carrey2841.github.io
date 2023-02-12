import {Button, Divider, Grid, Typography} from '@mui/material'
import {FC, useState} from 'react'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import FormInput from '~/components/Form/Input'
import CarNumberResultList from '~/components/CarNumberResult/List'
import {analyzeCarNumber} from '~/lib/CarNumber/analyze'

const PagesCarNumbers: FC = () => {
    const [carNumbers, setCarNumbers] = useState([])

    const carNumberIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const CAR_NUMBER_SCHEMA = () =>
        yup.object({
            carNumbers: yup.array().of(
                yup.object({
                    value: yup
                        .string()
                        .required('차량번호를 적어주세요')
                        .min(4, '차량번호는 4자리입니다.')
                        .max(4, '차량번호는 4자리입니다.')
                }),
            ),
        })
    const {handleSubmit, control} = useForm({
        resolver: yupResolver(CAR_NUMBER_SCHEMA()),
    })

    const onSubmit = handleSubmit((data) => {
        const keys = Object.keys(data.carNumbers)
        const results = keys.map((key) => analyzeCarNumber(data.carNumbers[key].value)) ?? []
        // @ts-ignore
        setCarNumbers(results)
    })

    return (
        <>
            <Typography variant="h5">차량번호 81성명수리학 기준 분석</Typography>
            <Divider variant="middle" style={{marginBottom: '10px'}}></Divider>
            <form onSubmit={onSubmit}>
                <Grid container spacing={0.5} rowSpacing={1} columns={15}>
                    {carNumberIds.map((number, i) => {
                        return (
                            <Grid item xs={3}>
                                <FormInput
                                    label={'차량번호' + number}
                                    name={`carNumbers.${i}.value`}
                                    key={`carNumbers.${i}.value`}
                                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                                    control={control}
                                    type="number"
                                    maxLength={4}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                <Button variant="contained" style={{marginTop: '10px'}} type="submit">
                    차량번호 분석하기
                </Button>
            </form>
            <Divider variant="middle" style={{marginBottom: '10px'}}></Divider>
            <CarNumberResultList carNumbers={carNumbers}/>
        </>
    )
}

export default PagesCarNumbers
