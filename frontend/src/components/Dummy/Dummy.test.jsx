import { screen, render } from '@testing-library/react'
import { Footer } from './index'

describe('<Footer />', () => {
    it('should render', () => {
        render(<Footer />)
        expect(screen.getByRole('heading')).toBeInTheDocument()
    })
})