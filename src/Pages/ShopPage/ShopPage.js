import React, { Component } from 'react'
import Shop_Data from '../../ShopData.js'
import PreviewCollection from '../../Component/PreviewCollection/PreviewCollection.js';
export default class ShopPage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {

            collections:Shop_Data
           
              
        }
    }
    render() {
        const {collections} = this.state;
        return (
           
            <div className='shop-page'>

{collections.map(collection => (

<PreviewCollection {...collection} key={collection.id} ></PreviewCollection>




)
)}

           
            </div>
        )
    }
}
