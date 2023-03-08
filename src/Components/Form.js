import React, { useState } from 'react'

export default function Form () {
const [ userInfo, setUserInfo ] = useState({ name: '', email: '', password: '', tos: '' })

const onChange = (evt) => {
    const { name, value, checked, type } = evt.target
    const updatedInfo = type === 'checkbox' ? checked : value

    setUserInfo({ ...userInfo, [name]: updatedInfo })
}

return (
    <div>
        <h2>User Onboarding</h2>
        <form>
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
                <input name='tos' onChange={onChange} type='checkbox'  checked={userInfo.tos} />
            </label>
            <button>Submit</button>
        </form>
    </div>
)
}