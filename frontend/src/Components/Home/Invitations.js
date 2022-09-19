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
"http://localhost:8081/invite_list/invitee/ 124")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					invite: json,
					DataisLoaded: true
				});
			})
	}
	async componentDidMount() {
    const response = await fetch("http://localhost:8081/invite_list/invitee/124");
    const json = await response.json();
    this.setState({
        invite: json,
        DataisLoaded: true
    });
    console.log(json);
      }
	render() {
		const { DataisLoaded, invite } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Test.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Test.... </h1> {
				invite.map((invite) => (
				<ol key = { invite.id } >
					name: { invite.username },
					User_Email: { invite.email }
					</ol>
				))
			}
		</div>
	);
}
}

export default Invitations;
