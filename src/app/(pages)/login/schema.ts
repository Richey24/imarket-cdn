import * as yup from "yup";

const schema = yup.object().shape({
     email: yup.string().email().required(),
     password: yup.string().min(4).required(),
});

export { schema };
