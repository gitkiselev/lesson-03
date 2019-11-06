import React from 'react';
import './post-add-form.css';
import { Button } from 'reactstrap';
const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
                />
                {/* <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    onClick={() => onAdd('Hello')}>
                    Добавить
                </button> */}
                <Button onClick={() => onAdd('Hello')} outline color="secondary">Добавить</Button>
        </div>
    )
}

export default PostAddForm;