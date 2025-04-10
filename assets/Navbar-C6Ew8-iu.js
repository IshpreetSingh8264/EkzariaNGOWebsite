import{r as f,R as e,u as b,b as h}from"./index-BOc7CmiS.js";import{m as l}from"./proxy-C6KHqux_.js";const v=({onClose:i,onSave:s})=>{const[o,m]=f.useState({name:"",gender:"",photo:"",email:"",phone:"",location:"",nationality:"",educationLevel:"",institution:"",fieldOfStudy:"",achievements:"",totalAmountNeeded:"",fundingDeadline:"",financialHelpReason:"",terms:!1,fundsUsage:!1,verification:!1,verified:!1,fundsReceived:""}),r=a=>{const{name:n,value:u,type:p,checked:x}=a.target;m(g=>({...g,[n]:p==="checkbox"?x:u}))},c=a=>{a.preventDefault(),s(o),i()},t=(a,n,u="text",p=!1)=>e.createElement("div",null,e.createElement("label",{className:"block text-gray-700 mb-1"},a),e.createElement("input",{type:u,name:n,value:o[n],onChange:r,className:"w-full px-3 py-2 border rounded-md",required:p})),d=(a,n)=>e.createElement("div",null,e.createElement("label",{className:"flex items-start"},e.createElement("input",{type:"checkbox",name:n,checked:o[n],onChange:r,className:"mt-1 mr-2",required:!0}),e.createElement("span",{className:"text-gray-700"},a)));return e.createElement(l.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"},e.createElement(l.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{duration:.3},className:"bg-white rounded-lg shadow-xl w-full max-w-md overflow-y-auto max-h-screen"},e.createElement("div",{className:"p-6"},e.createElement("div",{className:"flex justify-between items-center mb-4"},e.createElement("h2",{className:"text-2xl font-bold text-gray-800"},"Student Application Form"),e.createElement("button",{onClick:i,className:"text-gray-500 hover:text-gray-700"},"✕")),e.createElement("form",{onSubmit:c,className:"space-y-6"},e.createElement("div",null,e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Personal Information"),e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},t("Full Name","name","text",!0),t("Gender","gender","text",!0),t("Email Address","email","email",!0),t("Phone Number","phone","tel",!0),t("Address","location","text",!0),t("Nationality","nationality","text",!0))),e.createElement("div",null,e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Educational Background"),e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},t("Education Level","educationLevel","text",!0),t("Institution Name","institution","text",!0),t("Field of Study","fieldOfStudy","text",!0),t("Achievements","achievements","text",!0))),e.createElement("div",null,e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Financial Need"),e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},t("Total Amount Needed","totalAmountNeeded","text",!0),t("Funding Deadline","fundingDeadline","date",!0),t("Reason for Financial Help","financialHelpReason","text",!0))),e.createElement("div",{className:"space-y-4"},d("I confirm that all the information provided is accurate and that I agree to the platform's verification process.","terms"),d("I understand that all funds received must be used strictly for educational purposes.","fundsUsage"),d("I allow the platform to verify my application before approval.","verification")),e.createElement("div",{className:"flex justify-end space-x-3"},e.createElement("button",{type:"button",onClick:i,className:"px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"},"Cancel"),e.createElement("button",{type:"submit",className:"px-6 py-2 bg-[#C62828] text-white rounded-md hover:bg-[#B71C1C]"},"Submit Application"))))))},N=({onNewStudent:i})=>{const s=b(),o=h(),[m,r]=f.useState(!1),c=o.pathname==="/Home";return e.createElement(e.Fragment,null,e.createElement(l.nav,{className:"w-full bg-white shadow-md py-4 px-6 flex justify-between items-center"},e.createElement("div",{className:"flex items-center"},e.createElement(l.div,{className:"text-2xl font-bold cursor-pointer text-[#C62828]",onClick:()=>s("/")},"Ekzaria")),c?e.createElement(l.button,{whileHover:{scale:1.05,backgroundColor:"#8E0000"},whileTap:{scale:.95},className:"bg-[#C62828] text-white px-6 py-2 rounded-md font-medium",onClick:()=>s("/recipients")},"Donate Now"):e.createElement(l.button,{whileHover:{scale:1.05,backgroundColor:"#8E0000"},whileTap:{scale:.95},onClick:()=>r(!0),className:"bg-[#C62828] text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"},"Apply Now")),!c&&m&&e.createElement(v,{onClose:()=>r(!1),onSave:i}))};export{N as default};
