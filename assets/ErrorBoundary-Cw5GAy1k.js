import{R as e}from"./index-BvZwMxn1.js";class n extends e.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r,t){console.error("ErrorBoundary caught an error",r,t)}render(){return this.state.hasError?e.createElement("h1",null,"Something went wrong. Please try again later."):this.props.children}}export{n as default};
