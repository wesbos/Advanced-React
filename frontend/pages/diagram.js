import Page from '../components/Page';
import withData from '../lib/withData';
import styled from 'styled-components';

const DiagramStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 20px;
  h1 {
    grid-column: 1 / -1;
    grid-row: 1;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
  h2 {
    text-align: center;
    margin: 0;
    background: black;
    color: white;
    width: calc(40px + 100%);
    transform: translateX(-20px);
  }
  span.for {
    font-size: 12px;
    text-align: center;
    margin-bottom: 2rem;
    display: block;
  }
  .slat {
    background: #f7f7f7;
    padding: 20px;
    min-height: 500px;
    grid-column: span 2;
    grid-row: 4;
    line-height: 1.7;
  }

  .location {
    grid-column: span 4;
    background: red;
    padding: 5px;
    grid-row: 2;
    text-align: center;
    color: white;
    text-transform: uppercase;
  }

  .arrow {
    font-size: 30px;
    line-height: 1;
    transform: translateX(-10px) translateX(-50%);
    text-align: center;
    grid-row: 3;
    margin-bottom: -100%;
    background: white;
    height: 40px;
  }
  .arrow1 {
    grid-column: 3;
  }
  .arrow2 {
    grid-column: 5;
  }
  .arrow3 {
    grid-column: 7;
  }
  img {
    width: 100%;
    height: 125px;
    object-fit: contain;
  }
  .slat2 img {
    filter: invert(100%);
  }
  .slat4 img {
    mix-blend-mode: multiply;
  }
`;

const Diagram = () => (
  <DiagramStyles>
    <h1>The Pieces of our Application</h1>
    <span className="location frontend">Frontend</span>
    <span className=" location backend">Backend</span>
    <div className="slat slat1">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
        alt="React.js"
      />
      <h2>React.js</h2>
      <span className="for">For Building The Interface along with:</span>
      <ul>
        <li>
          <strong>Next.js</strong> for server side rendering, routing and tooling
        </li>
        <li>
          <strong>Styled Components</strong> for styling
        </li>
        <li>
          <strong>React-Apollo</strong> for interfacing with Apollo Client
        </li>
      </ul>
    </div>
    <div className="slat slat2">
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOThweCIgaGVpZ2h0PSI0MnB4IiB2aWV3Qm94PSIwIDAgMTIwIDQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHN0eWxlPgogICAgICAgIHRleHQgewogICAgICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7CiAgICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxnIGlkPSJob21lcGFnZS0rLW5hdiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImhvbWUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNTAuMDAwMDAwLCAtMTUzOS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1MC4wMDAwMDAsIDE1MzguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibG9nby1hcG9sbG8tc3BhY2UtY29weS0yOCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTGF5ZXJfMiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJsb2dvX2Fwb2xsb19zcGFjZS1saW5rIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OS42MTkxNTUsIDE1LjcxNjE3NSkgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC00OS42MTkxNTUsIC0xNS43MTYxNzUpIHRyYW5zbGF0ZSgwLjExOTE1NSwgMC43MTYxNzUpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJsb2dvX2Fwb2xsb19zcGFjZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIC0wLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zMzE4MjUsIDAuOTY1MzA5KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSIxNS44Mzg5MTQgMjAuNTYxMDg2IDEyLjkwNTQ2IDIwLjU2MTA4NiA4LjY3MDA0NTI1IDkuNTY4OTg5NDQgMTEuMzIzNDM4OSA5LjU2ODk4OTQ0IDEyLjAxNTU2NTYgMTEuNDMwOTUwMiAxNi4wMTc0OTYyIDExLjQzMDk1MDIgMTUuMjkzMDMxNyAxMy40OTEyODIxIDEyLjY1ODIyMDIgMTMuNDkxMjgyMSAxNC4zNzIyNDc0IDE4LjIyMDkzNTEgMTcuNDIxMTc2NSA5LjU2ODk4OTQ0IDIwLjA3NDMyODggOS41Njg5ODk0NCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iNjAuNDAwMjQxMyA5LjU2ODk4OTQ0IDYwLjQwMDI0MTMgMjAuNTYxMDg2IDYyLjc1NjkyMzEgMjAuNTYxMDg2IDYyLjc1NjkyMzEgMTEuNjI4OTU5MyA2Ny40MDQxNjI5IDExLjYyODk1OTMgNjcuNDA0MTYyOSA5LjU2ODk4OTQ0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI3My45ODI3NDUxIDkuNTY4OTg5NDQgNzMuOTgyNzQ1MSAyMC41NjEwODYgNzYuMzM5NDI2OCAyMC41NjEwODYgNzYuMzM5NDI2OCAxMS42Mjg5NTkzIDgwLjk4NjkwOCAxMS42Mjg5NTkzIDgwLjk4NjkwOCA5LjU2ODk4OTQ0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ny4zNDg1MzcsMTguNTkxMTMxMiBDNDkuMjk3NDk2MiwxOC41OTExMzEyIDUwLjg4MzEzNzMsMTcuMDA1NzMxNSA1MC44ODMxMzczLDE1LjA1NjY1MTYgQzUwLjg4MzEzNzMsMTMuMTA3ODEzIDQ5LjI5NzQ5NjIsMTEuNTIyMTcxOSA0Ny4zNDg1MzcsMTEuNTIyMTcxOSBDNDUuMzk5NTc3NywxMS41MjIxNzE5IDQzLjgxNDE3OCwxMy4xMDc4MTMgNDMuODE0MTc4LDE1LjA1NjY1MTYgQzQzLjgxNDE3OCwxNy4wMDU4NTIyIDQ1LjM5OTU3NzcsMTguNTkxMTMxMiA0Ny4zNDg1MzcsMTguNTkxMTMxMiBaIE00Ny4zNDg1MzcsMjAuNzQyMjAyMSBDNDQuMjA4NTA2OCwyMC43NDIyMDIxIDQxLjY2Mjk4NjQsMTguMTk2NjgxNyA0MS42NjI5ODY0LDE1LjA1NjY1MTYgQzQxLjY2Mjk4NjQsMTEuOTE2NjIxNCA0NC4yMDg1MDY4LDkuMzcwOTgwMzkgNDcuMzQ4NTM3LDkuMzcwOTgwMzkgQzUwLjQ4ODU2NzEsOS4zNzA5ODAzOSA1My4wMzQwODc1LDExLjkxNjYyMTQgNTMuMDM0MDg3NSwxNS4wNTY2NTE2IEM1My4wMzQwODc1LDE4LjE5NjY4MTcgNTAuNDg4Njg3OCwyMC43NDIyMDIxIDQ3LjM0ODUzNywyMC43NDIyMDIxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuODIwNjkzOCwxOC41OTExMzEyIEM5My43Njk4OTQ0LDE4LjU5MTEzMTIgOTUuMzU1NTM1NCwxNy4wMDU3MzE1IDk1LjM1NTUzNTQsMTUuMDU2NjUxNiBDOTUuMzU1NTM1NCwxMy4xMDc4MTMgOTMuNzY5ODk0NCwxMS41MjIxNzE5IDkxLjgyMDY5MzgsMTEuNTIyMTcxOSBDODkuODcxNzM0NSwxMS41MjIxNzE5IDg4LjI4NjMzNDgsMTMuMTA3ODEzIDg4LjI4NjMzNDgsMTUuMDU2NjUxNiBDODguMjg2MzM0OCwxNy4wMDU4NTIyIDg5Ljg3MTczNDUsMTguNTkxMTMxMiA5MS44MjA2OTM4LDE4LjU5MTEzMTIgWiBNOTEuODIwNjkzOCwyMC43NDIyMDIxIEM4OC42ODA5MDUsMjAuNzQyMjAyMSA4Ni4xMzUxNDMzLDE4LjE5NjY4MTcgODYuMTM1MTQzMywxNS4wNTY2NTE2IEM4Ni4xMzUxNDMzLDExLjkxNjYyMTQgODguNjgwOTA1LDkuMzcwOTgwMzkgOTEuODIwNjkzOCw5LjM3MDk4MDM5IEM5NC45NjA3MjQsOS4zNzA5ODAzOSA5Ny41MDY0ODU3LDExLjkxNjYyMTQgOTcuNTA2NDg1NywxNS4wNTY2NTE2IEM5Ny41MDY0ODU3LDE4LjE5NjY4MTcgOTQuOTYwNzI0LDIwLjc0MjIwMjEgOTEuODIwNjkzOCwyMC43NDIyMDIxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzIuMDU2MTA4NiwyMC41NjEwODYgTDI5LjI3MDk1MDIsMjAuNTYxMDg2IEwyOC44NzE0MzI5LDIwLjU2MTA4NiBMMjYuOTMwNjc4NywyMC41NjEwODYgTDI2LjkzMDY3ODcsOS41Njg4Njg3OCBMMjkuMjcwOTUwMiw5LjU2ODg2ODc4IEwyOS4yNzA5NTAyLDEzLjM1MTY3NDIgTDMyLjA1NjEwODYsMTMuMzUxNjc0MiBDMzQuMDA5NzczOCwxMy4zNTE2NzQyIDM1LjU5MzQ4NDIsMTUuMDAyOTU2MyAzNS41OTM0ODQyLDE2Ljk1NjM4MDEgQzM1LjU5MzQ4NDIsMTguOTEwMTY1OSAzNC4wMDk3NzM4LDIwLjU2MTA4NiAzMi4wNTYxMDg2LDIwLjU2MTA4NiBaIE0zMi4wNTYxMDg2LDE1LjUwMjk4NjQgTDI5LjI3MDk1MDIsMTUuNTAyOTg2NCBMMjkuMjcwOTUwMiwxOC40MDk4OTQ0IEwzMi4wNTYxMDg2LDE4LjQwOTg5NDQgQzMyLjgyMDYzMzUsMTguNDA5ODk0NCAzMy40NDIyOTI2LDE3LjcyMDc4NDMgMzMuNDQyMjkyNiwxNi45NTYzODAxIEMzMy40NDIyOTI2LDE2LjE5MTk3NTkgMzIuODIwNjMzNSwxNS41MDI5ODY0IDMyLjA1NjEwODYsMTUuNTAyOTg2NCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjkxMDA0NTIsNi4yMzI4ODA4NCBDMjQuNzA2MzY1LDYuMjMyODgwODQgMjQuNTI2NTc2Miw2LjEzMjAwNjAzIDI0LjQxNjc3MjIsNS45NzczMTUyMyBDMjQuNDE2NzcyMiw1Ljk3NzMxNTIzIDIzLjg4ODg2ODgsNS4zNzUwODI5NiAyMy42MDQyMjMyLDUuMDkwMDc1NDEgQzIyLjQwMDEyMDcsMy44ODU5NzI4NSAyMC45OTgxMjk3LDIuOTQwODE0NDggMTkuNDM3MzQ1NCwyLjI4MDU0Mjk5IEMxNy44MjIwMjExLDEuNTk3MjI0NzQgMTYuMTA1NzAxNCwxLjI1MDc5OTQgMTQuMzM1NTY1NiwxLjI1MDc5OTQgQzEyLjU2NTE4ODUsMS4yNTA3OTk0IDEwLjg0ODg2ODgsMS41OTcyMjQ3NCA5LjIzMzc4NTgyLDIuMjgwNTQyOTkgQzcuNjcyODgwODQsMi45NDA4MTQ0OCA2LjI3MDg4OTg5LDMuODg1OTcyODUgNS4wNjY5MDc5OSw1LjA5MDA3NTQxIEMzLjg2MjY4NDc3LDYuMjk0NDE5MzEgMi45MTc0MDU3Myw3LjY5NjI4OTU5IDIuMjU3MjU0OSw5LjI1NzA3MzkxIEMxLjU3NDE3Nzk4LDEwLjg3MjM5ODIgMS4yMjc2MzE5OCwxMi41ODg5NTkzIDEuMjI3NjMxOTgsMTQuMzU4OTc0NCBDMS4yMjc2MzE5OCwxNi4xMjg5ODk0IDEuNTc0MTc3OTgsMTcuODQ1NTUwNSAyLjI1NzI1NDksMTkuNDYwODc0OCBDMi45MTc0MDU3MywyMS4wMjE2NTkxIDMuODYyNjg0NzcsMjIuNDIzNTI5NCA1LjA2NjkwNzk5LDIzLjYyNzYzMiBDNi4yNzEwMTA1NiwyNC44MzE4NTUyIDcuNjczMDAxNTEsMjUuNzc3MDEzNiA5LjIzMzc4NTgyLDI2LjQzNzI4NTEgQzEwLjg0ODg2ODgsMjcuMTIwNjAzMyAxMi41NjUxODg1LDI3LjQ2NzAyODcgMTQuMzM1NTY1NiwyNy40NjcwMjg3IEMxNi4xMDU3MDE0LDI3LjQ2NzAyODcgMTcuODIyMTQxOCwyNy4xMjA2MDMzIDE5LjQzNzM0NTQsMjYuNDM3Mjg1MSBDMjAuNTc0MjM4MywyNS45NTY0NDA0IDIxLjYyNjMwNDcsMjUuMzIzNTU5NiAyMi41Nzk1NDc1LDI0LjU1MDIyNjIgQzIyLjUyODYyNzUsMjQuNDAwMjQxMyAyMi41MDAxNTA4LDI0LjIzOTM5NjcgMjIuNTAwMTUwOCwyNC4wNzIwMzYyIEMyMi41MDAxNTA4LDIzLjI1NTI2NCAyMy4xNjIzNTI5LDIyLjU5MzA2MTggMjMuOTc5MDA0NSwyMi41OTMwNjE4IEMyNC43OTU4OTc0LDIyLjU5MzA2MTggMjUuNDU4MDk5NSwyMy4yNTUyNjQgMjUuNDU4MDk5NSwyNC4wNzIwMzYyIEMyNS40NTgwOTk1LDI0Ljg4ODkyOTEgMjQuNzk1ODk3NCwyNS41NTEwMTA2IDIzLjk3OTAwNDUsMjUuNTUxMDEwNiBDMjMuNzc2Mjg5NiwyNS41NTEwMTA2IDIzLjU4Mjg2NTgsMjUuNTEwMTA1NiAyMy40MDY4MTc1LDI1LjQzNjAxODEgQzIwLjkzNzE5NDYsMjcuNDYwOTk1NSAxNy43Nzg0NjE1LDI4LjY3NjgwMjQgMTQuMzM1NTY1NiwyOC42NzY4MDI0IEM2LjQyNzg3MzMsMjguNjc2ODAyNCAwLjAxNzQ5NjIyOTMsMjIuMjY2NTQ2IDAuMDE3NDk2MjI5MywxNC4zNTg4NTM3IEMwLjAxNzQ5NjIyOTMsNi40NTExNjEzOSA2LjQyNzg3MzMsMC4wNDA3ODQzMTM3IDE0LjMzNTU2NTYsMC4wNDA3ODQzMTM3IEMxOC43NTg4NTM3LDAuMDQwNzg0MzEzNyAyMi43MTIwMzYyLDIuMDQ4MTQ0OCAyNS4zMzgxNTk5LDUuMjAwMTIwNjYgQzI1LjQ0NzQ4MTEsNS4zMDk1NjI1OSAyNS41MTU0MTQ4LDUuNDYwNzU0MTUgMjUuNTE1NDE0OCw1LjYyNzYzMTk4IEMyNS41MTUyOTQxLDUuOTYyMjMyMjggMjUuMjQ0NTI0OSw2LjIzMjg4MDg0IDI0LjkxMDA0NTIsNi4yMzI4ODA4NCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8dGV4dCBpZD0iQ0xJRU5ULUNvcHktOSIgb3BhY2l0eT0iMC41IiBmb250LXNpemU9IjE3IiBmb250LXdlaWdodD0ibm9ybWFsIiBsZXR0ZXItc3BhY2luZz0iMC44NzkzMTAzNjkiPgogICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSI0Mi4yMTQxMzc4IiB5PSI0MiI+Q0xJRU5UPC90c3Bhbj4KICAgICAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
        alt="React.js"
      />
      <h2>Apollo Client</h2>
      <span className="for">For Data Management</span>
      <small />
      <ul>
        <li>
          Performing GraphQL <strong>Mutations</strong>
        </li>
        <li>
          Fetching GraphQL <strong>Queries</strong>
        </li>
        <li>
          <strong>Caching</strong> GraphQL Data
        </li>
        <li>
          Managing <strong>Local State</strong>
        </li>
        <li>
          <strong>Error</strong> and <strong>Loading</strong> UI States
        </li>
        <li>
          <small>Apollo-client replaces the need for redux + data fetching libraries</small>
        </li>
      </ul>
    </div>
    <div className="slat slat3">
      <img
        src="https://camo.githubusercontent.com/389368863d9b9df25acd07644bad7642459c3533/68747470733a2f2f696d6775722e636f6d2f5376366a3042362e706e67"
        alt="React.js"
      />
      <h2>GraphQL Yoga</h2>

      <span className="for">An Express GraphQL Server For:</span>
      <ul>
        <li>
          Implementing <strong>Query</strong> and <strong>Mutation</strong>{' '}
          <strong>Resolvers</strong>
        </li>
        <li>
          Custom <strong>Server Side Logic</strong>
        </li>
        <li>
          <strong>Charging</strong> Credit Cards
        </li>
        <li>
          <strong>Sending</strong> Email
        </li>
        <li>
          Performing <strong>Authentication</strong>
        </li>
        <li>
          Checking <strong>Permissions</strong>
        </li>
      </ul>
    </div>
    <div className="slat slat4">
      <img
        src="https://camo.githubusercontent.com/87336b0d10b0d1f27518e14c4a36f995babd6a2f/68747470733a2f2f696d6775722e636f6d2f485575313072482e706e67"
        alt="React.js"
      />
      <h2>Prisma</h2>

      <span className="for">A GraphQL Database Interface</span>
      <ul>
        <li>
          Provides a set of GraphQL <strong>CRUD APIs</strong> for our (currently MySQL){' '}
          <strong>Database</strong>
        </li>
        <li>
          <strong>Schema</strong> Definition
        </li>
        <li>
          Data <strong>Relationships</strong>
        </li>
        <li>
          <strong>Queried</strong> Directly from our Yoga Server
        </li>
        <li>
          <strong>Self-hosted</strong> or <strong>as-a-service</strong>
        </li>
      </ul>
    </div>
    <span className="arrow arrow1">↔</span>
    <span className="arrow arrow2">↔</span>
    <span className="arrow arrow3">↔</span>
  </DiagramStyles>
);

const DiagramPage = () => (
  <Page>
    <Diagram />
  </Page>
);

export default withData(DiagramPage);
