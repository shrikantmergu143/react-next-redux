/* eslint-disable react-hooks/rules-of-hooks */
import DefaultLayout from '@/components/common/DefaultLayout';
import Utils from '@/components/utils';
// import SeoMetaData from '@/components/common/SeoMetaData';
import React from 'react'

export default function login(props) {
    // const donationBannerPosition = useSelector((state) => state?.allReducers?.donationBannerPosition);

    return (
    <DefaultLayout {...props} >

    </DefaultLayout>
  )
}
export async function getServerSideProps() {
  // Fetch data from Redux store or API to set dynamic meta tags
  const title = 'Your dynamic title';
  const description = 'Your dynamic description';

  const RootEnv = Utils.getCommonEnv(process?.env);
  return {
    props: {
      title:title,
      description:description,
      env:JSON.stringify(RootEnv),
    },
  };
}