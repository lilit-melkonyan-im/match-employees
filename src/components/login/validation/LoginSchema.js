import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(6, "Passwords must be at least 6 characters long")
        .max(10, "Passwords must be maximum of 10 characters long")
        .required("Required"),
});

export default LoginSchema;
