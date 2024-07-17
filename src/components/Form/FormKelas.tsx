import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useRouter } from "next/router"
import FormField from "../Form/Field"
import Divider from "../Divider"
import Buttons from "../Buttons"
import Button from "../Button"


const KelasForm = () => {
    const router = useRouter()
    return (
      <Formik
        initialValues={{
          nama_kelas: '',
          nama_walikelas: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await axios.post('http://localhost:5000/kelas', values)
            router.push('/tables')
          } catch (error) {
            console.log(error)
          } finally {
            setSubmitting(false)
          }
        }}
      >
        
          <Form>
            <FormField label="Nama Kelas">
              <Field name="nama_kelas" placeholder="Pancasila" />
            </FormField>
  
            <FormField label="Wali Kelas">
              <Field name="nama_walikelas" placeholder="coach justin" />
            </FormField>
  
            <Divider />
  
            <Buttons>
              <Button type="submit" color="info" label="Submit"  />
              <Button type="reset" color="info" outline label="Reset" />
            </Buttons>
          </Form>
        
      </Formik>
    )
  }
  
export default KelasForm