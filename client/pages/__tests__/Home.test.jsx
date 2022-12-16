import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import Home from '../Home'

describe('Home component test', async () => {
  it('renders', () => {
    render(<Home />, { wrapper: MemoryRouter })
    expect(screen.getByText(/SECRET SANTA/i)).toBeInTheDocument()
    expect(screen.getByText(/ONLYPEETS/i)).toBeInTheDocument()
  })
  it('has images', () => {
    render(<Home />, { wrapper: MemoryRouter })
    expect(screen.getByAltText(/secret santa/i))
    expect(screen.getByAltText(/Santa with Animals/i))
  })
  it('has a link to secret santa', async () => {
    render(<Home />, { wrapper: MemoryRouter })
    const link = await screen.findAllByRole('link', {
      name: /SECRET SANTA/i,
    })
    expect(link[0].href).toContain('secretsanta')
  })
  it('has a link to onlypeets', async () => {
    render(<Home />, { wrapper: MemoryRouter })
    const link = await screen.findAllByRole('link', {
      name: /ONLYPEETS/i,
    })
    expect(link[0].href).toContain('peets')
  })
})
