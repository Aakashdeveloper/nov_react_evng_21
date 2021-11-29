import React,{Component} from 'react';
import './QuickSearch.css';

class QuickSearch extends Component{
    render(){
        return(
            <div className="quickSearch">
                <span id="QuickSearchHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurant By MealType
                </span>
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="images/nightlife.png" alt="cardImg"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            <a href="listing.html">Nightlife</a>
                        </div>
                        <div className="componentSubHeading">
                            Best Clubs for Nightlife
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSearch;