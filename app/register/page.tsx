"use client";

import Image from "next/image";
import Background from '../components/Background';
import { useReducer } from "react";
import { reducer, initialState } from "../reducers/RegistrationReducer";
import useRegistration from "../api/RegisterAuth";

export default function signIn(){
    const {register} = useRegistration();
    const [state,dispatch] = useReducer(reducer, initialState);

    return(
        <main className="min-h-screen bg-white">
            <Background>
                {/* Sub-Header */}
                <Image
                    src="/initial/voting.png"
                    alt="Voting"    
                    width={280}
                    height={220}
                    className="mx-auto mt-7 my-2"
                />

                {/* Registration Form */}
                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        register(state);
                    }}
                    className="mx-auto w-[70%] max-w-[400px] flex flex-col gap-y-3 font-bold text-xs md:text-md z-20"
                >
                    {/* Student ID */}
                    <div className="flex flex-col items-start">
                    <label htmlFor="student-id">STUDENT ID</label>
                    <input 
                        type="text" 
                        name="student-id" 
                        id="student-id"
                        className="border border-gray-500 w-full h-8 px-2"
                        value={state.studentId}
                        onChange={(e) => dispatch({
                            type:'studentId', 
                            payload: e.target.value
                        })}
                    />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col items-start">
                    <label htmlFor="password">PASSWORD</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        className="border border-gray-500 w-full h-8 px-2"
                        value={state.password}
                        onChange={(e) => dispatch({
                            type:'password', 
                            payload: e.target.value
                        })}
                    />
                    </div>

                    {/* Last Name and First Name */}
                    <div className="flex flex-row gap-x-3">
                    <div className="w-1/2 flex flex-col">
                        <label htmlFor="last-name">LAST NAME</label>
                        <input 
                            type="text" 
                            name="last-name" 
                            id="last-name"
                            className="border border-gray-500 w-full h-8 px-2"
                            value={state.lastName}
                            onChange={(e) => dispatch({
                                type:'lastName', 
                                payload: e.target.value
                            })}
                        />
                    </div>

                    <div className="w-1/2 flex flex-col">
                        <label htmlFor="first-name">FIRST NAME</label>
                        <input 
                            type="text" 
                            name="first-name" 
                            id="first-name"
                            className="border border-gray-500 w-full h-8 px-2"
                            value={state.firstName}
                            onChange={(e) => dispatch({
                                type:'firstName', 
                                payload: e.target.value
                            })}
                        />
                    </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-start">
                    <label htmlFor="email">EMAIL</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        className="border border-gray-500 w-full h-8 px-2"
                        value={state.email}
                        onChange={(e) => dispatch({
                            type:'email', 
                            payload: e.target.value
                        })}
                    />
                    </div>

                    {/* Course and Section */}
                    <div className="flex flex-row gap-x-3">
                        <div className="w-4/6 flex flex-col">
                            <label htmlFor="course">COURSE</label>
                            <input 
                                type="text" 
                                name="course" 
                                id="course"
                                className="border border-gray-500 w-full h-8 px-2"
                                value={state.course}
                                onChange={(e) => dispatch({
                                    type:'course', 
                                    payload: e.target.value
                                })}
                            />
                        </div>

                        <div className="w-2/6 flex flex-col">
                            <label htmlFor="section">SECTION</label>
                            <input 
                                type="text" 
                                name="section" 
                                id="section"
                                className="border border-gray-500 w-full h-8 px-2"
                                value={state.section}
                                onChange={(e) => dispatch({
                                    type:'section', 
                                    payload: e.target.value
                                })}
                            />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="bg-gray-500 py-2  md:py-3 px-8 md:px-12 text-md md:text-lg font-bold text-white rounded-full my-4 z-10"
                    >
                        REGISTER
                    </button>
                </form>

                
            </Background>
        </main>

    )
}