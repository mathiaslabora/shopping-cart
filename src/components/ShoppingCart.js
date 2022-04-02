import React, { Component } from 'react'
import Phone from './Phone'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from './Constants'


// DnD Spec
const ShoppingCartSpec = {
    drop(){
    return { name: 'ShoppingCart'}
    }
    }

// DnD DropTarget - collect
let collect = ( connect, monitor )=>{
    return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
    };
    }

class ShoppingCart extends Component {


    
    render() {
        return (
            <div className="shopping-cart">
                <Phone name="Test_Phone" />
            </div>
        )
    }
} export default ShoppingCart;