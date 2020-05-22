import React from 'react'
import './Collectionitem.scss'
export default function CollectionItem({id,name,price,imageUrl}) {
    return (
        <div className='collection-item'>
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}>
         
            </div>
            <div className="collection-footer">
    <span className="name">{name}</span>
    <span className="price">{price}</span>
            </div>
        </div>
    )
}
