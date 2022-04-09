import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import { ErrorMessage } from '.';

function AppFormPicker({ name , items , placeholder, PickerItemComponent, numberOfColumns}) {
    const { errors , setFieldValue , touched , values } = useFormikContext();
    return (
        <>
        <AppPicker 
        items={items} 
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder} 
        numberOfColumns={numberOfColumns}
        onSelectItem={(item)=> setFieldValue(name, item)}
        selectedItem={values[name]}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;