import * as React from 'react';
import Layout from '@/components/layout';

interface IMyPhotosProps {
}

const MyPhotos: React.FunctionComponent<IMyPhotosProps> = (props) => {
  return (
    <Layout>
      <div>My photo</div>
    </Layout>
  );
};

export default MyPhotos;
