import React, { useState } from 'react';
import groq from 'groq';
import { client } from '~/sanity-client';
import { ProofPage, AuthForm } from '~/components';
import { WorkProject } from '~/lib';
import { useEffectOnce } from 'react-use';
import { getCookie, setCookie } from 'cookies-next';

const PASSWORD = process.env.NEXT_PUBLIC_ROUTE_PASSWORD;

export async function getStaticProps(): Promise<{
  props: { data: WorkProject[]; password: string };
}> {
  try {
    const data = await client.fetch(
      groq`*[_type == "proof-of-work"]{_id, name, description, previewImage, url, technologies, featuredTechnologies, context}`
    );

    const password = PASSWORD as string;
    return { props: { data, password } };
  } catch (error) {
    console.error('Error while fetching static props', error);
    return { props: { data: [], password: '' } };
  }
}

type ProofOfWorkProps = {
  data: WorkProject[];
  password: string;
};
export default function ProofOfWork({ data, password }: ProofOfWorkProps) {
  const [authenticated, setAuthenticated] = useState(false);
  useEffectOnce(() => {
    const authToken = getCookie('authToken');
    if (authToken === password) {
      setAuthenticated(true);
    }

    // const input = prompt('Enter password');
    // if (input === password) {
    //   setAuthenticated(true);
    // }
  });
  return (
    <>
      {!authenticated ? (
        <AuthForm password={password} setAuthenticated={setAuthenticated} />
      ) : (
        <ProofPage data={data} />
      )}
    </>
  );
}
