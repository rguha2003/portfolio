import React, {Component} from "react";
const TITLES = ['an engineering student',
'undergraduate researcher at UNCC',
'An enthusiastic learner',
'will be alive by the end of One Piece'];

class Title extends Component{
    state = {titleIndex : 0};
    componentDidMount() {
console.log('Title component has mounted');
this.animateTitles();
    }
    animateTitles = () =>{
        setInterval( () => {const titleIndex = (this.state.titleIndex +1) % TITLES.length;
        this.setState( {titleIndex} );
    }, 4000);
}
    render(){
        const title = TITLES[this.state.titleIndex];

        return(
            <p>I am {title}</p>
        )
    }
}export default Title;