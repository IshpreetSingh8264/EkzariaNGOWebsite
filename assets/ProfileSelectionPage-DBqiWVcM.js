import{r as c,u as r,R as e}from"./index-B4C9QGZl.js";import{L as o}from"./LoadingScreen-DXK5gkCr.js";import{m as a}from"./proxy-BC0BPaEn.js";const x=()=>{const[n,s]=c.useState(null),i=r(),l=t=>{s(t),t==="A"?i("EkzariaNGOWebsite/Home"):t==="B"&&i("EkzariaNGOWebsite/recipients")};return e.createElement(o,{profile:n},e.createElement("div",{className:"min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center p-4"},e.createElement(a.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-4xl font-bold text-[#000000] mb-12"},"Who's donating today?"),e.createElement("div",{className:"flex flex-wrap justify-center gap-8"},e.createElement(a.div,{whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.2},onClick:()=>l("A"),className:"cursor-pointer flex flex-col items-center"},e.createElement("div",{className:"w-40 h-40 rounded-md bg-[#C62828] flex items-center justify-center mb-2 overflow-hidden"},e.createElement("span",{className:"text-white text-4xl font-bold"},"A")),e.createElement("span",{className:"text-[#212121] text-lg"},"Donor Profile")),e.createElement(a.div,{whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},onClick:()=>l("B"),className:"cursor-pointer flex flex-col items-center"},e.createElement("div",{className:"w-40 h-40 rounded-md bg-[#C62828] flex items-center justify-center mb-2 overflow-hidden"},e.createElement("span",{className:"text-white text-4xl font-bold"},"B")),e.createElement("span",{className:"text-[#212121] text-lg"},"Recipient Profile")))))};export{x as default};
