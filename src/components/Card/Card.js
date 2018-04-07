import React, { PureComponent } from 'react';
import './Card.css';

export class Card extends PureComponent {

    render() {
        return (
            <div className="card">
                <div className="image-container">
                    <div className="image-source">
                        <img src={this.props.thumbnailUrl} alt="delicious spaghett" />
                    </div>
                </div>
                <div className="text-container">
                    {this.props.children}
               </div>
            </div>
        );
    }
}

Card.defaultProps = {thumbnailUrl: "https://www.gimmesomeoven.com/wp-content/uploads/2016/06/Ultra-Garlicky-Spaghetti-1-1.jpg"}

export class Lede extends PureComponent {

    render() {
        return(
            <div className="lede-container">
                <div className="lede-inner">
                    <h6 className="author">{this.props.author}</h6>
                    <h3 className="lede-text">{this.props.text}</h3>
                </div>
            </div>
        );
    }
}
export class Headline extends PureComponent {

    render() {
        return(
            <div className="headline-container">
                <div className="headline-inner">
                    <h1>{this.props.text}</h1>
                </div>
            </div>
        );
    }
}