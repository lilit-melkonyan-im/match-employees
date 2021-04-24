import * as Yup from "yup";

const ProfileSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("Required"),
    lastName: Yup.string()
        .required("Required"),
    email: Yup.string()
        .email("Invalid email"),
    yearsOfExperience: Yup.number()
        .min(0, "Too Short!")
        .max(50, "Too Long!")
});

export default ProfileSchema;
