import React from "react";
import './Tools.css';

class Tools extends React.Component {
    render (){
        const {
            children,
            onAction,
        } = this.props;
        const onlyChild =React.Children.only(children);
        const count=React.Children.count(onlyChild.props.children);

        return (
            <div className="list-tools">
                <div className="list-hedder">
                    <select onChange={onAction} name="status">
                        <option value='all'>All</option>
                        <option value='active'>Active</option>
                        <option value='non-active'>Non-Active</option>
                    </select>
                </div>
                {children}
                <div className="list-footer">
                    <h4>total {count} items</h4>
                </div>
            </div>
        );
    }
}

export default Tools;