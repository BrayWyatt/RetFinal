import React, { Component } from 'react';

class PostForm extends Component {
render() {
    return (
        <div>
        <h1>Crear un post</h1>
        <form>
        <input required type="text" placeholder="Introduzca el título del post" /><br /><br />
        <textarea required rows="5" cols="28" placeholder="Introduzca Post" /><br /><br />
        <button>Post</button>
        </form>
        </div>
        );
    }
}
export default PostForm;
