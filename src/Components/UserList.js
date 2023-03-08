import React from 'react'


export default function UserList (props) {


    return (
        <div>
            {props.userList.map(( value, index ) => {
                return (
                    <div key={index}>
                        {value.name}, {value.email}, {value.password}
                    </div>
                )
            })}
        </div>
    )
}