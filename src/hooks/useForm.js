// write your custom hook here to control your checkout form
import { useState } from "react"

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
}
const useForm = (initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(null)
  const [values, setValues] = useState(initialValue)

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return [values, handleChanges, showSuccessMessage, setShowSuccessMessage]
}

export default useForm
