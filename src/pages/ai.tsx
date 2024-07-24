import Head from 'next/head'
import { getPageTitle } from '../config'
import SectionMain from '../components/Section/Main'
import { mdiWebBox } from '@mdi/js'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'

const AiPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Artificial intelligence')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiWebBox}
          title="Artificial intelligence"
          main
        ></SectionTitleLineWithButton>
        <div className='bg-black h-screen'>
            <p>testing</p>
        </div>
      </SectionMain>
    </>
  )
}

AiPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
  }

export default AiPage
