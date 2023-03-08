import React, { useState, useEffect } from 'react'
import UserList from './UserList'
import * as Yup from 'yup'

export default function Form (props) {
// State Block
const [ userInfo, setUserInfo ] = useState({ name: '', email: '', password: '', tos: false })
const [ userList, setUserList ] = useState([])
const [ errors, setErrors ] = useState({ name: '', email: '', password: '', tos: '' })
const [ buttonDisabled, setButtonDisabled ] = useState(true)

// Form Schema
const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required("Please input your first and last name."),
    email: Yup
        .string()
        .email("Please provide a valid email address.")
        .required("Please input your email."),
    password: Yup
        .string()
        .required("Please input your password.")
        .min(6, 'Password must be at least 6 characters long.'),
    tos: Yup
        .boolean()
        .oneOf([true], "You must accept the Terms of Service to continue.")
})


useEffect( () => {
    formSchema.isValid(userInfo).then( valid => {
      setButtonDisabled(!valid)
    })
  }, [userInfo])

// Change Handler
const onChange = (evt) => {
    const { name, value, checked, type } = evt.target
    const updatedInfo = type === 'checkbox' ? checked : value
    //console.log(evt.target)
    // Check for errors at each event, set to error state if found:
    Yup.reach(formSchema, name)
        .validate(value)
        .then( () => setErrors({ ...errors, [name]: "" }))
        .catch( err => setErrors({ ...errors, [name]: err.errors[0]}))

    setUserInfo({ ...userInfo, [name]: updatedInfo })
}

// Submit Handler
const onSubmit = (evt) => {
    evt.preventDefault()
    setUserList([...userList, userInfo])
    setUserInfo({ name: '', email: '', password: '', tos: '' })
}

// JSX
return (
    <div>
        <form onSubmit={onSubmit} >
            <label>
                Name:
                <input name='name' onChange={onChange} type='text'  value={userInfo.name} placeholder='Full Name' />
            </label>
            
            <label>
                Email:
                <input name='email' onChange={onChange} type='email'  value={userInfo.email} placeholder='example@gmail.com' />
            </label>
            
            <label>
                Password:
                <input name='password' onChange={onChange} type='text'  value={userInfo.password} placeholder='Password' />
            </label>
            
            <label>
                Terms of Service:
                <input name='tos' onChange={onChange} type='checkbox' checked={userInfo.tos} />
            </label>
            
            <button disabled={buttonDisabled}>Submit</button>
        </form>
        { errors.name.length > 0 && <p className="error">{errors.name}</p> }
        { errors.email.length > 0 && <p className="error">{errors.email}</p> }
        { errors.password.length > 0 && <p className="error">{errors.password}</p> }
        {/* { errors.tos.length > 0 && <p className="error">{errors.tos}</p> } */}

        <UserList userList={userList} />
    </div>
)

}