export default function PricingMenu({ lang }) {

  return (
    <div>
    <iframe src="https://drive.google.com/file/d/1kvSkHUnAEmIkRwhFAAQQlebPU6VbWZA7/preview" style={{width:"100vw",height:"100vh"}} allow="autoplay"></iframe>
    </div>
  )
}

// const ItemPricingList = ({ item }) => {
//   return (
//     <>
//       <div className="pricing-5-category p5-top mb-4">
//         <h3>{item.name}</h3>
//       </div>
//       {/* HAIR TREATMENTS */}
//       <ul className="pricing-list">
//         {item.items.map((subItem, index) => (
//           <li className="pricing-5-item" key={index}>
//           <div className="detail-price">
//             <div className="price-name">
//               <p>{subItem.description}</p>
//             </div>
//             <div className="price-dots" />
//             <div className="price-number">
//             <p><sup style={{fontSize:'10px'}}>SAR</sup> {typeof subItem.price === 'number' ? subItem.price : subItem.price}</p>
//             </div>
//           </div>
//           <div className="price-txt">
//             <p>{subItem.subDesc != undefined ? `${subItem.subDesc}` : ''}</p>
//           </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
