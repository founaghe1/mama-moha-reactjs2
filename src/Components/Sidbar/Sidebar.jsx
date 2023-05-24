// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaShoppingCart, FaWallet, FaUserAlt } from "react-icons/fa";
// import { MdDashboard, MdOutlineFavorite, MdInsights } from "react-icons/md";
// import { AiTwotoneSetting } from "react-icons/ai";
// // import Contenu from "../contenu/Contenu";
// // import Logo from "../../image/Logo.png";
// import './Sidebar.css';

// export const Sidebar = () => {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-3 col-sm-12 d-none d-md-block text-start backgroundSide">
//           <div className="text-center p-5">
//             <img src={Logo} alt="Logo" className="w-50" />
//           </div>
//           {/* Sidebar pour les écrans md et plus grands */}
//           <div className="sidebar">
//             <ul className="list-unstyled">
//               <h6 className="mb-4 ms-3">MARKETPLACE</h6>
//               <li className="liDash">
//                 <a href="#" className="text-decoration-none dashboard">
//                   <MdDashboard /> Dashboard
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-secondary text-decoration-none ps-3">
//                   <FaShoppingCart /> Market
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-secondary text-decoration-none ps-3">
//                   <MdOutlineFavorite /> Favorites
//                 </a>
//               </li>
//             </ul>
//             <ul className="list-unstyled p-0">
//               <h6 className="profil mb-4 ms-3">MY PROFILE</h6>
//               <li>
//                 <a
//                   href="#"
//                   className="text-secondary text-decoration-none ps-3">
//                   <MdInsights /> Insight
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-secondary text-decoration-none ps-3">
//                   <FaWallet /> Wallet
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-secondary text-decoration-none ps-3">
//                   <FaUserAlt /> Profile
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-secondary text-decoration-none ps-3">
//                   <AiTwotoneSetting /> Setting
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="col-sm-12 d-md-none">
//           {/* Sidebar pour les écrans sm */}
//           <div className="position-fixed  top-50 start-0 translate-middle-y">
//             <div className="social-bar d-flex flex-column justify-content-center">
//               <div className="social-icons text-end mb-4">
//                 <ul className="list-unstyled icones">
//                   <li className="p-3 fs-5">
//                     <a href="#" className="aicones">
//                       <MdDashboard />
//                     </a>
//                   </li>
//                   <li className="p-3 fs-5">
//                     <a href="#" className="aicones">
//                       <FaShoppingCart />
//                     </a>
//                   </li>
//                   <li className="p-3 fs-5">
//                     <a href="#" className="aicones">
//                       <MdOutlineFavorite />
//                     </a>
//                   </li>
//                   <li className="p-3 fs-5">
//                     <a href="#" className="aicones">
//                       <MdInsights />
//                     </a>
//                   </li>
//                   <li className="p-3 fs-5">
//                     <a href="#" className="aicones">
//                       <FaWallet />
//                     </a>
//                   </li>
//                   <li className="p-3 fs-5">
//                     <a href="#" className="aicones">
//                       <FaUserAlt />
//                     </a>
//                   </li>
//                   <li className="p-3 fs-5">
//                     <a href="#" className="aicones">
//                       <AiTwotoneSetting />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-9 col-sm-12 bg-light">
//         <Contenu />
//         </div>
//       </div>
//     </div>
//   );
// };


