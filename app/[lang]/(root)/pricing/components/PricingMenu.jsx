import { pricingAr, pricingEn } from "@/constants";

export default function PricingMenu({ lang }) {

  const pricing = lang === "en" ? pricingEn : pricingAr 

  return (
  <div className="pt-8 pricing-5 pricing-section division">
  <div className="container">
    {/* PRICING-5 WRAPPER */}
    <div className="pricing-5-wrapper">
      <div className="row">
        {/* PRICING-5 TABLE */}
        <div className="col-lg-6">
          <div className="pricing-5-table left-column">
            <ItemPricingList item={pricing.categories[0]} />
            <br />
            <hr />
            <ItemPricingList item={pricing.categories[2]} />
            <br />
            <hr />
            <ItemPricingList item={pricing.categories[4]} />
            <br />
            <hr />
            <ItemPricingList item={pricing.categories[3]} />

          </div>
        </div>{" "}
        {/* END PRICING-1 TABLE */}
        {/* PRICING-1 TABLE */}
        <div className="col-lg-6">
          <div className="pricing-5-table right-column">
            <ItemPricingList item={pricing.categories[1]} />
            <br />
            <hr />
            <ItemPricingList item={pricing.categories[5]} />
            <br />
            <hr />
            <ItemPricingList item={pricing.categories[7]} />
            <br />
            <hr />
            <ItemPricingList item={pricing.categories[6]} />

          </div>
        </div>{" "}
        {/* END PRICING-1 TABLE */}
      </div>
    </div>{" "}
    {/*END  PRICING-1 WRAPPER */}
    {/* BUTTON */}
    <div className="row">
      <div className="col">
        <div className="more-btn mt-6">
          <a href={'/booking'} className="btn btn--tra-black hover--black">
            Book Online
          </a>
        </div>
      </div>
    </div>{" "}
    {/* END BUTTON */}
  </div>{" "}
  {/* End container */}
</div>

  )
}

const ItemPricingList = ({ item }) => {
  return (
    <>
      <div className="pricing-5-category p5-top mb-4">
        <h3>{item.name}</h3>
      </div>
      {/* HAIR TREATMENTS */}
      <ul className="pricing-list">
        {item.items.map((subItem, index) => (
          <li className="pricing-5-item" key={index}>
          <div className="detail-price">
            <div className="price-name">
              <p>{subItem.description}</p>
            </div>
            <div className="price-dots" />
            <div className="price-number">
            <p><sup style={{fontSize:'10px'}}>SAR</sup> {typeof subItem.price === 'number' ? subItem.price : subItem.price}</p>
            </div>
          </div>
          <div className="price-txt">
            <p>{subItem.subDesc != undefined ? `${subItem.subDesc}` : ''}</p>
          </div>
          </li>
        ))}
      </ul>
    </>
  );
};
