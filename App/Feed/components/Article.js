import React, { Component } from 'react';
import {View, Text,Image,WebView} from 'react-native';


export default class Article extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render() {
		return (
			<View style={{flex: 1,paddingBottom: 15, marginBottom: 15,padding:0,elevation: 5,borderWidth: 0, backgroundColor:'#ffffff'}}>
				<View>
					<Image source={this.props.HeaderImage} style={{height:200}} />
					<Image source={this.props.teamAImage} style={{position: 'absolute',height:140,resizeMode:'contain', top:40,left:'-37%' }} />
					<Image source={this.props.teamBImage} style={{position: 'absolute',height:140,resizeMode:'contain', top:40 ,left:'30%'}} />
					<Text style={{left:18,color: '#fff', position:'absolute', top:5,fontSize: 18,textAlign: 'center' }}>{this.props.ImageOverlayText}</Text>
					<Image style={{height:75, resizeMode:'contain', borderRadius:500,position:'relative',top:-37.5,left:'-57%'}} source={this.props.CircleImage} />
				</View>
				<View style={{position:'relative',top:-38}}>
					<Text style={{textAlign: 'center',fontSize: 29}}>{this.props.MainHeading}</Text>
					<Text style={{textAlign: 'center',fontSize: 17}}>{this.props.minorHeading}</Text>
				</View>
				<View style={{width:'70%',position:'relative',left:'15%',top:-18}}>
					<Text  style={{textAlign: 'justify',fontSize: 17}}>{this.props.InfoText}</Text>
				</View>
				<View style={{width:'50%',position:'relative',left:'25%',marginTop: 10}}>
					<Text  style={{textAlign: 'justify',fontSize: 28}}>{this.props.memberCount} Members</Text>
				</View>
				<View style={{flex:1,flexDirection: 'row',flexWrap: 'wrap',  width:'55%',position:'relative',left:'13%',marginTop: 10}}>
					<Image style={{height:70,flex:1, resizeMode:'contain', borderRadius:500}} source={this.props.UserImage1} />
					<Image style={{height:70,flex:1, resizeMode:'contain', borderRadius:500,position:'relative',left:-10}} source={this.props.UserImage2} />
					<Image style={{height:70,flex:1, resizeMode:'contain', borderRadius:500,position:'relative',left:-20}} source={this.props.UserImage1} />
					<Image style={{height:70,flex:1, resizeMode:'contain', borderRadius:500,position:'relative',left:-30}} source={this.props.UserImage2} />
					<Text style={{flex:1, fontSize:13,textAlignVertical: 'center',textAlign:'center', position:'relative',left:-20 }}>+1026 more</Text>
				</View>
				<View style={{elevation:3, backgroundColor:'#437263',flex:1,height:52,flexWrap:'wrap',flexDirection:'row',paddingTop:10}}>
					<View style={{borderBottomWidth: 4,borderColor: '#fff', flex:1,height:'100%'}}>
						<Text style={{textAlign:'center', fontSize: 18, color:'#fff'}}>Posts</Text>
					</View>
					<View style={{flex:2,height:'100%'}}>
						<Text style={{textAlign:'center', fontSize: 18, color:'#fff'}}>Our Althetes</Text>
					</View>
					<View style={{flex:1,height:'100%'}}>
						<Text style={{textAlign:'center', fontSize: 18, color:'#fff'}}>Videos</Text>
					</View>
					<View style={{flex:1,height:'100%'}}>
						<Text style={{textAlign:'center', fontSize: 18, color:'#fff'}}>Photos</Text>
					</View>
				</View>

				<WebView  source={{uri: "https://www.youtube.com/embed/wLXVDzM8Tnk?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0"}}
				style={{height:200, width:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'black'}}
 				/>
 				<View style={{marginBottom:10}}>
 					<Text  style={{textAlign: 'justify',fontSize: 18, position:'relative', left:15,marginTop:18}}>Q&A with RBC Olympian Caroline Calve</Text>
					<View style={{width:'20%',position:'relative',left:15,top:10, borderWidth: 1.2,padding:5}}>
						<Text style={{marginLeft:5,fontSize: 18}}> Join</Text>
					</View>
 				</View>
			</View>
		)
	}
}
