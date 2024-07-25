import {
  mdiAccountBox,
  mdiCheckCircle,
  mdiMonitorCellphone,
  mdiTableBorder,
  mdiTableOff,
} from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement, useEffect, useState } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import CardBoxComponentEmpty from '../components/CardBox/Component/Empty'
import LayoutAuthenticated from '../layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import TableSampleClients from '../components/Table/SampleClients'
import { getPageTitle } from '../config'
import TableSampleAdminstators from '../components/Table/SampleAdministrator'
import axios from 'axios'
import { BubbleChat } from 'flowise-embed-react'

const TablesPage = () => {
  const [data, setData] = useState<any[]>([])
  const [selectedOption, setSelectedOption] = useState('guru')
  const [columns, setColumns] = useState<{ key: string; label: string }[]>([])
  const [dataMakanan, setDataMakanan] = useState<any[]>([])
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')

  const guruColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'createdAt', label: 'Created At' },
  ]

  const kelasColumns = [
    { key: 'id', label: 'ID' },
    { key: 'nama_kelas', label: 'Nama Kelas' },
    { key: 'name', label: 'Teacher Name' },
    { key: 'createdAt', label: 'Created At' },
  ]

  const makananColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nama Makanan' },
    { key: 'image', label: 'Gambar' },
    { key: 'price', label: 'harga' },
    { key: 'description', label: 'Deskripsi' },
    { key: 'start_date', label: 'Created-At' },
    { key: 'updatedAt', label: 'Updated-At' },
  ]

  const fetchData = async (option: string) => {
    try {
      const response = await axios.get(`http://localhost:5000/${option}`)
      const fetchedData = response.data

      if (option === 'kelas') {
        // Format data untuk guru
        const formattedData = fetchedData.map((item: any) => ({
          id: item.id,
          name: item.guru.name,
          nama_kelas: item.nama_kelas,
          createdAt: item.createdAt,
        }))
        setData(formattedData)
      } else if (option === 'guru') {
        setData(fetchedData)
      }

      // console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const fetchDataMakanan = async () => {
    try {
      const response = await axios.get('http://localhost:5000/makanan')
      // console.log(response)
      if (Array.isArray(response.data)) {
        setDataMakanan(response.data)
      } else {
        console.error('Unexpected data format:', response.data)
        setDataMakanan([]) // Set an empty array to avoid errors
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      setDataMakanan([]) // Set an empty array to avoid errors
    }
  }

  useEffect(() => {
    if (selectedOption === 'guru') {
      setColumns(guruColumns)
    } else if (selectedOption === 'kelas') {
      setColumns(kelasColumns)
    }
    fetchData(selectedOption)
    fetchDataMakanan()
  }, [selectedOption])

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
  }

  const handleUpdateData = (updatedData: any, type: string) => {
    if (type === 'makanan') {
      setDataMakanan((prevData) =>
        prevData.map((item) => (item.id === updatedData.id ? updatedData : item))
      )
    } else {
      setData((prevData) =>
        prevData.map((item) => (item.id === updatedData.id ? updatedData : item))
      )
    }
    showTemporaryNotification('Data updated successfully!')
  }

  const handleDelete = async (id: string, type: string) => {
    try {
      console.log(`Attempting to delete ${type} with id: ${id}`)
      const response = await axios.delete(`http://localhost:5000/${type}/${id}`)
      console.log('Delete response:', response)

      if (type === 'makanan') {
        setDataMakanan((prevData) => prevData.filter((item) => item.id !== id))
      } else {
        setData((prevData) => prevData.filter((item) => item.id !== id))
      }
      showTemporaryNotification('Data deleted successfully!')
    } catch (error) {
      console.error('Failed to delete data', error)
      alert('Failed to delete data')
    }
  }

  const showTemporaryNotification = (message: string) => {
    setNotificationMessage(message)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000) // Show notification for 3 seconds
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Tables')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiTableBorder} title="Mahasiswa" main>
          <Button
            href="https://github.com/Rullyhidayatullahfaizal/dashboard-gemoy"
            target="_blank"
            icon={mdiAccountBox}
            label="Trans-Paransi"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        <NotificationBar color="info" icon={mdiMonitorCellphone}>
          <b>Responsive table.</b> Collapses on mobile
        </NotificationBar>

        <CardBox className="mb-6" hasTable>
          <TableSampleClients apiUrl="users" />
        </CardBox>

        <div className="flex justify-between">
          <SectionTitleLineWithButton title="Administrasi Sekolah" />
          <select
            className="border-black px-8 hover:bg-red-400 font-semibold border-2 hover:text-white mt-7 rounded h-10"
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option value="guru">Guru</option>
            <option value="kelas">Kelas</option>
          </select>
        </div>

        <NotificationBar color="info" icon={mdiTableOff}>
          <b>Daftar-Administrasi Sekolah</b> Mohon&apos;digunakan dengan bijak
        </NotificationBar>

        <CardBox>
          <TableSampleAdminstators
            columns={columns}
            data={data}
            type={selectedOption}
            onUpdateData={handleUpdateData}
            onDelete={handleDelete}
          />
        </CardBox>

        <NotificationBar color="info" icon={mdiTableOff}>
          <b>Daftar-Makanan Sekolah</b> Mohon&apos;di Managed
        </NotificationBar>

        <CardBox>
          <TableSampleAdminstators
            columns={makananColumns}
            data={dataMakanan}
            type="makanan"
            onUpdateData={handleUpdateData}
            onDelete={handleDelete}
          />
        </CardBox>

        {showNotification && (
          <NotificationBar color="success" icon={mdiCheckCircle} fixed>
            {notificationMessage}
          </NotificationBar>
        )}

        <BubbleChat
          chatflowid="4d5f6294-ecfa-4c83-8c62-ebe33e757724"
          apiHost="http://localhost:3000"
          theme={{
            chatWindow: {
              title: 'General Data',
              footer: {
                textColor: '#303235',
                text: 'Gemoy',
                company: 'ChatBot',
                companyLink: 'https://flowiseai.com',
              },
            },
          }}
        />

        <CardBox>
          <CardBoxComponentEmpty />
        </CardBox>
      </SectionMain>
    </>
  )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage
