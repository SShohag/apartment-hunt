import React from 'react';
import "./PageHome.scss"
import house1 from "../../images/house/house1.png"
import house2 from "../../images/house/house2.png"
import house3 from "../../images/house/house3.png"
import house4 from "../../images/house/house4.png"
import house5 from "../../images/house/house5.png"
import house6 from "../../images/house/house6.png"
import locationLogo from "../../images/logos/location.png"
import bedLogo from "../../images/logos/bed 1.png"
import bathLogo from "../../images/logos/bath 1.png"

import service1 from "../../images/logos/apartment 1.png"
import service2 from "../../images/logos/affordable 1.png"
import service3 from "../../images/logos/lessee 1.png"

const PageHome = () => {


    const [state] = React.useState([
        {
            id:1,
            img:house1,
            heading:"Washington Avenue",
            price:194,
            text:""
        },
        {
            id:2,
            img:house2,
            heading:"Family Apartment Three",
            price:356,
            text:"" 
        },
        {
            id:3,
            img:house3,
            heading:"Gorgeous House",
            price:256,
            text:"" 
        },
        {
            id:4,
            img:house4,
            heading:"Luxury Villa",
            price:345,
            text:"" 
        },
        {
            id:5,
            img:house5,
            heading:"Epic Huda Palacio",
            price:536,
            text:""  
        },
        {
            id:6,
            img:house6,
            heading:"Washington Avenue",
            price:283,
            text:"" 
        }
    ])

    const [services]=React.useState([
        {
            "id":1,
            "heading":"Wide Range of Properties",
            "img":service1,
            "description":""
        },
        {
            "id":2,
            "heading":"Financing Made Easy",
            "img":service2,
            "description":""
        },
        {
            "id":3,
            "heading":"Trusted by Thousands",
            "img":service3,
            "description":""
        }
        
    ])

    return (
        <div className="container">
                <div className="houseHeading text-center mt-5">
                    <p className="smallHeading">House Rent</p>
                    <h2>Discover The latest Rent <br/> available today</h2>
                </div>
                <div className="row">
                {state.map(info=>(
                    
                    <div className=" col-md-4 col-sm-6 mt-5">
                    <img className="w-100 h-50" src={info.img} alt=""/>
                    <div className="houseDetails mt-3">
                        <h5 className="text-center">{info.heading}</h5>
                        <p><small><img className="locationLogo"src={locationLogo} alt=""/> Nasirabad H/S Chattogram</small></p>
                        <div className="d-flex justify-content-between">
                            <p><small><img className="w-25" src={bedLogo} alt=""/> 3 Bedrooms</small></p>
                            <p><small><img className="w-25" src={bathLogo} alt=""/> 2 Bathroom</small></p>
                        </div>
                        <div className="houseDetails d-flex justify-content-between mt-5">
                            <h2>$ {info.price} </h2>
                            <button className="btn btn-primary">
                                show details
                            </button>
                        </div>
                    </div>
                </div>
                
                ))}
                </div>

                <div className="serviceContainer">
                    <div className="mt-5 p-5 text-center">
                    <p className="smallHeading">Service</p>
                    <h3>We're an agency tailored to all <br/> clients needs that always delivers</h3>
                    </div>
                    <div className="row justify-content-center text-center">
                        {services.map(service=>(
                            <div className="col-md-4 col-sm-6 mt-3 p-5">
                                <img className="w-50" src={service.img} alt=""/>
                                <div className="serviceDetails mt-2">
                                <h4>{service.heading}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas quidem non fugiat officia esse!</p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>   
        </div>
    );
};

export default PageHome;