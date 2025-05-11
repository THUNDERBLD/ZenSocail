import * as React from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import { FileEntry } from '@/types';

interface IFileUploaderProps {
    fileEntry: FileEntry;
    onChange: (fileEntry: FileEntry) => void;
}

const FileUploader: React.FunctionComponent<IFileUploaderProps> = ({fileEntry, onChange}) => {
  return (
    <div>
      <FileUploaderRegular
         sourceList="local, camera, facebook, gdrive"
         classNameUploader="uc-dark"
         pubkey="a233c674aded6c582db9"
      />
    </div>
  );
};

export default FileUploader;
