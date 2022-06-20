import * as Styled from './styles.css'
import P from 'prop-types'

export const Component = () => {
    return (
        <Styled.Container>
            <h1>Component</h1>
        </Styled.Container>
    )
}

Component.propTypes = {
    children: P.node.isRequired
}

