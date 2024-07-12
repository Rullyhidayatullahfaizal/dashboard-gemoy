import { mdiAccountBox, mdiMonitorCellphone, mdiTableBorder, mdiTableOff } from '@mdi/js'
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

const TablesPage = () => {
  const [data, setData] = useState<any[]>([])
  const [selectedOption, setSelectedOption] = useState('guru')
  const [columns, setColumns] = useState<{ key: string; label: string }[]>([])

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

  const fetchData = async (option: string) => {
    try {
      const response = await axios.get(`http://localhost:5000/${option}`)
      const fetchedData = response.data

      if (option === 'kelas') {
        // Format data untuk guru
        const formattedData = fetchedData.map((item: any) => ({
          id: item.id,
          name: item.guru.name,
          nama_kelas:item.nama_kelas,
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

  useEffect(() => {
    if (selectedOption === 'guru') {
      setColumns(guruColumns)
    } else if (selectedOption === 'kelas') {
      setColumns(kelasColumns)
    }
    fetchData(selectedOption)
  }, [selectedOption])

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
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
        
        <div className='flex justify-between'>
          <SectionTitleLineWithButton title="Administrasi Sekolah" />
          <select 
            className='border-black px-8 hover:bg-red-400 font-semibold border-2 hover:text-white mt-7 rounded h-10' 
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
          <TableSampleAdminstators columns={columns} data={data} />
        </CardBox>

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
