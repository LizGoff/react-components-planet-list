import React from 'react';

const NewStarForm = props => (
<form onSubmit={props.handleSubmitForChild}>
    <input value={props.newStar.name} onChange={props.handleChangeForChild('name')} placeholder="Star Name" />
    <input value={props.newStar.diameter} onChange={props.handleChangeForChild('diameter')} placeholder="Star Name" />
    <input type="submit" value="Add New Star" />
</form>);

export default NewStarForm;
