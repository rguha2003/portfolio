import React,{Component} from 'react';

class Jokes extends Component{
state = {joke: []};

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({ jokes: json }))
    .catch(error => alert(error.message));
}
/*render() {

    const {jokes } = this.state.joke;


    return (
        <div className="Jokes">
            <ul>
                {jokes.map(item => (
                    <li key={item.id}>
                        Name: {item.name} | Email: {item.email}
                    </li>
                ))}
            </ul>
        </div>
    );

}
}*/
render() {
    const{name, email} = this.state.joke
   // const{name, email} = {name:'Rahul',email:"rahulguha3"};
  return (
    <div>
     <p>{name}|{email}</p>
    </div>
  )
}
}
export default Jokes;

/*this.state = {
    items: [],
    isLoaded: false
}

}


* componentDidMount
*
* Fetch json array of objects from given url and update state.

componentDidMount() {

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        this.setState({
            items: json,
            isLoaded: true, 
        })
    }).catch((err) => {
        console.log(err);
    });

}*/