import {useState} from "react"

import {
  CustomHomeContainer,
  CustomSecondContainer,
  Heading,
  Para,
  CustomInput,
  ParaRed
} from './styledComponents'

const PasswordValidator = () => {

const [current,setValue] = useState("")

const onChangeInput = (event) => {
setValue(event.target.value)
}

const is8Characters = current.length >= 8 ? "" : "Your password must be at least 8 characters"

  return (
    <CustomHomeContainer>
      <CustomSecondContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <CustomInput type="password" onChange={onChangeInput}/>
        <ParaRed>{is8Characters}</ParaRed>
      </CustomSecondContainer>
    </CustomHomeContainer>
  )
}
export default PasswordValidator
