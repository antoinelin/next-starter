import { render, screen } from '@testing-library/react'
import { getPage } from 'next-page-tester'
import React from 'react'
import renderer from 'react-test-renderer'
import Home from './Home.page'

describe('Home', () => {
  it('renders Home page', async () => {
    const { render } = await getPage({
      route: '/',
    })

    render()
    expect(screen.getByText('Next.js!')).toBeInTheDocument()
  })

  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Snapshots', () => {
  it('renders homepage unchanged', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
