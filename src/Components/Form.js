import React, { useState } from 'react'

export default function Form () {
const { userInfo, setUserInfo } = useState({ name: '', email: '', password: '', tos: '' })

return (
    <div>
        <h2>User Onboarding</h2>
        <form>
            <label>
                Name:
                <input type='text' name='name' value='' placeholder='Full Name' />
            </label>
            <label>
                Email:
                <input type='email' name='email' value='' placeholder='example@gmail.com' />
            </label>
            <label>
                Password:
                <input type='text' name='password' value='' placeholder='Password' />
            </label>
            <label>
                Terms of Service:
                <input type='checkbox' name='tos' checked='' />
            </label>
            <button>Submit</button>
        </form>
    </div>
)
}