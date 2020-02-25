import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import {getPhone} from '../Actions/productActions'
import PropTypes from "prop-types";
import logo from '../iphone-11-(bl)-350x350.jpg'
import {Card, Icon, Image, Container, Header, Item, Grid, Comment} from 'semantic-ui-react'
import Chat from './Chat';

class Phone extends Component {

    componentDidMount() {
        this.props.getPhone(this.props.match.params.id)
    }

    render() {
        let ren;
        if (!(this.props.phone.mobileIdentifier == undefined)) {
            ren = (
                <Container>
                    <Item href="/home">
                        <Icon link name="home" size="large" style={{marginBottom: 20, marginTop: 10}}/>
                    </Item>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column >
                                <Image src={logo} wrapped ui={true} />
                            </Grid.Column>
                            <Grid.Column style={{marginTop: 60}}> 
                                <Header as="h1" style={{marginBottom: 2}}> Model {this.props.phone.model} Brand {this.props.phone.brand}</Header>                                       
                                <Header as="h6" style={{marginTop: 0, marginBottom: 5}} size="tiny"> Rate </Header>
                                <Header as="h4"> Price : {this.props.phone.price}</Header>
                                <Header as="h4"> Year of graduation : {this.props.phone.graduationYear}</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Chat phoneId = {this.props.phone.mobileIdentifier}/>
                </Container>
            )
        } 

        return(
            <div>
                {ren}
            </div>
        );
    }


}

const mapToStateProps = state => ({
     phone : state.productReducer.item
    })

export default connect(mapToStateProps, {getPhone})(Phone);