import React from "react";
import "./DropdownPlaceholder.css";

export default class DropdownPlaceholder extends React.Component {

  render() {
    return (
      <div className="dropdown-placeholder">
        <div className="filter">
          <select name="countries" className="options" defaultValue="" 
          onChange={event => this.props.onCountrySelected(event.target.value)}>
            <option value="">Select country</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Romania">Romania</option>
            <option value="China">China</option>
            <option value="Trinidad &amp; Tobago">Trinidad & Tobago</option>
            <option value="China">Pakistan</option>
          </select>
          <select name="course" className="options" defaultValue="" 
          onChange={event => this.props.onCourseSelected(event.target.value)}>
            <option value="">Select course</option>
            <option value="main">Main</option>
            <option value="dessert">Dessert</option>
          </select>
          <select name="dietaryrestrictions" className="options" defaultValue="" 
          onChange={event => this.props.onRestrictionsSelected(event.target.value)}>
            <option value="">Dietary restrictions</option>
            <option value="gluten">Gluten-free</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>
      </div>
    );
  }
}
