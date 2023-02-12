import { FC, Suspense } from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import NotFound from '~/components/NotFound'
import PagesCarNumbers from './carnumbers'

const PagesRouter: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/car-numbers" element={<PagesCarNumbers />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default PagesRouter
