import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle : "Welcome To My Portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);

    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        }else {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        axios.get('https://ignacio.devcamp.space/portfolio/portfolio_items')
      .then(response =>  {
        if (filter) {
            this.setState({
                data: response.data.portfolio_items.filter(item => {
                return item.category === filter;
            })
            })
        } else {
            this.setState({
                data: response.data.portfolio_items
            })
        }
        
        })
        .catch(error => {
            console.log(error);
        })
        .finally( () => {
            // always executed
        });
        }

    portfolioItems() {
        return this.state.data.map(item => {
        return (
            <PortfolioItem 
            key={item.id} 
            item= {item}
            /> 
            );
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loadiing...</div>
        }

        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                <button className="btn" onClick={() => this.handleFilter('Programming')}>Programming</button>
                    <button className="btn" onClick={() => this.handleFilter('Social Media')}>Social Media</button>
                    <button className="btn" onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                    <button className="btn" onClick={() => this.handleFilter('Event Service')}>Event Service</button>
                    <button className="btn" onClick={() => this.handleFilter('Food Industry')}>Food Industry</button>
                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>All</button>
                </div>
                <div className="portfolio-items-wrapper"> {this.portfolioItems()} </div>
            </div>
        );
    }
}