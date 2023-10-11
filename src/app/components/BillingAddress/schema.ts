import * as yup from "yup";

const schema = yup.object().shape({
     firstname: yup.string().required(),
     lastname: yup.string().required(),
     email: yup.string().email().required(),
     company: yup.string(),
     country: yup.string().required(),
     street: yup.string().required(),
     city: yup.string().required(),
     state: yup.string().required(),
     zipcode: yup.string().required(),
     phone: yup.string().min(10).required(),
});

export { schema };
