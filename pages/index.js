import React from 'react'
import Head from '../components/head'
import Page from '../components/page';
import Header from '../components/header';
import Welcome from '../components/welcome';

const Home = () => (
  <div>
    <Head title="Home" />
    <Page >
      <Header />
      <Welcome />
    </Page>
  </div>
)

export default Home
