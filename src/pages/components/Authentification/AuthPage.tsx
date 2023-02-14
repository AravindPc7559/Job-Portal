import React, { useCallback, useState } from 'react'
import { IoArrowBackCircleSharp } from 'react-icons/io5'
import {
  AiOutlinePlus,
  AiFillEye,
  AiFillEyeInvisible,
  AiFillCloseCircle,
} from 'react-icons/ai'
import Image from 'next/image'

type Props = {}

type userDataType = {
  fullName: string
  email: string
  password: string
  dateOfBirth: string
  userName: string
  confirmPassword: string
  qualification: string
  skills: {
    item: string
  }[]
}

const AuthPage = (props: Props) => {
  // States
  const [toggleAuth, setToggleAuth] = useState(true)
  const [text, setText] = useState('')
  const [slides, setSlides] = useState(1)
  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState('')
  const [userData, setUserData] = useState<userDataType>({
    fullName: '',
    userName: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    qualification: '',
    skills: [],
  })
  // Functions

  const handleRegister = useCallback(() => {
    console.log('Register')
  }, [])

  const handleSkill = useCallback(
    (SingleSkill: string) => {
      setUserData({
        ...userData,
        skills: [
          ...userData.skills.filter((data) => data),
          { item: SingleSkill },
        ],
      })
      setText('')
    },
    [userData],
  )

  const handleRemoveSkill = useCallback(
    (SingleSkill: string) => {
      setUserData({
        ...userData,
        skills: [
          ...userData.skills.filter((data) => data.item !== SingleSkill),
        ],
      })
    },
    [userData],
  )

  const handleInputFunction = useCallback(
    (e: any) => {
      setUserData({ ...userData, [e.target.name]: e.target.value })
    },
    [userData],
  )

  // Elements

  // --->Register Form <---

  const registerElements = (
    <div className="w-full mt-4">
      {slides === 1 && (
        <>
          <div className="py-2">
            <label htmlFor="" className="ml-1 mb-1">
              FullName
            </label>
            <input
              onChange={handleInputFunction}
              name="fullName"
              value={userData.fullName}
              type="text"
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Name..."
            />
          </div>
          <div className="py-2">
            <label htmlFor="" className="ml-1 mb-1">
              Username
            </label>
            <input
              onChange={handleInputFunction}
              name="userName"
              defaultValue={userData.userName}
              type="text"
              className="focus:outline-none bg-gray-50 border border-green-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Username..."
            />
          </div>
          <div className="py-2">
            <label htmlFor="" className="ml-1 mb-1">
              Date Of Birth
            </label>
            <input
              onChange={handleInputFunction}
              name="dateOfBirth"
              type="date"
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Name..."
            />
          </div>
          <div className="py-2">
            <label htmlFor="" className="ml-1 mb-1">
              Email
            </label>
            <input
              onChange={handleInputFunction}
              name="email"
              type="email"
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Name..."
            />
          </div>
          <div className="py-2">
            <label htmlFor="" className="ml-1 mb-1">
              Password
            </label>
            <div className="flex gap-2 relative">
              <input
                onChange={handleInputFunction}
                name="password"
                type={
                  togglePasswordVisibility === 'password' ? 'text' : 'password'
                }
                className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Name..."
              />
              <button className="absolute top-[50%] right-4 -translate-y-[50%]">
                {togglePasswordVisibility === 'password' ? (
                  <AiFillEyeInvisible
                    className="text-xl"
                    onClick={() => setTogglePasswordVisibility('')}
                  />
                ) : (
                  <AiFillEye
                    className="text-xl"
                    onClick={() => setTogglePasswordVisibility('password')}
                  />
                )}
              </button>
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="" className="ml-1 mb-1">
              Confirm Password
            </label>
            <div className="flex gap-2 relative">
              <input
                onChange={handleInputFunction}
                name="confirmPassword"
                type={
                  togglePasswordVisibility === 'ConfirmPassword'
                    ? 'text'
                    : 'password'
                }
                className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Name..."
              />
              <button className="absolute top-[50%] right-4 -translate-y-[50%]">
                {togglePasswordVisibility === 'ConfirmPassword' ? (
                  <AiFillEyeInvisible
                    className="text-xl"
                    onClick={() => setTogglePasswordVisibility('')}
                  />
                ) : (
                  <AiFillEye
                    className="text-xl"
                    onClick={() =>
                      setTogglePasswordVisibility('ConfirmPassword')
                    }
                  />
                )}
              </button>
            </div>
          </div>
        </>
      )}
      {slides === 2 && (
        <div className="">
          <div className="py-2">
            <label htmlFor="" className="ml-1 mb-1">
              Qualification
              <span className="text-xs text-gray-400 ml-1">(Optional)</span>
            </label>
            <input
              onChange={handleInputFunction}
              name="qualification"
              type="Text"
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Qualification..."
            />
          </div>
          <div className="py-2">
            <label htmlFor="" className="ml-1 mb-1">
              Skills
            </label>
            <div className="flex gap-2 relative">
              <input
                onChange={(e) => setText(e.target.value)}
                value={text}
                name="skill"
                type="Text"
                className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add Your Skills..."
              />
              <button className="absolute top-[50%] right-4 -translate-y-[50%]">
                <AiOutlinePlus
                  className="text-xl"
                  onClick={() => handleSkill(text)}
                />
              </button>
            </div>
            {userData.skills.length > 0 && (
              <div className=" flex mt-5 flex-wrap gap-2">
                {userData.skills.map((skill: { item: string }, index) => (
                  <div
                    key={index}
                    className="bg-green-300 w-fit py-1 px-3 rounded-2xl flex"
                  >
                    <p>{skill.item}</p>
                    <AiFillCloseCircle
                      className="ml-1 cursor-pointer text-base mt-1"
                      onClick={() => handleRemoveSkill(skill.item)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="py-2">
            <label htmlFor="" className="ml-1 mb-1">
              Resume
            </label>
            <input
              type="file"
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="py-2">
            <label htmlFor="" className="ml-1 mb-1">
              Image
            </label>
            <input
              type="file"
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      )}
    </div>
  )

  // --->Login Form <---

  const LoginElements = (
    <div className="w-full mt-4">
      <div className="py-2">
        <label htmlFor="" className="ml-1 mb-1">
          Email
        </label>
        <input
          type="text"
          className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Your Name..."
        />
      </div>
      <div className="py-2">
        <label htmlFor="" className="ml-1 mb-1">
          Password
        </label>
        <input
          type="text"
          className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Your Name..."
        />
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid place-items-center p-6">
        <Image
          src={
            toggleAuth
              ? '/assets/images/Authentification/Login.jpg'
              : '/assets/images/Authentification/Register.jpg'
          }
          alt="Login Image"
          width={1000}
          height={1000}
          priority
          className="mix-blend-multiply cursor-auto"
        />
      </div>
      <div className="w-full md:min-h-[100vh] grid place-items-center p-6">
        {/* Login And Register Form  */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl p-6 dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h1 className="text-center text-2xl font-semibold -tracking-tight">
              Authentication
            </h1>
            {slides === 2 && (
              <div>
                <IoArrowBackCircleSharp
                  className="text-2xl ml-1 cursor-pointer"
                  onClick={() => setSlides(1)}
                />
              </div>
            )}
          </div>
          {toggleAuth ? LoginElements : registerElements}
          <div className="mt-5 flex justify-center">
            <div>
              {toggleAuth ? (
                <button className="py-2 px-9 rounded-md font-medium bg-blue-500 hover:bg-blue-600 hover:text-white">
                  Submit
                </button>
              ) : (
                <button
                  className="py-2 px-9 rounded-md font-medium bg-blue-500 hover:bg-blue-600 hover:text-white"
                  onClick={
                    slides !== 2 ? () => setSlides(slides + 1) : handleRegister
                  }
                >
                  {slides !== 2 ? 'Continue' : 'Submit'}
                </button>
              )}
              <p
                className="text-sm mt-2 cursor-pointer"
                onClick={() => {
                  setToggleAuth(!toggleAuth)
                }}
              >
                {toggleAuth
                  ? 'Create a new account'
                  : 'Already have an account.'}
              </p>
            </div>
          </div>
        </div>
        {/* Login And Register Form  */}
      </div>
    </div>
  )
}

export default AuthPage
