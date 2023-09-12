import * as yup from "yup";

const schema = yup.object().shape({
     email: yup.string().email().required(),
     fullName: yup.string().required(),
     subject: yup.string().required(),
     content: yup.string().required(),
     domain: yup.string().required(),
});

export { schema };
