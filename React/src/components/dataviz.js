import React from 'react';
import './css/dataviz.css'
import ReactSearchBox from 'react-search-box'
import {FormControl} from 'react-bootstrap'
import moment from "moment"
  
class Dataviz extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {

            datas: [],
            error_msg: '',
        }
 
    
        
          
    }

   
   
    componentDidMount() {
        console.log('api fetch')
        fetch('http://127.0.0.1:8000/api/get_shop_details')
        .then(response => response.json())
        .then(data => this.setState({ datas: data }))
        
        
      }


    render(){
        

        return(
            <div>
                <div align="left"><h2>Shop Status</h2></div>
               
                <br/>
                <table className="table">
                <thead>
                    <tr className="tr">
                       
                        <th className="th">Name</th>
                        <th className="th">Shop Name</th>
                        <th className="th">Status</th>
                       
                    </tr>
                    </thead>
                    
                    <tbody>
                    { (this.state.datas.length > 0) ? this.state.datas.map( (d, index) => {
                    return (
                        <tr className="tr" key={ index }>
                        <td className="tr">{ d.name }</td>
                        <td className="tr">{ d.shop_name}</td>
                        <td className="tr">{ d.status}</td>
                        
                        </tr>
                    )
                    }) : <tr><td colSpan="5">Loading...</td></tr> }
                    </tbody>
                </table>
                    
      
            </div>

        );
    }
}

export default Dataviz;