import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'
import User from './User.js'

const ThisForm = ({errors, touched, handleSubmit, values, status}) => {

    const [users, setUsers] = useState ([])

    useEffect(() => {
        if (status) {
            setUsers([...users, status])
        }
    },[status])
    console.log("users", users)
    return (
        <div>
            <h1>Form</h1>
            <Form>
                <Field type="text" name="username" placeholder="username"/>
                    {touched.username && errors.username && (
                        <p className="error">{errors.username}</p>
                    )}
                <Field type="text" name="password" placeholder="password"/>
                    {touched.password && errors.password && (
                        <p className="error">{errors.password}</p>
                    )}
                <button type="submit">Submit</button>
            </Form>
            {users.map(user => {
                return <div>
                <User username={user.username}/>
                </div>
            })}
        </div>
    )    
}

const FormikForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || "",
            password: password || ""
        }
    },
validationSchema: Yup.object().shape({
    username: Yup.string().required('Name required'),
    password: Yup.string().min(6, 'Stronger Password').required("password required")
}),
handleSubmit(values, {setStatus}) {
    axios
        .post("http://localhost:5000/api/register", values)
        .then(response => {
            
            
        })
        .catch(error => console.log(error.response))
        axios
    .get("http://localhost:5000/api/restricted/users")
    .then(response => {
        setStatus(response.data)
        console.log("response", response)
    })
    .catch(error => console.log(error.response))
},

    
})(ThisForm)

export default FormikForm


    