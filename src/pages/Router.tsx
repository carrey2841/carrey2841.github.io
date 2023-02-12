import { FC, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '~/components/NotFound'
import PagesCarNumbers from './carnumbers'

const PagesRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/car-numbers" element={<PagesCarNumbers />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default PagesRouter
