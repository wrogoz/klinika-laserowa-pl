import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

export default class SelectLaserIntervetion extends React.Component<{},{}>{
    render(){
        return(
             <SelectRow>
                <SelectColumn xs='12'>
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
                </SelectColumn>
            </SelectRow>
        )
    }
}

const SelectRow = styled(Row)`
    margin-bottom:45px;
`
const SelectColumn = styled(Col)`
    display:flex;
    display: -webkit-flexbox;
    justify-content:center;
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