import React, { useState } from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import ReactImagePickerEditor, {
  ImagePickerConf,
} from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'

 export function ImgPicker({ title }: { title: string }) {

  const config: ImagePickerConf = {
    borderRadius: '8px',
    language: 'en',
    width: '200px',
    height: '150px',
    objectFit: 'contain',
    compressInitial: null,
  };

  const [imageSrc, setImageSrc] = useState<string | null | undefined>('');
  const initialImage = '';

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Image Picker Sample</Typography>

      <Box sx={{ p: 4 }}>
        <ReactImagePickerEditor
          config={config}
          imageSrcProp={initialImage}
          imageChanged={(newDataUri: any) => { setImageSrc(newDataUri) }}
        />
      </Box>

      <Box sx={{ p: 4 }}>
      {imageSrc && (
        <>
          <Typography variant="h6" gutterBottom>Image Preview (Actual size)</Typography>

          <Paper elevation={3}>
            <Box sx={{ p: 2 }}>
              <img
                  src={imageSrc}
                  alt="example"
                  style={{
                    maxHeight: '900px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    background: 'black',
                  }}
                />
            </Box>
          </Paper>
        </>

        )}
        {!imageSrc && (
          <Alert severity="warning">No image loaded yet</Alert>
        )}
      </Box>
    </Box>
  );
}

export default ImgPicker;
