import{r as s,u as h,a as x,j as e,P as j,b as P}from"./index-DNRBFzgo.js";const b=()=>{var i,o;const[n,r]=s.useState(""),[t,c]=s.useState(""),[l,g]=s.useState(null),m=h(),u=((o=(i=x().state)==null?void 0:i.from)==null?void 0:o.pathname)||"/",d=async a=>{a.preventDefault(),P.post("/api/login",{email:n,password:t}).then(()=>m(u,{replace:!0})).catch(p=>{console.error("Erro ao realizar o login:",p),g("Email ou senha inválidos")})};return e.jsx(j,{children:e.jsxs("div",{style:v,children:[e.jsxs("div",{className:"loginPage-container",children:[e.jsx("h2",{className:"loginPage-header",children:"Login"}),e.jsxs("form",{onSubmit:d,className:"loginPage-form",children:[e.jsxs("div",{className:"loginPage-inputGroup",children:[e.jsx("label",{htmlFor:"email",className:"loginPage-label",children:"E-mail:"}),e.jsx("input",{type:"email",id:"email",className:"loginPage-input",value:n,onChange:a=>r(a.target.value)})]}),e.jsxs("div",{className:"loginPage-inputGroup",children:[e.jsx("label",{htmlFor:"password",className:"loginPage-label",children:"Senha:"}),e.jsx("input",{type:"password",id:"password",className:"loginPage-input",value:t,onChange:a=>c(a.target.value)})]}),e.jsx("button",{type:"submit",className:"loginPage-button",children:"Entrar"})]})]}),l&&e.jsx("p",{className:"loginPage-error",children:l})]})})},v={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:"100%",minHeight:"100%"};export{b as default};
