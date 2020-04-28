import React from 'react';

import axios from 'axios';
import DjangoCSRFToken from 'django-react-csrftoken'


class Postform extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            shop: '',
            status:''
          };
          
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e) =>{
        
        const{name, shop, status}=this.state
        let formData = new FormData(); 
        formData.append('name',name)
        formData.append('shop',shop)
        formData.append('status',status)
        
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/api/get_shop_details', formData, config)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
            
        }
    
    render(){
        const{name, shop, status}=this.state
        return(
            <div>
                <div align="left"></div>
                <form onSubmit={this.submitHandler}>
                <DjangoCSRFToken/>
                <div align="center">
                <input className="in" type="text" name="name" placeholder="Name" value={name} onChange={this.changeHandler} />
                </div>
               <br/>
                <div align="center">
                <input className="in" type="text" name="shop" placeholder="Shop Name" value={shop} onChange={this.changeHandler} />   
              </div>
              <br/>
                
                <input className="in" type="text" name="status" placeholder="Status" value={status} onChange={this.changeHandler} />
               
                <br/>
                <br/>
                <button className="button" type="submit">submit</button>
                </form>
               
              
      
            </div>

        );
    }
}

export default Postform;