import * as Yup from "yup";
import constants from "../resources/constants";

const ProfileSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email"),
    // experience: Yup.array().of(
    //     Yup.object().shape({
    //         industry: Yup.string().oneOf(constants.industries).required("Required"),
    //         years: Yup.number()
    //             .min(1, "Invalid number")
    //             .max(50, "Too Long!")
    //             .required("Required"),
    //     })
    // ).required(),
});

export default ProfileSchema;
