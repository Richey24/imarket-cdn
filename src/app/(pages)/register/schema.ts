import * as yup from "yup";

const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    confirmPassword: yup.string().min(5).required(),
});

export { schema }