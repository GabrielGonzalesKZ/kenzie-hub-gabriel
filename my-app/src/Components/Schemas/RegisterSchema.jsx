import * as yup from "yup"

export const registerSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório !").min(3, "O nome precisa ter pelo menos 3 caracteres").max(200, "O nome pode ter no máximo 200 caracteres"),
    email: yup.string().required("O email é obrigatório !").email("Precisa ser um email"),
    password: yup.string().required("A senha é obrigatória !")
        .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula")
        .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um dígito")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
        .matches(/.{8,}/, "Comprimento mínimo de oito caracteres"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem corresponder'),
    bio: yup.string().required("A BIO é obrigatória !").min(10, "Precisa ter pelo menos 10 caracteres").max(200, "Máximo de 200 caracteres"),
    contact: yup.string().required("O contato é obrigatório !").min(9, "Precisa ter pelo menos 9 dígitos"),
    course_module: yup.string().required("Selecione um módulo"),
})