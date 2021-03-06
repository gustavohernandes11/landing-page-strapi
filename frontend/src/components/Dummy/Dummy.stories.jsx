import { Footer } from './index.jsx'
export default {
    title: Footer,
    component: Footer,
    args: {
        children: 'Footer'
    },
    argTypes: {
        children: { type: 'string' },
    },

};

export const Template = (args) => {
    return (
        <div>
            <Footer {...args}/>
        </div>
    )
}


