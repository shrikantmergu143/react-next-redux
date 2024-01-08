import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import SeoMetaData from '@/components/common/SeoMetaData'
import DefaultLayout from '@/components/common/DefaultLayout'
import Utils from '@/components/utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const donationBannerPosition = useSelector((state) => state?.allReducers?.donationBannerPosition);

  return (
    <DefaultLayout {...props} >
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <Link
              href={"login"}
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </Link>
          </div>
        </div>
      </main>
    </DefaultLayout>
  )
}
export async function getServerSideProps() {
  const title = 'Home Page';
  const description = 'Home Page description';
  const RootEnv = Utils.getCommonEnv(process?.env);
  return {
    props: {
      title:title,
      description:description,
      env:JSON.stringify(RootEnv),
    },
  };
}