import React from "react";

class Invitations extends React.Component {
 constructor(props) {
		super(props);
		this.state = {
			items: [],
			DataisLoaded: false
		};
	}
	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Test.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Test.... </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					User_Name: { item.username },
					Full_Name: { item.name },
					User_Email: { item.email }
					</ol>
				))
			}
		</div>
	);
}
}

export default Invitations;
