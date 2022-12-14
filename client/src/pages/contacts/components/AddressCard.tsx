import React from 'react';
import {getMapSize} from '../../../helpers/getMapSize';
import {useWindowResize} from '../../../hooks/useWindowResize';
import {AddressMap} from '../../../sharedComponent/maps/types';
import {TitleH4, TitleH2, CustomButton} from '../../../fields'
import style from '../style.module.scss'
import {typeButton} from '../../../fields/types';

export const AddressCard = (
    {
        adderess,
        lng,
        lat,
        city,
        name,
        country,
        franshes,
        phone,
        email,
        workTime
    }: AddressMap) => {
    const {size, height} = useWindowResize();
    const mapSize = getMapSize(size)

    return (
        <div className={style.card} style={{
            width: `485px`,
            height: size < 1450 ? '490px' : `590px`
        }}>
            <TitleH2>{name}</TitleH2>
            <address className={style.card__address}>{adderess}</address>
            <div className={style.card__inner}>
                <div className={style.card__box}>
                    <TitleH4>Телефон</TitleH4>
                    <p className={style.card__text}>{phone}</p>
                </div>
                <div className={style.card__box}>
                    <TitleH4>Режим работы</TitleH4>
                    <p className={style.card__text}>{workTime}</p>
                </div>
                {email?.length ? (
                    <div className={style.card__box}>
                        <TitleH4>E-mail</TitleH4>
                        <p className={style.card__text}>{email}</p>
                    </div>
                ) : null}
            </div>
            <div className={style.card__wrapButton}>
                <CustomButton
                    color={'blue'}
                    type={typeButton.small}
                >Запись на СТО</CustomButton>
            </div> 
        </div>
    );
};

