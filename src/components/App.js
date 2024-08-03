import React,{Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/allu.png';
import Jokes from './Jokes';
import Title from './Title';
class App extends Component{
    state = { displayBio: false};
    
    /*constructor(){
        super();
        this.state = { displayBio: false};

        console.log('Component this', this);
       this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
   */

    toggleDisplayBio= () => {
        this.setState({displayBio: !this.state.displayBio});
    }
render(){
    
    return(
    <div>
        <img src={profile} alt='profile' style={{width: 500,height:500}} />
        <h1>Hello!</h1>
        <p>My name is Rahul Guha.</p>
        <Title />
        <p>I'm always ready to work on new and exciting projects.</p>
        {this.state.displayBio ? (<div>
    <p>I currently live in Morrisville NC, and study in Charlotte NC.</p>
    <p>I am learning react for frontend and I want to learn Python in the future.</p>
    <p>I am into Yoga and Bhangra and enjoy trying to cook my moms recipies although not very well :')</p>
    <button onClick={this.toggleDisplayBio}>Show less</button>
</div>): (
    <div>
        <button onClick={this.toggleDisplayBio}>Read more</button>
    </div>
)
}
    <hr />
    <Projects />
    <hr />
    <SocialProfiles />
    <hr />
    <Jokes />
    </div>)
}

}
export default App;