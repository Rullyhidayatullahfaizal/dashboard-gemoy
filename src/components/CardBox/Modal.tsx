import { mdiClose } from '@mdi/js'
import { ReactNode } from 'react'
import type { ColorButtonKey } from '../../interfaces'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBox from '.'
import CardBoxComponentTitle from './Component/Title'
import OverlayLayer from '../OverlayLayer'
import { Field, Form, Formik } from 'formik'
import FormField from '../Form/Field'
import Divider from '../Divider'

type Props = {
  title: string
  buttonColor: ColorButtonKey
  buttonLabel?: string
  isActive: boolean
  children?: ReactNode
  onConfirm: () => void
  onCancel?: () => void
  type?: string 
  data?: any
}

const CardBoxModal = ({
  title,
  buttonColor,
  buttonLabel,
  isActive,
  onConfirm,
  onCancel,
  type,
  data,
  
}: Props) => {
  if (!isActive) {
    return null
  }

  const footer = (
    <Buttons className=''>
      <Button label={buttonLabel} color={buttonColor} onClick={onConfirm} />
      {!!onCancel && <Button label="Cancel" color={buttonColor} outline onClick={onCancel} />}
    </Buttons>
  )

  const renderForm = () => {
    switch (type) {
      case 'guru':
        return (
          <Formik
            initialValues={{
              id: data?.id || '',
              name: data?.name || '',
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                // await axios.post('http://localhost:5000/guru', values)
                // router.push('/tables') // Redirect to /table after successful submission
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
      case 'kelas':
        return (
          <Formik
            initialValues={{
              id: data?.id || '',
              nama_kelas: data?.nama_kelas || '',
              teacher_name: data?.name || '',
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                // await axios.post('http://localhost:5000/kelas', values)
                // router.push('/tables') // Redirect to /table after successful submission
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
                <Field name="id" placeholder="123" />
              </FormField>
      
              <FormField label="Nama Kelas">
                <Field name="nama_kelas" placeholder="Nama Kelas" />
              </FormField>
      
              <FormField label="Wali Kelas">
                <Field name="teacher_name" placeholder="Nama Wali Kelas" />
              </FormField>
      
              <Divider />
      
              <Buttons>
                <Button type="submit" color="info" label="Submit" />
                <Button type="reset" color="info" outline label="Reset" />
              </Buttons>
            </Form>
          </Formik>
        )
      case 'makanan':
        return (
          <Formik
            initialValues={{
              id: data?.id || '',
              name: data?.name || '',
              price: data?.price || '',
              description: data?.description || '',
              image: data?.image || '',
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                // await axios.post('http://localhost:5000/makanan', values)
                // router.push('/tables') // Redirect to /table after successful submission
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
                <Field name="id" placeholder="123" />
              </FormField>
      
              <FormField label="Nama Makanan">
                <Field name="name" placeholder="Nama Makanan" />
              </FormField>
      
              <FormField label="Harga">
                <Field name="price" placeholder="Harga" />
              </FormField>
      
              <FormField label="Deskripsi">
                <Field name="description" placeholder="Deskripsi" />
              </FormField>
      
              <FormField label="Gambar">
                <Field name="image" placeholder="Upload Gambar" />
              </FormField>
      
              <Divider />
      
              <Buttons>
                <Button type="submit" color="info" label="Submit" />
                <Button type="reset" color="info" outline label="Reset" />
              </Buttons>
            </Form>
          </Formik>
        )
      default:
        return null
    }
  }

  return (
    <OverlayLayer onClick={onCancel} className={onCancel ? 'cursor-pointer' : ''}>
      <CardBox
        className={`transition-transform shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50`}
        isModal
        footer={footer}
      >
        <CardBoxComponentTitle title={title}>
          {!!onCancel && (
            <Button icon={mdiClose} color="whiteDark" onClick={onCancel} small roundedFull />
          )}
        </CardBoxComponentTitle>

        <div className="space-y-3">{renderForm()}</div>  
        {/* <div className="space-y-3">{children}</div> */}
      </CardBox>
    </OverlayLayer>
  )
}

export default CardBoxModal
