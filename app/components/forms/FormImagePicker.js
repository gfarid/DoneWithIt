import { useFormikContext } from 'formik';
import React from 'react';
import { ErrorMessage } from '.';
import ImageInputList from '../ImageInputList';

function FormImagePicker({ name }) {
    const { errors , setFieldValue , touched , values } = useFormikContext();
    const imageUris = values[name];
    
    const handleAddImage = (uri) => {
        setFieldValue(name , [...imageUris , uri]);
      };

      const handleRemoveImage = (uri)=> {
        setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri))
      }

 return (
     <>
     <ImageInputList imageUris={ imageUris} onAddImage={handleAddImage} onRemoveImage={handleRemoveImage}/>
     <ErrorMessage error={errors[name]} visible={touched[name]}/>
     </>
 );
}


export default FormImagePicker;