import{R as e}from"./index-BvZwMxn1.js";import{m as a}from"./proxy-QTlrfmCL.js";const s=({student:t,onClick:l})=>{const r=()=>{if(t.photo){const o=t.photo.startsWith("data:image")?t.photo:`data:image/jpeg;base64,${t.photo}`;return e.createElement("img",{src:o,alt:t.name,className:"w-full h-full object-cover filter blur-sm"})}return e.createElement("div",{className:"w-full h-full bg-gray-200 flex items-center justify-center"},e.createElement("span",{className:"text-gray-500 text-lg"},"No Photo"))};return e.createElement(a.div,{whileHover:{scale:1.03,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)"},whileTap:{scale:.97},onClick:l,className:"cursor-pointer bg-white rounded-lg shadow-md overflow-hidden w-64 transition-all duration-300"},e.createElement("div",{className:"relative h-48 overflow-hidden group"},r(),e.createElement("div",{className:"absolute inset-0 bg-opacity-20 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-40"},e.createElement("span",{className:"text-white text-xl font-bold transition-all duration-300 group-hover:text-2xl"},t.name))),e.createElement("div",{className:"p-4"},e.createElement("div",{className:"flex items-center justify-between"},e.createElement("h3",{className:"text-lg font-semibold text-[#C62828]"},t.name),e.createElement("span",{className:`px-2 py-1 rounded-full text-xs ${t.verified?"bg-[#43A047] text-white":"bg-[#FB8C00] text-white"}`},t.verified?"Verified":"Pending")),e.createElement("p",{className:"text-gray-600"},t.location),e.createElement("div",{className:"mt-2 flex gap-2"},e.createElement("p",{className:"text-sm font-medium text-gray-700"},"Funding Needs:"),e.createElement("p",{className:"text-gray-600 text-sm"},t.totalAmountNeeded)),e.createElement(a.button,{whileHover:{backgroundColor:"#8E0000"},whileTap:{scale:.95},className:"mt-3 w-full bg-[#C62828] text-white py-2 rounded-md text-sm font-medium"},"View Details")))};export{s as default};
