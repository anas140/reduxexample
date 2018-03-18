import React, { Component } from 'react';

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};

		// bind this to onChange event
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}
	onChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e) {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(post)
		})
			.then(res => res.json())
			.then(data => console.log(data))
	}
	render() {
		return(
			<div>
				<h3>Add New Post</h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title: </label>
						<input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
					</div>
					<br />
					<div>
						<label>Body: </label>
						<textarea name="body" onChange={this.onChange} value={this.state.body}/>
					</div>
					<br />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default PostForm;