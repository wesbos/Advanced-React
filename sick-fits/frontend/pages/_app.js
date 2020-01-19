// this _app.js contains state and layout for every page
// best practice put all that in a component
import App, { Container } from 'next/app'
import Page from '../components/Page'

class MyApp extends App {

    render() {
        // Destructure component value
        const { Component } = this.props;
        return (
            <Container>
                <Page>
                    <Component  />
                </Page>
            </Container>
        )
    }
}

export default MyApp;