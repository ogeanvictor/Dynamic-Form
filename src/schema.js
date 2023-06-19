export const fields = [
    {
        type: 'text',
        fieldName: 'name',
        label: 'Nome',
        defaultValue: '',
        config: {
            required: true
        },
    },
    {
        type: 'email',
        fieldName: 'email',
        label: 'Email',
        defaultValue: '',
        config: {
            required: true
        },
    },
    {
        type: 'date',
        fieldName: 'bornDate',
        label: 'Data de Nascimento',
        defaultValue: '',
        config: {
            required: true
        },
    },
    {
        type: 'password',
        fieldName: 'password',
        label: 'Senha',
        defaultValue: '',
        config: {
            required: true
        },
    },
    {
        type: 'select',
        fieldName: 'technologys',
        label: 'Tecnologias',
        options: [
            { value: 'JavaScript', label: 'JavaScript'},
            { value: 'Java', label: 'Java'},
            { value: 'Python', label: 'Python'},
        ],
        defaultValue: 'JavaScript',
        config: {
            required: true
        },
    }
];