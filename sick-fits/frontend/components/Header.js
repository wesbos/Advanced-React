import Link from 'next/link';
import Nav from './Nav';
// import styled from 'styled-components';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     h1: {
//         background: 'red',
//         fontStyle: '4rem',
//         marginLeft : '2rem',
//         position: 'relative',
//         zIndex: 2,
//         transform: 'skew(-7deg)',
//     },
//     a: {
//         color: 'white',
//         textDecoration: 'none',
//         textTransform: 'uppercase',
//         padding: '0.5rem 1rem',
//     },
//     bar: {
//         borderBottom : '10px solid var(--black, black)',
//         display: 'grid',
//         gridTemplateColumns: 'auto 1fr',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     subBar: {
//         display: 'grid',
//         gridTemplateColumns: 'auto 1fr',
//         borderBottom : '10px solid var(--black, black)',
//     }
//   });

// const Logo = styled.h1`
//     background: red;
//     font-style: 4rem;
//     margin-left: 2rem;
//     position: relative;
//     z-index: 2;
//     transform: skew(-7deg)
//     a {
//         color: white;
//         text-decoration: none;
//         text-transform: uppercase;
//         padding: 0.5rem 1rem;
//     }
// `;

// const HeaderStyles = styled.header`
//     .bar {
//         border-bottom: 10px solid var(--black, black);
//         display: grid;
//         grid-template-columns: auto 1fr;
//         align-items: center;
//         justify-content: space-between;
//     };
//     .sub-bar{
//         display: grid;
//         grid-template-columns: auto 1fr;
//         border-bottom: 10px solid var(--black, black);
//     }
// `;

export default function Header() {
    // const classes = useStyles();
    return (
        <header>
            {/* FIXME styled-components styles are not getting applied. */}
            <div style={{
                borderBottom: '10px solid var(--black, black)',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <h1 style={{
                    background: 'red', fontStyle: '4rem',
                    marginLeft: '2rem',
                    position: 'relative',
                    zIndex: 2,
                    transform: 'skew(-7deg)',
                }}>
                    <a href="/" style={{
                        color: 'white',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        padding: '0.5rem 1rem',
                    }}>
                        Sick Fits
                    </a>
                </h1>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                borderBottom: '10px solid var(--black, black)',
            }}>
                <p>Search</p>
            </div>
            <Nav></Nav>
        </header>
    )
}