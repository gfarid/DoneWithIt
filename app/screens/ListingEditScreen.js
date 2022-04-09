
import React from "react";
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import * as Yup from 'yup';
import AppFormPicker from '../components/forms/AppFormPicker';
import { View } from 'react-native';
import CategoryPickerItem from '../components/CategorypPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';
import listingApi from '../api/listings';
import UploadScreen from "./UploadScreen";
import { useState } from "react/cjs/react.development";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().min(1).max(10000).required().label('Price'),
    category:Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description'),
    images: Yup.array().min(1,'please selct at least one image.')
});

const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
];
 
function ListingEditScreen({}) {
    const location = useLocation();
    const [uploadVisible , setUploadVisible] = useState(false);
    const [ progress , setProgress] = useState(0);

    const handleSubmit = async (listing , { resetForm})=>{
      setProgress(0);
      setUploadVisible(true);
      const res = await listingApi.addListing({...listing , location} , progress => setProgress(progress));

      if(!res.ok){
        setUploadVisible(false);
        return alert(`couldn't save listing on server!`);
      }
      // alert('success!!');
      resetForm();
    }

    return (
        <View style={{padding: 10}}>
        <UploadScreen progress={progress} visible={uploadVisible} onDone={()=>setUploadVisible(false)}/>  
        <AppForm
        initialValues={{
            title:'',
            price: '',
            category:null,
            description:'',
            images:[]
        }} 
        onSubmit={handleSubmit} 
        validationSchema={validationSchema}
        >
            <FormImagePicker name='images' />
            <AppFormField name='title' maxLength={255} placeholder='Title'/ >
            <AppFormField name='price' width={120} keyboardType='numeric' maxLength={8} placeholder='Price'/ >
            <AppFormPicker name='category' width='50%' items={categories} placeholder='Category' PickerItemComponent={CategoryPickerItem} numberOfColumns={3}/>
            <AppFormField name='description' maxLength={255} multiline numberOfLines={3} placeholder='Description'/ >
            <SubmitButton title='Post'/>
        </AppForm>
        </View>
    );
}

export default ListingEditScreen;