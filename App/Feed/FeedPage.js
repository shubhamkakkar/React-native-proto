import React, { Component } from 'react';
import {ScrollView,Text} from 'react-native';
import { Icon } from 'react-native-elements';
import Article from './components/Article';
import HeaderImage from './../../res/background.png';
import RBC from './../../res/RBC.png';
import Canada from './../../res/canada.png';
import Player from './../../res/player.jpg';
import UserImage1 from './../../res/UserImage1.jpg';
import UserImage2 from './../../res/UserImage2.jpg';


export default class FeedPage extends Component {
	render() {

		let ArticleData = [1,2,3,4,5,6,7,89,10];//Header Image
		let ArticleComponents = ArticleData.map((IndividualArticle)=>{
			return <Article UserImage1={UserImage1} UserImage2={UserImage2} memberCount={36} minorHeading={'Canada'} InfoText={'As a part of our long-term partnership with the Canadian Olympic Team, The RBC Olympians Program provides elite athletes with financial support and valuable career experience to help them achieve success both on and off the field. '} MainHeading={'RBC Olympians'} CircleImage={Player} ImageOverlayText='Supporting Olympic athletes since 1947' HeaderImage={HeaderImage} teamAImage={RBC} teamBImage={Canada}  key={IndividualArticle+'ArticleComponent'} />
		});
		return (
			<ScrollView style={{backgroundColor: '#fff'}}>
				{
					ArticleComponents
				}
			</ScrollView>
		);
	}
}
