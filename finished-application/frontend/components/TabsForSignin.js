import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import RequestReset from '../components/RequestReset';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// const Columns = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   grid-gap: 20px;
// `;

const StyledTabs = styled.div`
padding: 2rem;
max-width: 500px;
margin: auto;
`;

const PasswordReset = styled.div`
`
;


function TabsForSignin() {
    const [key, setKey] = useState('signin');
  
    return (
        <StyledTabs>
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="signin" title="Sign In">
                <Signin/>
                <PasswordReset>
                  <div id="content">
                    <RequestReset/>
                  </div>
                </PasswordReset>
                </Tab>
                <Tab eventKey="signup" title="Register">
                <Signup/>
                </Tab>
            </Tabs>
        </StyledTabs>
    );
  }
  
//   render(<signinPage />);



// class signinPage extends Component {
//     render() {
//         return (
//             <Columns>
//                 <Signup/>
//                 <Signin/>
//                 <RequestReset/>
//             </Columns>
//         );
//     }
// }

export default TabsForSignin;