import React from "react";

export const UserCard = ({user}) => {
    const {firstName, lastName, email, role} = user;
    return (
        <>
            <div className="rounded-lg shadow-xl bg-gray-900 text-white" style={{width: '450px'}}>
                <div className="border-b border-gray-800 px-8 py-3">
                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                </div>
                <div className="px-8 py-6">
                    <p>
                        <em className="text-blue-400">const</em> <span
                        className="text-green-400">UserInformation</span>{' '}
                        <span className="text-pink-500">=</span> (<span
                        className="text-blue-400">user =></span> {' {'}
                    </p>
                    <p>
                        &nbsp;&nbsp;<span className="text-pink-500">return</span> {' {'}
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;first_name: <span className="text-yellow-300">{firstName}</span>,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;last_name: <span className="text-yellow-300">{lastName}</span>,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;role: <span className="text-yellow-300">{role.name}</span>,</p>


                    <p>&nbsp;&nbsp;&nbsp;&nbsp;email: <span className="text-yellow-300">
                        <a
                            href={"mailto:" + email}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-300 hover:underline focus:border-none"
                        >
                {email}
              </a>
            </span>,
                    </p>
                    <p>&nbsp;&nbsp;{' }'}</p>
                    <p>{' })'}</p>
                </div>
            </div>
        </>
    )
}