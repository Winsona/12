import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

export default class Blockdetails extends Component {


    state = { Blockdetails: [] };

    componentDidMount(){
        this.setState({
            Blockdetails:[
                {id:1,title:"1BHK", floor:1},
                {id:2,title:"2BHK",floor:2}
            ]
        })
    }

    render(){
        return (
           <Fragment>
            <h2>Blocks</h2>
           <ul>
                {this.state.Blockdetails.map( (m) =>(
                        <li key={m.id}>
                           <Link to={`/Blockdetails/${m.id}`}>{m.title}</Link>
                        </li>                              
                ))}
           </ul>
            </Fragment>
        );

    }

}