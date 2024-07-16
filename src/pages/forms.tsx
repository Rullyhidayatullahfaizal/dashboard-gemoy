import { mdiAccount, mdiBallotOutline, mdiGithub, mdiMail, mdiUpload } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement, useState } from 'react'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import Divider from '../components/Divider'
import CardBox from '../components/CardBox'
import FormCheckRadio from '../components/Form/CheckRadio'
import FormCheckRadioGroup from '../components/Form/CheckRadioGroup'
import FormField from '../components/Form/Field'
import FormFilePicker from '../components/Form/FilePicker'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitle from '../components/Section/Title'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import axios from 'axios'
import { useRouter } from 'next/router'

const MakananForm = () => {
  const router = useRouter(); // Jika menggunakan React Router v6

  return (
    <Formik
      initialValues={{
        name: '',
        price: '',
        description: '',
        start_date:"2024-07-16",
        end_date:"2024-07-16",
        image: null, // Menyimpan file gambar
      }}
      onSubmit={async (values:any, { setSubmitting }) => {
        try {
          // Menggunakan FormData untuk mengirim file gambar
          const formData = new FormData();
          formData.append('name', values.name);
          formData.append('price', values.price);
          formData.append('description', values.description);
          formData.append("start_date", values.start_date);
          formData.append("end_date", values.end_date);
          formData.append('image', values.image); // Menambahkan file gambar ke FormData

          console.log('Submitting form with values:', values);
          console.log('FormData content:', formData.get('image'));

          const response = await axios.post('http://localhost:5000/makanan', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          alert(JSON.stringify(response.data, null, 2));
          router.push('/tables'); 
        } catch (error) {
          console.error(error);
          alert('Gagal mengirim formulir');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({  setFieldValue }) => (
        <Form>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Nama makanan">
              <Field name="name" placeholder="Nama makanan" />
            </FormField>
            <FormField label="Harga">
              <Field name="price" placeholder="Rp...." />
            </FormField>
          </div>

          <FormField label="Deskripsi" hasTextareaHeight>
            <Field name="description" as="textarea" placeholder="Deskripsi makanan ...." />
          </FormField>

          <FormField>
            {/* FormFilePicker untuk memilih file gambar */}
            <Field
              name="image"
              component={FormFilePicker}
              label="Upload Image"
              color="info"
              icon={mdiUpload}
              accept="image/*"
            />
          </FormField>

          <Divider />

          <Buttons>
            <Button type="submit" color="info" label="Submit"  />
            <Button type="reset" color="info" outline label="Reset" />
          </Buttons>
        </Form>
      )}
    </Formik>
  );
};

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

const FormsPage = () => {
  const [selectedOption, setSelectedOption] = useState('makanan')

  const renderForm = () => {
    switch (selectedOption) {
      case 'makanan':
        return <MakananForm />
      case 'kelas':
        return <KelasForm />
      case 'guru':
        return <GuruForm />
      default:
        return <MakananForm />
    }
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Forms')}</title>
      </Head>

      <SectionMain>
        <div className="flex justify-between mx-5">
          <SectionTitleLineWithButton title="Input Form" main />
          <select
            className="border-black px-8 hover:bg-red-400 font-semibold border-2 hover:text-white mt-3  ml-10 rounded h-10"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="makanan">makanan</option>
            <option value="kelas">Kelas</option>
            <option value="guru">guru</option>
          </select>
        </div>

        <CardBox>{renderForm()}</CardBox>
      </SectionMain>

      <SectionTitle>Custom elements</SectionTitle>

      <SectionMain>
        <CardBox>
          <Formik
            initialValues={{ checkboxes: ['lorem'], switches: ['lorem'], radio: 'lorem' }}
            onSubmit={() => null}
          >
            <Form>
              <FormField label="Checkbox">
                <FormCheckRadioGroup>
                  <FormCheckRadio type="checkbox" label="Lorem">
                    <Field type="checkbox" name="checkboxes" value="lorem" />
                  </FormCheckRadio>
                  <FormCheckRadio type="checkbox" label="Ipsum">
                    <Field type="checkbox" name="checkboxes" value="ipsum" />
                  </FormCheckRadio>
                  <FormCheckRadio type="checkbox" label="Dolore">
                    <Field type="checkbox" name="checkboxes" value="dolore" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>

              <Divider />

              <FormField label="Radio">
                <FormCheckRadioGroup>
                  <FormCheckRadio type="radio" label="Lorem">
                    <Field type="radio" name="radio" value="lorem" />
                  </FormCheckRadio>
                  <FormCheckRadio type="radio" label="Ipsum">
                    <Field type="radio" name="radio" value="ipsum" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>

              <Divider />

              <FormField label="Switch">
                <FormCheckRadioGroup>
                  <FormCheckRadio type="switch" label="Lorem">
                    <Field type="checkbox" name="switches" value="lorem" />
                  </FormCheckRadio>
                  <FormCheckRadio type="switch" label="Ipsum">
                    <Field type="checkbox" name="switches" value="ipsum" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>
            </Form>
          </Formik>
          <Divider />
          <FormField>
            <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
          </FormField>
        </CardBox>
      </SectionMain>
    </>
  )
}

FormsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default FormsPage
