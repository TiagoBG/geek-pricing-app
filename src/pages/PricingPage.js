import React from 'react';

import Header from '../components/Header';
import MainPricing from '../components/MainPricing';
import Footer from '../components/Footer';

class PricingPage extends React.Component {
    render() {
        return ( 
        <React.Fragment >
                <Header
                    companyName = "Geek Pricing App"
                    navBarLinks = {
                        [
                           { nameLink:"Facebook",
                            url:"https://facebook.com/"},
                            { nameLink:"Twitter",
                            url:"https://twitter.com/"},
                            { nameLink:"LinkedIn",
                            url:"https://linkedin.com/"},
                            { nameLink:"Instagram",
                            url:"https://instagram.com/"},
                        ]
                    }
                />
                <MainPricing/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default PricingPage;