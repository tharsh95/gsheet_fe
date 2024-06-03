import * as Yup  from "yup"

export const signInSchema = Yup.object({
    email:Yup.string().email("Invalid Email").required("Email is required"),
    password:Yup.string().required("Password is required")
})
export const signUpSchema = Yup.object({
    email:Yup.string().email("Invalid Email").required("Email is required"),
    username:Yup.string().required("Username is required"),
    password:Yup.string().min(6).required("Password is required"),
    conf_pass:Yup.string().required("Confirm Password is required").oneOf([Yup.ref("password"),null],"Password must match")
})

export const spreadSchema = Yup.object({
    id:Yup.string().required("All fields required"),
    name:Yup.string().required("All fields required")
})