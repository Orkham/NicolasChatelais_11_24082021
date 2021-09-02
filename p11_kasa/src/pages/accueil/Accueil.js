import React from 'react';
import HomePageTitle from '../../components/BodyTitle'
import GalleryContainer from '../../components/Gallery/GalleryBody';

export default class Accueil extends React.Component{
    render(){
        return(
            <div>
                <HomePageTitle />
                <GalleryContainer />
            </div>
        )
    }
}