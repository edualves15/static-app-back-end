import{r as a,u,j as e,a as p}from"./index-CBgfYllI.js";const m=()=>{const[t,i]=a.useState(""),[r,o]=a.useState(""),[n,l]=a.useState(null),d=u(),c=async s=>{s.preventDefault(),p.post("/api/login",{email:t,password:r}).then(()=>{d("/")}).catch(h=>{console.error("Erro ao realizar o login:",h),l("Email ou senha inválidos")})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Login"}),e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"E-mail:"}),e.jsx("input",{type:"email",id:"email",value:t,onChange:s=>i(s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",children:"Senha:"}),e.jsx("input",{type:"password",id:"password",value:r,onChange:s=>o(s.target.value)})]}),e.jsx("button",{type:"submit",children:"Entrar"})]})]}),n&&e.jsx("p",{children:n})]})};export{m as default};