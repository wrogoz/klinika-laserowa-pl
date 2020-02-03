import React from 'react'
import styled from 'styled-components';

export default class SelectLaserIntervetion extends React.Component<{},{}>{
    render(){
        return(
             <SelectSection>
                    <select>
                    <option>
                            Rodzaje zabiegów laserowych
                        </option>
                        <option>
                            Laser Cutera Excel V
                        </option>
                        <option>
                            Laser Cutera Excel V
                        </option>
                        <option>
                            Laser Cutera Excel V
                        </option>
                    </select>
            </SelectSection>
        )
    }
}


const SelectSection = styled.section`
    display:flex;
    justify-content:center;
    margin:15px 0 30px 0;
    select{
        border:none;
        background-color:#8849a5;
        padding:5px 20px 5px 30px;
        border-radius:5px;
        color:#fff;
        option{
            background-color:#ccc;
            color:#fff;
            border:1px solid #ccc;

        }
        option:first-of-type{
            background-color:#8849a5;
            border:none;
        }
    }
`