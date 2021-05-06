import AskUs from '../AboutUs/AskUs';
import s from './Services.module.css';
import mainPhoto from '../images/construction.jpg';
import photo1 from '../images/construction/photo1.jpg';
import photo2 from '../images/construction/photo2.jpg';
import photo3 from '../images/construction/photo3.jpg';
import photo4 from '../images/construction/photo4.jpg';
import photo5 from '../images/construction/photo5.jpg';
import photo6 from '../images/construction/photo6.jpg';

export default function Construction() {
  return (
    <div className={s.supervisionDiv}>
      <div className={s.firstBlock}>
        <div className={s.textBlock}>
          <h2 className={s.title}>Construction</h2>
          <p className={s.text}>
            With our service and products, we satisfy the demands of different
            industrial segments such as: metallurgy, cement, glass production
            and chemical industry, etc. We boast vast experience in the
            production of bridge structures, lifting equipment and related
            structures, furnaces, industrial air treatment systems including
            dedusting systems, pressure vessels and boilers, chimneys and ducts.
            The production workshops of our partners are all certified in
            accordance with the requirements of European standards EN 1090-1, EN
            1090-2, ISO 3834-2, OHSAS 18001:2010, ISO 9001:2009.
          </p>
          <p className={s.text}>
            Each workshop carries out the following processes:
          </p>
          <ul className={s.listOfItems}>
            <li>Control of incoming raw materials and consumables;</li>
            <li>Operational control and product testing;</li>
            <li>
              Quality control testing and acceptance on finished products;
            </li>
            <li>Final testing and inspection certificate.</li>
          </ul>
        </div>
        <img src={mainPhoto} alt="" className={s.photo} />
      </div>

      <div className={s.supervisionPhotos}>
        <ul className={s.listOfImages}>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo1}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo2}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo3}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo4}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo5}
              alt="construction"
            />
          </li>
          <li className={s.itemsOfImages}>
            <img
              className={s.imagesForServices}
              src={photo6}
              alt="construction"
            />
          </li>
        </ul>
      </div>

      <AskUs />
    </div>
  );
}
