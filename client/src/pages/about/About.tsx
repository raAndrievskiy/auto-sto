import React from "react";

import { TitleH2, TitleH4 } from "../../fields";
import { MainLayout } from "../../layouts";
import { Brands, Container } from "../../sharedComponent";
import { MakeItem, StaffItem } from "./components";
import { paths } from "./makeConfig";
import { pathsStaff } from "./staffConfig";
import sertificateImg from "../../assets/images/sertificate.png";
import quolityWorkImg from "../../assets/images/quolity-work.png";
import { CheckedIcon, LogoIcon } from "../../customIcons";
import patronImage from "../../assets/images/brands/patron.png";
import shateImage from "../../assets/images/brands/shate-logo.png";
import styles from "./styles.module.scss";

export const About = () => {
  return (
    <MainLayout>
      <div className={styles.internationalWrap}>
        <div className={styles.international}>
          <Container>
            <div className={styles.international__text}>
              <TitleH2>Международный проект сетевых СТО ЕвроАвтоСервис</TitleH2>
              <span>
                Проект ЕВРОАВТОСЕРВИС основан в 2010 году с целью создать по
                всей территории Республики Беларусь масштабную сеть СТО с
                европейским уровнем обслуживания.
              </span>
              <div className={styles.international__brands}>
                <LogoIcon width={212} heigth={88} />
                <img src={patronImage} alt="" />
                <img src={shateImage} alt="" />
              </div>
              <span>
                И сейчас мы с полной уверенностью можем сказать, что нам это
                удалось.
              </span>
              <TitleH2>
                И наша сеть СТО продолжает стремительно развиваться.
              </TitleH2>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className={styles.directionsWrap}>
          <TitleH2>Мы ведём деятельность в двух направлениях:</TitleH2>
          <div className={styles.directions}>
            <div className={styles.directions__item}>
              <TitleH4>ДЛЯ ВЛАДЕЛЬЦЕВ СТО</TitleH4>
              <span className="description">
                Предоставляем полный комплект услуг для эффективного развития
                бизнеса
                <span className={styles.descriptionBlue}>
                  по нашей франшизе.
                </span>
              </span>
            </div>

            <div className={styles.directions__item}>
              <TitleH4>ДЛЯ ВЛАДЕЛЬЦЕВ СТО</TitleH4>
              <span className="description">
                Создаём максимально комфортные условия технического обслуживании
                и ремонта автомобилей
                <span className={styles.descriptionBlue}>
                  в любой точке Беларуси.
                </span>
              </span>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.project__wrap}>
        <Container>
          <div className={styles.project}>
            <h1 className="title">
              <span className={styles.titleBlue}>
                Проект ЕВРОАВТОСЕРВИС часть
              </span>
              - глобальной международной концепции EUROGARAGE
            </h1>
            <div className={styles.project__description}>
              <span className="description">
                Белорусская сеть СТО EUROGARAGE принадлежит международной
                ассоциации поставщиков автозапчастей GroupAuto International.
              </span>
              <span className="description">
                Она объединяет более 4000 станций технического обслуживания по
                всему миру и пользуется заслуженным доверием автовладельцев, так
                как известна высоким уровнем квалификации сотрудников.
              </span>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <h1 className={styles.customTitle}>
          <span>ЕВРОАВТОСЕРВИС</span> – это высокий стандарт качества работ:
        </h1>
        <div className={styles.qualityWork}>
          <div className={styles.qualityWork__text}>
            <span>
              <CheckedIcon
                width={55}
                heigth={55}
                className={styles.checkedIcon}
              />
              Каждая СТО сети ЕВРОАВТОСЕРВИС поддерживает современный уровень
              технического оснащения диагностического и ремонтного оборудования.
            </span>
            <span>
              <CheckedIcon
                width={55}
                heigth={55}
                className={styles.checkedIcon}
              />
              Все партнеры сети ЕВРОАВТОСЕРВИС на высоком уровне владеют
              средствами диагностики и технологиями ремонта автомобилей.
            </span>
            <span>
              <CheckedIcon
                width={55}
                heigth={55}
                className={styles.checkedIcon}
              />
              Обслуживание и ремонтные работы выполняются со строгим соблюдение
              технических предписаний автопроизводителей.
            </span>
            <span>
              <CheckedIcon
                width={55}
                heigth={55}
                className={styles.checkedIcon}
              />
              При ремонте автомобилей используются запчасти только надёжных и
              проверенных производителей.
            </span>
          </div>
          <div className={styles.qualityWork__img}>
            <img src={quolityWorkImg} alt="" />
          </div>
        </div>
        <TitleH2>ЧТО МЫ ДЕЛАЕМ ДЛЯ ВАС?</TitleH2>
        <div className={styles.make}>
          {paths.map((item: any) => (
            <MakeItem key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.mission}>
          <h1 className={styles.mission_title__mob}>НАША МИССИЯ</h1>
          <div className={styles.mission__img} />
          <div className={styles.mission__text}>
            <TitleH2>НАША МИССИЯ</TitleH2>
            <span className="description">
              Миссия компании ЕвроАвтоСервис – обеспечение
              социально-экономической эффективности автомобиля, максимального
              использования заложенных в автомобиле возможностей с помощью
              реализации следующих требований:
            </span>
            <div className={styles.descriptionBlue}>
              <ol>
                <li>
                  Удовлетворение спроса на запасные части и приспособления к
                  автомобилю.
                </li>
                <li>
                  Удовлетворение спроса, связанного с технической эксплуатаций
                  автомобилей.
                </li>
                <li>
                  Удовлетворение спроса на информационное и программное
                  оснащение СТО.
                </li>
                <li>
                  Создание эффективной системы обеспечения безопасности движения
                  и устранения вредного влияния автомобиля на окружающую среду и
                  общество.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <h1 className={styles.customTitle}>Коротко о нашей сети СТО</h1>
        <div className={styles.STO} />
        <h1 className={styles.customTitle}>КЛЮЧЕВЫЕ СОТРУДНИКИ</h1>
        <div className={styles.staff}>
          {pathsStaff.map((item: any) => (
            <StaffItem key={item.id} item={item} />
          ))}
        </div>
        <h1 className={styles.customTitle}>ПАРТНЕРСКИЕ ПРОГРАММЫ</h1>
        <div className={styles.partnersProgram}>
          <img src={sertificateImg} alt="" />
          <img src={sertificateImg} alt="" />
          <img src={sertificateImg} alt="" />
          <img src={sertificateImg} alt="" />
          <img src={sertificateImg} alt="" />
          <img src={sertificateImg} alt="" />
        </div>

        <div className={styles.aboutBrands}>
          <Brands title={"Расширенные гарантии бренды"} />
          <span>И ЕЩЕ 25532 БРЕНДОВ</span>
        </div>
      </Container>
    </MainLayout>
  );
};
