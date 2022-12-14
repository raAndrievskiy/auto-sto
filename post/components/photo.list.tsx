import React from 'react'
import {Box, BasePropertyProps} from '@adminjs/design-system'

const styles = {
    wrap: {
        width: '50px',
        height: '50px',
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center center'
    }
}

const List: React.FC<BasePropertyProps> = (props) => {
    const {record} = props;
    console.log('list', record.params)
    const srcImg = record.params['profilePhotoLocation']

    console.log(record)
    return (
        <Box>
            {srcImg ? (
                <div style={styles.wrap}>
                    <img style={styles.img} src={srcImg}/>
                </div>
            ) : 'no image'}
        </Box>
    )
}

export default List
