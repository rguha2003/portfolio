import React from 'react';
import SOCIALS from '../data/socialProfiles';

const SocialProfile= props =>{
    
        const {link, image} = props.socialProfile;
        return(
            <span>
                <a href = {link}>
                <img src={image} alt = 'SOCIALS' style= {{width: 35,height: 35, margin: 5}}/>
                </a> 
            </span>
        )
    }

const SocialProfiles = () =>{
    
        return(
            <div>
                <h2>Connect here!</h2>
                <div>
                    {
                      SOCIALS.map(SOCIAL=>{
                          return(
                              <SocialProfile key={SOCIAL.id} socialProfile={SOCIAL}/>
                          )
                      })  
                        }
                </div>
            </div>
        )
    }

export default SocialProfiles;