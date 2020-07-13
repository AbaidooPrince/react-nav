import React from 'react';
import MainNavigation from './navigation/main-nav';
import Footer from './footer';
import TextImageSection from './home/text-image-section';
import ImageTextSection from './home/image-text-section';

class Home extends React.Component{

        render() {
            return(
                <>
                <MainNavigation />
                <TextImageSection />
                <ImageTextSection />
                <Footer />  
                </>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

            )
        }


}
export default Home;