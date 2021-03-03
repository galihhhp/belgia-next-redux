import Head from 'next/head';

const Title = ({ label }) => {
  return (
    <Head>
      <title>{label}</title>
    </Head>
  );
};

export default Title;
