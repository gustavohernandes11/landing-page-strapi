import ApresentationCard from  './ApresentationCard'



export default {
    title: 'Apresentation Card',
    component: ApresentationCard,
    argTypes: {
        name: {
            control: {type: 'text'}
        },
        description: {
            control: {type: 'text'}
        },
        time: {
            control: {type: 'text'}
        }
    }

}

const Template = (args) => <ApresentationCard {...args}/>

export const Default = Template.bind({})
Default.args = {
    name: 'Cartão de Apresentação', 
    description: 'Olá eu sou um cartão de apresentação simples!',
    time: '16/06/20'
}
