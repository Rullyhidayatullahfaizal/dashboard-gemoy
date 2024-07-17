import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useRouter } from "next/router"
import FormField from "../Form/Field"
import Divider from "../Divider"
import Buttons from "../Buttons"
import Button from "../Button"


const GuruForm = () => {
    const router = useRouter()
  
    return (
      <Formik
        initialValues={{
          id: '',
          name: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await axios.post('http://localhost:5000/guru', values)
            router.push('/tables') // Redirect to /table after successful submission
          } catch (error) {
            console.error(error)
            alert('Failed to submit form')
          } finally {
            setSubmitting(false)
          }
        }}
      >
        <Form>
          <FormField label="ID">
            <Field name="id" placeholder="79" />
          </FormField>
  
          <FormField label="Nama">
            <Field name="name" placeholder="Coach Justin" />
          </FormField>
  
          <Divider />
  
          <Buttons>
            <Button type="submit" color="info" label="Submit" />
            <Button type="reset" color="info" outline label="Reset" />
          </Buttons>
        </Form>
      </Formik>
    )
  }

export default GuruForm