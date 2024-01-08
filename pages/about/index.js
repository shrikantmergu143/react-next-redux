/* eslint-disable react-hooks/rules-of-hooks */
import DefaultLayout from '@/components/common/DefaultLayout';
import Utils from '@/components/utils';
import Head from 'next/head';
import React from 'react'

export default function index(props) {
    return (
    <DefaultLayout>
    </DefaultLayout>
  )
}
export async function getServerSideProps() {
  const title = 'About us title';
  const description = 'About us description';
  const RootEnv = Utils.getCommonEnv(process?.env);
  return {
    props: {
      title:title,
      description:description,
      env:JSON.stringify(RootEnv),
    },
  };
}