import{r as a,a as o,j as e}from"./index-CBgfYllI.js";const i=()=>{const[r,t]=a.useState([]);return a.useEffect(()=>{o.get("/api/users").then(s=>t(s.data.data)).catch(s=>console.error("Erro ao buscar usuários:",s))},[]),e.jsxs("div",{children:[e.jsx("h2",{children:"Produtos"}),r.length>0?r.map(s=>e.jsxs("div",{children:[e.jsx("h3",{children:s.username}),e.jsx("p",{children:s.email})]},s.id)):e.jsx("p",{children:"Nenhum usuário encontrado"})]})};export{i as default};