import React from 'react'
import { FC } from 'react'
import ReactDOM from 'react-dom'
import PagesRouter from './pages/Router'

const Index: FC = () => (
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <PagesRouter />
    </React.Suspense>
  </React.StrictMode>
)

ReactDOM.render(<Index />, document.getElementById('root'))
