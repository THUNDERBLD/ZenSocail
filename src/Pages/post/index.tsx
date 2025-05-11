import * as React from 'react';
import { useState } from 'react';
import Layout from '@/components/layout';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import FileUploader from '@/components/fileUploader';
import { UseUserAuth } from '@/context/userAuthContext';
import { FileEntry, PostInterface } from '@/types';

interface IPostProps {
}

const Post: React.FunctionComponent<IPostProps> = () => {
  const { user } = UseUserAuth();
  const [fileEntry, setFileEntry] = useState<FileEntry>({
    files: [],
  });
  const [post, setPost] = useState<PostInterface>({
    caption: '',
    photo: [],
    likes: 0,
    userLikes: [],
    userId: null,
    date: new Date(),
  });

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Upload File Entry : ', fileEntry.files);
    console.log('Created Post : ', post);
  }

  return (
    <Layout>
      <div className='flex jsustify-center'>
        <div className='max-w-3xl shadow-lg rounded w-full'>

          <h3 className='bg-slate-800 text-white text-center text-lg p-2'>
            <span className='font-bold'>Create a Post</span>  
          </h3>

          <div className='p-8'>
            <form onSubmit={handleSubmit} action="">
              <div className='flex flex-col'>
                <label htmlFor="caption" className='mb-4 text-sm font-semibold'>Photo Caption</label>
                <Textarea 
                  id='caption' 
                  className='mb-8 rounded' 
                  placeholder="What's in your photo!" 
                  value={post.caption} 
                  onChange={(e) => setPost({ ...post, caption: e.target.value })}
                />
                <div className='flex flex-col'>
                  <label htmlFor="photo" className='mb-4 text-sm font-semibold'>Upload Photo</label>
                  <FileUploader fileEntry={fileEntry} onChange={setFileEntry} />
                </div>
                <Button className='mt-4 w-32 text-white' type='submit'>Post</Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Post;
