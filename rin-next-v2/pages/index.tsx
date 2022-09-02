import type { NextPage } from 'next'
import NavBar from '../shared/shared-components/navbar'
import IndexShowcase from '../shared/index-components/showcase'

const Index: NextPage = () => {
  return (
    <div>
      <NavBar/>
      <IndexShowcase/>
    </div>
  )
}

export default Index
