import React from 'react'
import {Label, Box, DropZone, DropZoneItem, DropZoneProps} from '@adminjs/design-system'
import {BasePropertyProps} from "adminjs";

const Edit: React.FC<BasePropertyProps> = (props) => {
    const {property, record, onChange} = props;

    const onUpload: DropZoneProps['onChange'] = (files: any) => {
        if (onChange) {
            onChange(property.name, files[0])
        }
    }

    const uploadedPhoto = record?.params.uploadImage;
    const photoToUpload = record?.params[property.name]
    return (
        <Box>
            <Label>{property.label}</Label>
            <DropZone onChange={onUpload}/>
            {uploadedPhoto && !photoToUpload && (
                <DropZoneItem src={uploadedPhoto}/>
            )}
        </Box>
    )
}

export default Edit
